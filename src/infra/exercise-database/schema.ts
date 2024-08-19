import { integer, SQLiteColumn, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const exercise = sqliteTable("exercise", {
  slug: text("slug").primaryKey(),
  name: text("name").notNull(),
  anatomicalName: text("anatomical_name"),
  repType: text("rep_type").notNull(),
  status: text("status").notNull(),
  difficulty: integer("difficulty"),
});

export const equipment = sqliteTable("equipment", {
  name: text("name").primaryKey(),
  imageSlug: text("image_slug"),
  urn: text("urn").notNull(),
});

export const exerciseEquipment = sqliteTable("exercise_equipment", {
  exerciseSlug: text("exercise_slug").notNull().references(() => exercise.slug),
  equipmentName: text("equipment_name").notNull().references(() => equipment.name),
});

export const classification = sqliteTable("classification", {
  name: text("name").primaryKey(),
  parent: text("parent").references((): SQLiteColumn => classification.name),
});

export const exerciseClassification = sqliteTable("exercise_classification", {
  exerciseSlug: text("exercise_slug").notNull().references(() => exercise.slug),
  classificationName: text("classification_name").notNull().references(() => classification.name),
});

export const chain = sqliteTable("chain", {
  urn: text("urn").primaryKey(),
  name: text("name").notNull(),
  version: text("version"),
});

export const exerciseChain = sqliteTable("exercise_chain", {
  exerciseSlug: text("exercise_slug").notNull().references(() => exercise.slug),
  chainUrn: text("chain_urn").notNull().references(() => chain.urn),
});

export const family = sqliteTable("family", {
  urn: text("urn").primaryKey(),
});

export const chainFamily = sqliteTable("chain_family", {
  chainUrn: text("chain_urn").notNull().references(() => chain.urn),
  familyUrn: text("family_urn").notNull().references(() => family.urn),
});