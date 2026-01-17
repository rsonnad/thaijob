import { pgTable, text, serial, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  experience: text("experience"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const referrals = pgTable("referrals", {
  id: serial("id").primaryKey(),
  referrerName: text("referrer_name").notNull(),
  referrerEmail: varchar("referrer_email", { length: 255 }).notNull(),
  candidateName: text("candidate_name").notNull(),
  candidateContact: text("candidate_contact").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertApplicationSchema = createInsertSchema(applications).omit({ 
  id: true, 
  createdAt: true 
});

export const insertReferralSchema = createInsertSchema(referrals).omit({ 
  id: true, 
  createdAt: true 
});

export type Application = typeof applications.$inferSelect;
export type InsertApplication = z.infer<typeof insertApplicationSchema>;
export type Referral = typeof referrals.$inferSelect;
export type InsertReferral = z.infer<typeof insertReferralSchema>;
