import { relations } from "drizzle-orm";
import {
  bigint,
  bigserial,
  boolean,
  char,
  date,
  decimal,
  doublePrecision,
  integer,
  interval,
  json,
  jsonb,
  numeric,
  pgEnum,
  pgTable,
  primaryKey,
  real,
  serial,
  smallserial,
  text,
  time,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name",{length: 256}).notNull(),
  phone: varchar("phone", { length: 13 }),
  country: varchar("country", { length: 20 }),
  email: varchar("email", { length:40}).notNull(),
  password: varchar("password", { length:30}).notNull(),
});
