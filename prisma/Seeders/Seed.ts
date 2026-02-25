import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "@Prisma/client";

const url = process.env.DATABASE_URL ?? "";

const adapter = new PrismaLibSql({ url });
const prisma = new PrismaClient({ adapter });

const Seeding = async (): Promise<void> => {
  const users = await Promise.all([
    prisma.user.upsert({
      where: { email: "alice@example.com" },
      update: { name: "Alice Johnson", password: "hashed_password_1" },
      create: { id: 1, name: "Alice Johnson", email: "alice@example.com", password: "hashed_password_1" },
    }),
    prisma.user.upsert({
      where: { email: "bob@example.com" },
      update: { name: "Bob Smith", password: "hashed_password_2" },
      create: { id: 2, name: "Bob Smith", email: "bob@example.com", password: "hashed_password_2" },
    }),
    prisma.user.upsert({
      where: { email: "carol@example.com" },
      update: { name: "Carol White", password: "hashed_password_3" },
      create: { id: 3, name: "Carol White", email: "carol@example.com", password: "hashed_password_3" },
    }),
    prisma.user.upsert({
      where: { email: "david@example.com" },
      update: { name: "David Brown", password: "hashed_password_4" },
      create: { id: 4, name: "David Brown", email: "david@example.com", password: "hashed_password_4" },
    }),
  ]);

  await Promise.all([
    prisma.post.upsert({
      where: { id: 1 },
      update: { title: "Getting Started with Elysia", content: "Elysia is a fast and ergonomic web framework for Bun.", authorId: users[0].id },
      create: { id: 1, title: "Getting Started with Elysia", content: "Elysia is a fast and ergonomic web framework for Bun.", authorId: users[0].id },
    }),
    prisma.post.upsert({
      where: { id: 2 },
      update: { title: "Why I Love TypeScript", content: "TypeScript brings type safety to JavaScript at scale.", authorId: users[0].id },
      create: { id: 2, title: "Why I Love TypeScript", content: "TypeScript brings type safety to JavaScript at scale.", authorId: users[0].id },
    }),
    prisma.post.upsert({
      where: { id: 3 },
      update: { title: "Prisma ORM Deep Dive", content: "Prisma makes database access easy with auto-generated types.", authorId: users[1].id },
      create: { id: 3, title: "Prisma ORM Deep Dive", content: "Prisma makes database access easy with auto-generated types.", authorId: users[1].id },
    }),
    prisma.post.upsert({
      where: { id: 4 },
      update: { title: "Building REST APIs with Bun", content: "Bun is a fast all-in-one JavaScript runtime.", authorId: users[1].id },
      create: { id: 4, title: "Building REST APIs with Bun", content: "Bun is a fast all-in-one JavaScript runtime.", authorId: users[1].id },
    }),
    prisma.post.upsert({
      where: { id: 5 },
      update: { title: "Introduction to LibSQL", content: "LibSQL is a fork of SQLite with replication support.", authorId: users[2].id },
      create: { id: 5, title: "Introduction to LibSQL", content: "LibSQL is a fork of SQLite with replication support.", authorId: users[2].id },
    }),
    prisma.post.upsert({
      where: { id: 6 },
      update: { title: "Clean Architecture in Node.js", content: "Separating concerns leads to more maintainable codebases.", authorId: users[3].id },
      create: { id: 6, title: "Clean Architecture in Node.js", content: "Separating concerns leads to more maintainable codebases.", authorId: users[3].id },
    }),
  ]);

  console.log("Seeding completed successfully.");
};

await Seeding();
