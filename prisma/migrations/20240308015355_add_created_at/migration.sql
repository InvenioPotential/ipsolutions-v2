/*
  Warnings:

  - You are about to drop the column `nonReccurTaskId` on the `customization` table. All the data in the column will be lost.
  - You are about to drop the column `option` on the `customization` table. All the data in the column will be lost.
  - You are about to drop the column `variable` on the `customization` table. All the data in the column will be lost.
  - Added the required column `options` to the `customization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `variables` to the `customization` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "customization" DROP CONSTRAINT "customization_nonReccurTaskId_fkey";

-- AlterTable
ALTER TABLE "customization" DROP COLUMN "nonReccurTaskId",
DROP COLUMN "option",
DROP COLUMN "variable",
ADD COLUMN     "department" VARCHAR(255),
ADD COLUMN     "options" TEXT NOT NULL,
ADD COLUMN     "variables" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "nonReccurTask" ADD COLUMN     "category" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "priority" TEXT,
ADD COLUMN     "site" TEXT,
ADD COLUMN     "stage" TEXT,
ADD COLUMN     "subcategory" TEXT,
ADD COLUMN     "taskOwner" TEXT,
ADD COLUMN     "type" TEXT;

-- AlterTable
ALTER TABLE "notes" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "reccurTask" (
    "id" TEXT NOT NULL,
    "category" TEXT,
    "subcategory" TEXT,
    "type" TEXT,
    "site" TEXT,
    "stage" TEXT,
    "priority" TEXT,
    "task" VARCHAR(255),
    "remark" VARCHAR(255),
    "assignTaskTo" VARCHAR(255),
    "reccur" TEXT,
    "startDate" TIMESTAMP(3),
    "EndDate" TIMESTAMP(3),
    "taskOwner" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reccurTask_pkey" PRIMARY KEY ("id")
);
