/*
  Warnings:

  - You are about to alter the column `roomRate` on the `Room` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(18,2)`.
  - You are about to alter the column `dailyRate` on the `Stay` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(18,2)`.
  - You are about to alter the column `amountDue` on the `Stay` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(18,2)`.
  - You are about to alter the column `amountPaid` on the `Stay` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(18,2)`.
  - You are about to alter the column `totalCharge` on the `Stay` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(18,2)`.

*/
-- AlterTable
ALTER TABLE "Room" ALTER COLUMN "roomRate" SET DATA TYPE DECIMAL(18,2);

-- AlterTable
ALTER TABLE "Stay" ALTER COLUMN "dailyRate" SET DATA TYPE DECIMAL(18,2),
ALTER COLUMN "amountDue" SET DATA TYPE DECIMAL(18,2),
ALTER COLUMN "amountPaid" SET DATA TYPE DECIMAL(18,2),
ALTER COLUMN "totalCharge" SET DATA TYPE DECIMAL(18,2);
