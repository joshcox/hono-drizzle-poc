import { pgTable, uuid, text } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  uuid: uuid('uuid').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
});
