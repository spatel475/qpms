/*
  Warnings:

  - Added the required column `roomAvailable` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "roomAvailable" BOOLEAN NOT NULL,
ADD COLUMN     "unavailablityReason" TEXT;
