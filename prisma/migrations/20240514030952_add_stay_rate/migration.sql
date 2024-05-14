/*
  Warnings:

  - Added the required column `dailyRate` to the `Stay` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Room" ALTER COLUMN "roomRate" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "Stay" ADD COLUMN     "dailyRate" DECIMAL(65,30) NOT NULL;
