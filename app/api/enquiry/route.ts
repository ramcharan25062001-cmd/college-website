import { NextRequest, NextResponse } from "next/server";
import {
  appendToSheet,
  ENQUIRY_SHEET_ID,
  checkRateLimit,
  sanitize,
  isValidEmail,
  isValidPhone,
} from "@/app/lib/google-sheets";

const SHEET_NAME = "Enquiries";
const HEADERS = [
  "Full Name",
  "Email ID",
  "Phone Number",
  "Selected Program",
  "Any message",
];

export async function POST(request: NextRequest) {
  try {
    // Rate limit
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";
    if (!checkRateLimit(`enquiry-${ip}`)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, programme, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required." },
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

    const cleanPhone = sanitize(phone);
    if (!isValidPhone(cleanPhone)) {
      return NextResponse.json(
        { error: "Invalid phone number." },
        { status: 400 }
      );
    }

    await appendToSheet(ENQUIRY_SHEET_ID, SHEET_NAME, HEADERS, [
      sanitize(name),
      cleanEmail,
      cleanPhone,
      sanitize(programme || ""),
      sanitize(message || ""),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enquiry submission error:", error instanceof Error ? error.message : error);
    console.error("Full error:", JSON.stringify(error, Object.getOwnPropertyNames(error as object)));
    return NextResponse.json(
      { error: "Failed to submit enquiry. Please try again." },
      { status: 500 }
    );
  }
}