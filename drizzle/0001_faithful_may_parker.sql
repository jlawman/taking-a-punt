CREATE TABLE "speaker_recommendations" (
	"id" serial PRIMARY KEY NOT NULL,
	"speaker_name" text NOT NULL,
	"reason" text NOT NULL,
	"submitter_email" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
