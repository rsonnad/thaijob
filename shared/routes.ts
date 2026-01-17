import { z } from 'zod';
import { insertApplicationSchema, insertReferralSchema, applications, referrals } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  application: {
    create: {
      method: 'POST' as const,
      path: '/api/applications',
      input: insertApplicationSchema,
      responses: {
        201: z.custom<typeof applications.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
  referral: {
    create: {
      method: 'POST' as const,
      path: '/api/referrals',
      input: insertReferralSchema,
      responses: {
        201: z.custom<typeof referrals.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type ApplicationInput = z.infer<typeof api.application.create.input>;
export type ApplicationResponse = z.infer<typeof api.application.create.responses[201]>;
export type ReferralInput = z.infer<typeof api.referral.create.input>;
export type ReferralResponse = z.infer<typeof api.referral.create.responses[201]>;
