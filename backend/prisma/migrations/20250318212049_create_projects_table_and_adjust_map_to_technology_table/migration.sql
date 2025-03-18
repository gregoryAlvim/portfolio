/*
  Warnings:

  - You are about to drop the `Technologies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Technologies";

-- CreateTable
CREATE TABLE "technologies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "emphasis" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "technologies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "images" TEXT[],
    "level" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "emphasis" BOOLEAN NOT NULL DEFAULT false,
    "repository" TEXT NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);
