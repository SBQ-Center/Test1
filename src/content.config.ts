import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const base = z.object({
  title: z.string(),
  slug: z.string(),
  excerpt: z.string().default(''),
  image: z.string().optional(),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  date: z.coerce.date().optional(),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: base.extend({
    date: z.coerce.date(),
    author: z.string().optional(),
    category: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: base.extend({
    program: z.string().optional(),
    donor: z.string().optional(),
    location: z.string().optional(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
    status: z.enum(['planned', 'active', 'completed']).optional(),
    beneficiaries: z.number().optional(),
  }),
});

const programs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/programs' }),
  schema: base.extend({
    order: z.number().default(1),
    icon: z.string().default('◉'),
  }),
});

const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: base.extend({
    date: z.coerce.date(),
    program: z.string().optional(),
    location: z.string().optional(),
    consentConfirmed: z.boolean().optional(),
  }),
});

const reports = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reports' }),
  schema: base.extend({
    date: z.coerce.date(),
    cover: z.string().optional(),
    document: z.string().optional(),
    reportType: z.string().optional(),
  }),
});

const opportunities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/opportunities' }),
  schema: base.extend({
    date: z.coerce.date(),
    deadline: z.coerce.date().optional(),
    kind: z.enum(['job', 'internship', 'volunteer', 'other']).optional(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    role: z.string(),
    photo: z.string().optional(),
    order: z.number().default(1),
  }),
});

const partners = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/partners' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    logo: z.string().optional(),
    website: z.string().url().optional(),
    order: z.number().default(1),
  }),
});

export const collections = { news, projects, programs, stories, reports, opportunities, team, partners };
