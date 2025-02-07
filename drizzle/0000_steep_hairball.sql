CREATE TABLE "applicants" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"ssc_marks" integer NOT NULL,
	"hsc_marks" integer NOT NULL,
	"graduation_marks" integer NOT NULL,
	"caste_category" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "eligibility_criteria" (
	"id" serial PRIMARY KEY NOT NULL,
	"scholarship_id" integer NOT NULL,
	"min_ssc" integer NOT NULL,
	"min_hsc" integer NOT NULL,
	"min_graduation" integer NOT NULL,
	"caste_category" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "scholarships" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"provider" text NOT NULL,
	"amount" integer NOT NULL,
	"deadline" timestamp NOT NULL,
	"url" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "eligibility_criteria" ADD CONSTRAINT "eligibility_criteria_scholarship_id_scholarships_id_fk" FOREIGN KEY ("scholarship_id") REFERENCES "public"."scholarships"("id") ON DELETE no action ON UPDATE no action;