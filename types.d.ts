import { users } from "@/src/db/schema";
import { InferModel } from "drizzle-orm";
export type User = InferModel<typeof users, "select">;
