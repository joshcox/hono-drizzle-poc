CREATE TABLE `todo` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`userId` text NOT NULL,
	`status` text NOT NULL,
	`createdAt` text NOT NULL,
	`updatedAt` text NOT NULL
);
