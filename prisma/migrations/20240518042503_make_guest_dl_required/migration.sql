/*
  Warnings:

  - A unique constraint covering the columns `[firstName,lastName,dlNumber]` on the table `Guest` will be added. If there are existing duplicate values, this will fail.
  - Made the column `dlNumber` on table `Guest` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Guest_firstName_lastName_phoneNumber_key";

-- AlterTable
ALTER TABLE "Guest" ALTER COLUMN "dlNumber" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Guest_firstName_lastName_dlNumber_key" ON "Guest"("firstName", "lastName", "dlNumber");
