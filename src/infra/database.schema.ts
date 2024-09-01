import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const exercise_package = sqliteTable("exercise_package", {
  uuid: text("uuid").primaryKey(),
  name: text("name").notNull().unique(),
  description: text("description"),
  filename: text("filename").notNull().unique(),
  createdAt: text("createdAt").notNull(),
  updatedAt: text("updatedAt").notNull(),
});