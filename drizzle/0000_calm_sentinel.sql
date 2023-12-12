CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" varchar(256) NOT NULL,
	"phone" varchar(13),
	"country" varchar(20),
	"email" varchar(40) NOT NULL,
	"password" varchar(30) NOT NULL
);
