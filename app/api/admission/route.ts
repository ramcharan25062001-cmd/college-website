import { NextRequest, NextResponse } from "next/server";
import {
  appendToSheet,
  ADMISSION_SHEET_ID,
  checkRateLimit,
  sanitize,
  isValidEmail,
  isValidPhone,
} from "@/app/lib/google-sheets";

const SHEET_NAME = "Admissions";
const HEADERS = [
  "Name",
  "Email id",
  "Phone Number",
  "Selected Program",
];

export async function POST(request: NextRequest) {
  try {
    // Rate limit
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";
    if (!checkRateLimit(`admission-${ip}`)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { board, name, email, mobile, password, confirmPassword } = body;

    // Validate required fields
    if (!board || !name || !email || !mobile || !password) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "Passwords do not match." },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters." },
        { status: 400 }
      );
    }

    const cleanEmail = sanitize(email);
    if (!isValidEmail(cleanEmail)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const cleanMobile = sanitize(mobile);
    if (!isValidPhone(cleanMobile)) {
      return NextResponse.json(
        { error: "Invalid mobile number." },
        { status: 400 }
      );
    }

    // NOTE: We do NOT store passwords in Google Sheets.
    // This registration is for lead capture only.
    // A real auth system would hash + store in a secure database.
    await appendToSheet(ADMISSION_SHEET_ID, SHEET_NAME, HEADERS, [
      sanitize(name),
      cleanEmail,
      cleanMobile,
      sanitize(board),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admission registration error:", error instanceof Error ? error.message : error);
    console.error("Full error:", JSON.stringify(error, Object.getOwnPropertyNames(error as object)));
    return NextResponse.json(
      { error: "Failed to register. Please try again." },
      { status: 500 }
    );
  }
}