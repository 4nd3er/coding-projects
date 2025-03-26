/*
  Warnings:

  - Added the required column `name` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "name" TEXT NOT NULL;
