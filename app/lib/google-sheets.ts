import { google, sheets_v4 } from "googleapis";

export const ENQUIRY_SHEET_ID = process.env.GOOGLE_ENQUIRY_SHEET_ID || "";
export const ADMISSION_SHEET_ID = process.env.GOOGLE_ADMISSION_SHEET_ID || "";

// Lazy singleton — created on first API call, not at module load time.
// This avoids issues on Vercel where env vars may not be ready at import time.
let sheetsClient: sheets_v4.Sheets | null = null;

function getSheetsClient(): sheets_v4.Sheets {
  if (sheetsClient) return sheetsClient;

  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!email || !rawKey) {
    throw new Error(
      "Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY env variables"
    );
  }

  const key = rawKey.replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  sheetsClient = google.sheets({ version: "v4", auth });
  return sheetsClient;
}

/**
 * Append a row to a specific sheet tab.
 * Auto-creates the tab and header row if they don't exist.
 */
export async function appendToSheet(
  spreadsheetId: string,
  sheetName: string,
  headers: string[],
  values: string[]
) {
  const sheets = getSheetsClient();

  // Ensure the sheet tab exists, create it if missing
  await ensureSheetTab(sheets, spreadsheetId, sheetName);

  // Check if sheet has headers already
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheetName}!A1:A1`,
  });

  // If empty, write headers first
  if (!existing.data.values || existing.data.values.length === 0) {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A1`,
      valueInputOption: "RAW",
      requestBody: { values: [headers] },
    });
  }

  // Append data row
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A1`,
    valueInputOption: "RAW",
    requestBody: { values: [values] },
  });
}

/**
 * Check if a sheet tab exists; create it if not.
 */
async function ensureSheetTab(
  sheets: sheets_v4.Sheets,
  spreadsheetId: string,
  sheetName: string
) {
  const spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId,
  });

  const tabExists = spreadsheet.data.sheets?.some(
    (s) => s.properties?.title === sheetName
  );

  if (!tabExists) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: { title: sheetName },
            },
          },
        ],
      },
    });
  }
}

// Simple in-memory rate limiter (per IP, per endpoint)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // max 5 requests per minute per IP

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true; // allowed
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false; // blocked
  }

  entry.count++;
  return true; // allowed
}

// Sanitize user input — strip HTML tags and trim
export function sanitize(input: string): string {
  return input
    .replace(/<[^>]*>/g, "") // strip HTML tags
    .replace(/[<>]/g, "") // remove stray angle brackets
    .trim()
    .slice(0, 1000); // max 1000 chars
}

// Validate email format
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Validate phone (digits, spaces, +, -, min 7 chars)
export function isValidPhone(phone: string): boolean {
  return /^[+\d\s-]{7,20}$/.test(phone);
}