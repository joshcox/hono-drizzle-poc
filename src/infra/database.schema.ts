import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  uuid: text("uuid").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
});

export const todo = sqliteTable("todo", {
  uuid: text("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  userUuid: text("userId").notNull(),
  status: text("status", { enum: ['not started', 'in progress', 'done', 'archived'] }).notNull().$default(() => 'not started'),
  createdAt: text("createdAt").notNull(),
  updatedAt: text("updatedAt").notNull(),
});


