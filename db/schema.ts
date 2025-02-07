import { pgTable, text, integer, serial, timestamp } from 'drizzle-orm/pg-core';

export const scholarships = pgTable('scholarships', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  provider: text('provider').notNull(),
  amount: integer('amount').notNull(),
  deadline: timestamp('deadline').notNull(),
  url: text('url').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const eligibility_criteria = pgTable('eligibility_criteria', {
  id: serial('id').primaryKey(),
  scholarship_id: integer('scholarship_id')
    .notNull()
    .references(() => scholarships.id),
  min_ssc: integer('min_ssc').notNull(),
  min_hsc: integer('min_hsc').notNull(),
  min_graduation: integer('min_graduation').notNull(),
  caste_category: text('caste_category').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const applicants = pgTable('applicants', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  ssc_marks: integer('ssc_marks').notNull(),
  hsc_marks: integer('hsc_marks').notNull(),
  graduation_marks: integer('graduation_marks').notNull(),
  caste_category: text('caste_category').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
