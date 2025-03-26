/*
  Warnings:

  - You are about to drop the column `team` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `users` table. All the data in the column will be lost.
  - The `role` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('user', 'admin');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "team",
DROP COLUMN "user",
DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'user';
