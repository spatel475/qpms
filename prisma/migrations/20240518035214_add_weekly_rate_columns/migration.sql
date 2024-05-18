-- AlterTable
ALTER TABLE "Stay" 
ADD COLUMN     "extensions" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "paymentMode" TEXT NOT NULL DEFAULT 'cash',
ADD COLUMN     "weeklyRate" DECIMAL(18,2),
ALTER COLUMN "dailyRate" DROP NOT NULL;
