## NestJS + PostgreSQL backend

This is a simple backend API for the Spectinga tech test.

## To run it

```bash
npm install
```

Create a .env file in the project root:

```bash
touch .env
```

Add the following to that file

```bash
DATABASE_URL="postgres://USERNAME:PASSWORD@localhost:5432/spectinga-db"
```
change USERNAME to the username, and PASSWORD to the password for PostgreSQL (default is postgres).

## Setup the DB

If Postgres not installed locally, you can use the docker compose file to create the DB in a container
```bash
docker-compose up
```
Note that you will need to use "postgres" as username & password

Then to setup the database by running the migrations and seeds:

```bash
npx prisma migrate dev
```

## Start the server

```bash
npm run start:dev
```
