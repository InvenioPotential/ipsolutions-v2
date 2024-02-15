/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `nonReccurTask` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category` on the `nonReccurTask` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `nonReccurTask` table. All the data in the column will be lost.
  - You are about to drop the column `due` on the `nonReccurTask` table. All the data in the column will be lost.
  - You are about to drop the column `priority` on the `nonReccurTask` table. All the data in the column will be lost.
  - You are about to drop the column `site` on the `nonReccurTask` table. All the data in the column will be lost.
  - You are about to drop the column `stage` on the `nonReccurTask` table. All the data in the column will be lost.
  - You are about to drop the column `subcategory` on the `nonReccurTask` table. All the data in the column will be lost.
  - You are about to drop the column `tasktype` on the `nonReccurTask` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `nonReccurTask` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AlterTable
ALTER TABLE "nonReccurTask" DROP CONSTRAINT "nonReccurTask_pkey",
DROP COLUMN "category",
DROP COLUMN "date",
DROP COLUMN "due",
DROP COLUMN "priority",
DROP COLUMN "site",
DROP COLUMN "stage",
DROP COLUMN "subcategory",
DROP COLUMN "tasktype",
DROP COLUMN "type",
ADD COLUMN     "duedate" TIMESTAMP(3),
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "nonReccurTask_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "nonReccurTask_id_seq";

-- CreateTable
CREATE TABLE "variableOptions" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "subcategory" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "site" TEXT NOT NULL,
    "tasktype" TEXT NOT NULL,
    "due" TEXT NOT NULL,
    "stage" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "nonReccurTaskId" TEXT,

    CONSTRAINT "variableOptions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "variableOptions" ADD CONSTRAINT "variableOptions_nonReccurTaskId_fkey" FOREIGN KEY ("nonReccurTaskId") REFERENCES "nonReccurTask"("id") ON DELETE SET NULL ON UPDATE CASCADE;
