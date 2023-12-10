/*
  Warnings:

  - You are about to drop the column `locale` on the `User` table. All the data in the column will be lost.
  - Added the required column `localeId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "locale",
ADD COLUMN     "localeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Locale" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "shipping" INTEGER NOT NULL,

    CONSTRAINT "Locale_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
