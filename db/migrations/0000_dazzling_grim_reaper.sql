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
CREATE TABLE `todo_time_log` (
	`id` text PRIMARY KEY NOT NULL,
	`todoId` text NOT NULL,
	`start` text NOT NULL,
	`end` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `user` (
	`uuid` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL
);
