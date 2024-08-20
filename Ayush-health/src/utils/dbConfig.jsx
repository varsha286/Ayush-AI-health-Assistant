import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://SMMA_owner:nHr4ipEt8fIy@ep-winter-haze-a58zahrp.us-east-2.aws.neon.tech/Ayush-smart-health?sslmode=require"
);
export const db = drizzle(sql, { schema });
