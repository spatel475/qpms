/*
  Warnings:

  - A unique constraint covering the columns `[firstName,lastName,phoneNumber]` on the table `Guest` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Guest_phoneNumber_key";

-- CreateIndex
CREATE UNIQUE INDEX "Guest_firstName_lastName_phoneNumber_key" ON "Guest"("firstName", "lastName", "phoneNumber");
