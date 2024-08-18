import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  uuid: text("uuid").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
});

export const todo = sqliteTable("todo", {
  uuid: text("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  createdAt: text("createdAt").notNull(),
  updatedAt: text("updatedAt").notNull(),
  archived: integer("active", { mode: "boolean" }).notNull().default(true),
  working: integer("working", { mode: "boolean" }).notNull().default(true),
});

export const todo_time_log = sqliteTable("todo_time_log", {
  uuid: text("id").primaryKey(),
  todo_uuid: text("todoId").notNull(),
  start: text("start").notNull(),
  end: text("end").notNull(),
});