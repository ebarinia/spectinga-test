/*
  Warnings:

  - Added the required column `img` to the `Tractor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tractor" ADD COLUMN     "img" TEXT NOT NULL;
