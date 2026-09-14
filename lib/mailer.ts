import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string) {
  return email.length <= 254 && EMAIL_RE.test(email);
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Strips line breaks so user input can't inject extra mail headers.
export function singleLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export function json(body: { success: boolean; message: string }, status = 200) {
  return Response.json(body, { status });
}

// Simple in-memory rate limit: good enough to stop casual abuse on a single instance.
const hits = new Map<string, number[]>();

export function isRateLimited(request: Request, key: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const id = `${key}:${ip}`;
  const now = Date.now();
  const recent = (hits.get(id) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(id, recent);
  return recent.length > limit;
}

export function mailConfigured() {
  return Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASS);
}

export function getTransporter() {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

/** Inbox that receives contact messages and new-subscriber notifications. */
export function adminInbox() {
  return process.env.CONTACT_TO || process.env.EMAIL_USER!;
}

export async function readJson(request: Request): Promise<Record<string, unknown> | null> {
  try {
    const body = await request.json();
    return body && typeof body === "object" ? body : null;
  } catch {
    return null;
  }
}

export function field(body: Record<string, unknown>, name: string) {
  const value = body[name];
  return typeof value === "string" ? value.trim() : "";
}
