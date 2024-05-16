/*
  Warnings:

  - A unique constraint covering the columns `[phoneNumber]` on the table `Guest` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Guest_phoneNumber_key" ON "Guest"("phoneNumber");
