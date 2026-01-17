import { applications, referrals, type InsertApplication, type Application, type InsertReferral, type Referral } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createApplication(app: InsertApplication): Promise<Application>;
  createReferral(ref: InsertReferral): Promise<Referral>;
}

export class DatabaseStorage implements IStorage {
  async createApplication(insertApp: InsertApplication): Promise<Application> {
    const [app] = await db
      .insert(applications)
      .values(insertApp)
      .returning();
    return app;
  }

  async createReferral(insertRef: InsertReferral): Promise<Referral> {
    const [ref] = await db
      .insert(referrals)
      .values(insertRef)
      .returning();
    return ref;
  }
}

export const storage = new DatabaseStorage();
