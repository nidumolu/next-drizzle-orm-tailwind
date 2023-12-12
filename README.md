This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install 
# run the next.js server[http://localhost:3000]
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker Postgres run and connect to postgres db via adminer

```bash
docker compose up
# Docker Postgres run

# verify adminer (to connect to your postgres) running @ locahost:8080
locahost:8080
```
## Generate migrations (SQL files from schema and push to postgres)
```bash

# Drizzle migration run -- to generate migration sql files (commands mentioned in package.json under scripts)
npm run migration:generate
# Drizzle migration push
npm run migration:push
# verify from adminer if table(s) got created (to connect to your postgres) running @ 
locahost:8080
```
