"use server";

import { db } from "@/db";
import { speakerRecommendations, waitlist } from "@/db/schema";

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

export async function recommendGuest(formData: FormData) {
  const speakerName = formData.get("speakerName");
  const reason = formData.get("reason");
  const email = formData.get("email");

  if (!speakerName || typeof speakerName !== "string" || !speakerName.trim()) {
    return { error: "Guest name is required." };
  }
  if (!reason || typeof reason !== "string" || !reason.trim()) {
    return { error: "Please tell us why they'd be a great guest." };
  }
  if (!email || typeof email !== "string") {
    return { error: "Your email is required." };
  }

  const trimmedEmail = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    return { error: "Please enter a valid email." };
  }

  try {
    await db.insert(speakerRecommendations).values({
      speakerName: speakerName.trim(),
      reason: reason.trim(),
      submitterEmail: trimmedEmail,
    });
    return { success: true };
  } catch {
    return { error: "Something went wrong. Please try again." };
  }
}
