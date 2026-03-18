"use server";

import { db } from "@/db";
import { waitlist } from "@/db/schema";

export async function joinWaitlist(formData: FormData) {
  const email = formData.get("email");

  if (!email || typeof email !== "string") {
    return { error: "Email is required." };
  }

  const trimmed = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return { error: "Please enter a valid email." };
  }

  try {
    await db.insert(waitlist).values({ email: trimmed }).onConflictDoNothing();
    return { success: true };
  } catch {
    return { error: "Something went wrong. Please try again." };
  }
}
