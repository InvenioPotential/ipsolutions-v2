/*
  Warnings:

  - You are about to drop the column `duedate` on the `nonReccurTask` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "nonReccurTask" DROP COLUMN "duedate",
ADD COLUMN     "endDate" TEXT,
ADD COLUMN     "reccur" TEXT,
ADD COLUMN     "startDate" TEXT;
