/*
  Warnings:

  - Added the required column `name` to the `Tractor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tractor" ADD COLUMN     "name" TEXT NOT NULL;
