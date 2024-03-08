/*
  Warnings:

  - You are about to drop the column `EndDate` on the `reccurTask` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "reccurTask" DROP COLUMN "EndDate",
ADD COLUMN     "endDate" TEXT;
