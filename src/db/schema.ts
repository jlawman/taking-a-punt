import { pgTable, serial, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";

export const waitlist = pgTable(
  "waitlist",
  {
    id: serial("id").primaryKey(),
    email: text("email").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [uniqueIndex("waitlist_email_idx").on(table.email)],
);

export const speakerRecommendations = pgTable("speaker_recommendations", {
  id: serial("id").primaryKey(),
  speakerName: text("speaker_name").notNull(),
  reason: text("reason").notNull(),
  submitterEmail: text("submitter_email").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
