CREATE TABLE `todo` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`createdAt` text NOT NULL,
	`updatedAt` text NOT NULL,
	`active` integer DEFAULT true NOT NULL,
	`working` integer DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE `todo_work_log` (
	`uuid` text PRIMARY KEY NOT NULL,
	`todo_uuid` text NOT NULL,
	`start` text NOT NULL,
	`end` text
);
--> statement-breakpoint
CREATE TABLE `user` (
	`uuid` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL
);
