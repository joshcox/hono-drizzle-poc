import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const todo = sqliteTable("todo", {
  uuid: text("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  createdAt: text("createdAt").notNull(),
  updatedAt: text("updatedAt").notNull(),
  archived: integer("active", { mode: "boolean" }).notNull().default(true),
  working: integer("working", { mode: "boolean" }).notNull().default(true),
});

export const todo_work_log = sqliteTable("todo_work_log", {
  uuid: text("uuid").primaryKey(),
  todo_uuid: text("todo_uuid").notNull(),
  start: text("start").notNull(),
  end: text("end")
});

export const exercise_database = sqliteTable("exercise_database", {
  uuid: text("uuid").primaryKey(),
  name: text("name").notNull().unique(),
  description: text("description"),
  filename: text("filename").notNull().unique(),
  createdAt: text("createdAt").notNull(),
  updatedAt: text("updatedAt").notNull(),
});