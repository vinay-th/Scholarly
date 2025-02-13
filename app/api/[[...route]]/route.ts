import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { cors } from 'hono/cors';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';
import { db } from 'db/drizzle';
import { scholarships, eligibility_criteria, applicants } from 'db/schema';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

app.use(
  '*',
  cors({
    origin: '*', // Allow all origins
    allowMethods: ['GET', 'POST', 'OPTIONS'],
  })
);

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello Next.js!',
  });
});

app.get('v1/get-all-scholarships', async (c) => {
  const scholarshipsList = await db.select().from(scholarships);
  return c.json(scholarshipsList);
});

app.post(
  'v1/add-scholarship',
  zValidator(
    'json',
    z.object({
      key: z.string(),
      name: z.string(),
      description: z.string(),
      provider: z.string(),
      amount: z.number(),
      deadline: z.string().transform((str) => new Date(str)),
      url: z.string(),
      minSSC: z.number(),
      minHSC: z.number(),
      minGrad: z.number(),
      casteCategory: z.enum(['General', 'OBC', 'SC', 'ST']),
    })
  ),
  async (c) => {
    const {
      key,
      name,
      description,
      provider,
      amount,
      deadline,
      url,
      minSSC,
      minHSC,
      minGrad,
      casteCategory,
    } = c.req.valid('json');

    if (key.trim() !== process.env.SECRET_KEY?.trim()) {
      return c.json({
        message: 'Invalid key! Muh me lele laude!',
      });
    }

    const scholarship = await db
      .insert(scholarships)
      .values({
        name,
        description,
        provider,
        amount,
        deadline,
        url,
      })
      .returning({ id: scholarships.id });

    const eligibility = await db.insert(eligibility_criteria).values({
      scholarship_id: scholarship[0].id,
      min_ssc: minSSC,
      min_hsc: minHSC,
      min_graduation: minGrad,
      caste_category: casteCategory,
    });

    return c.json({
      message: 'Scholarship added successfully!',
    });
  }
);

app.post(
  'v1/find-scholarships',
  zValidator(
    'json',
    z.object({
      name: z.string(),
      ssc_marks: z.number(),
      hsc_marks: z.number(),
      graduation_marks: z.number(),
      caste_category: z.string(),
    })
  ),
  async (c) => {
    const { name, ssc_marks, hsc_marks, graduation_marks, caste_category } =
      c.req.valid('json');

    let scholarshipsList = await db.select().from(scholarships);

    const eligibility_criteriaList = await db
      .select()
      .from(eligibility_criteria);

    const filteredScholarships = eligibility_criteriaList.filter(
      (scholarship) =>
        ssc_marks >= scholarship.min_ssc &&
        hsc_marks >= scholarship.min_hsc &&
        graduation_marks >= scholarship.min_graduation &&
        (caste_category === scholarship.caste_category ||
          scholarship.caste_category === 'ALL')
    );

    scholarshipsList = scholarshipsList.filter((scholarship) =>
      filteredScholarships.some(
        (filteredScholarship) => scholarship.id === filteredScholarship.id
      )
    );
    // Sr No	Scholarship Name	Provider	Min SSC	Min HSC	Min Grad	Amount (₹)	Description	Deadline	Apply

    scholarshipsList = scholarshipsList.map((scholarship) => {
      const scholarshipEligibility = eligibility_criteriaList.find(
        (eligibility) => eligibility.scholarship_id === scholarship.id
      );

      return {
        id: scholarship.id,
        name: scholarship.name,
        provider: scholarship.provider,
        minSSC: scholarshipEligibility?.min_ssc,
        minHSC: scholarshipEligibility?.min_hsc,
        minGrad: scholarshipEligibility?.min_graduation,
        amount: scholarship.amount,
        description: scholarship.description,
        deadline: scholarship.deadline,
        url: scholarship.url,
        createdAt: scholarship.createdAt,
      };
    });

    const applicant = await db.insert(applicants).values({
      name,
      ssc_marks,
      hsc_marks,
      graduation_marks,
      caste_category,
    });

    return c.json(scholarshipsList);
  }
);

export const GET = handle(app);
export const POST = handle(app);
