-- AlterTable
ALTER TABLE "Stay" ADD COLUMN     "amountDue" DECIMAL(65,30),
ADD COLUMN     "amountPaid" DECIMAL(65,30),
ADD COLUMN     "numOfAdults" INTEGER,
ADD COLUMN     "numOfChildren" INTEGER,
ADD COLUMN     "totalCharge" DECIMAL(65,30),
ALTER COLUMN "checkoutTime" DROP NOT NULL;
