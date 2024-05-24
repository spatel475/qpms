/*
  Warnings:

  - Added the required column `checkoutTime` to the `Stay` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stayStatus` to the `Stay` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StayStatus" AS ENUM ('RESERVED', 'OCCUPIED', 'CHECKED_OUT');

-- AlterTable
ALTER TABLE "Stay" ADD COLUMN     "checkoutTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "stayStatus" "StayStatus" NOT NULL;
