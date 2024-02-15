/*
  Warnings:

  - You are about to drop the `variableOptions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "variableOptions" DROP CONSTRAINT "variableOptions_nonReccurTaskId_fkey";

-- DropTable
DROP TABLE "variableOptions";

-- CreateTable  
CREATE TABLE "customization" (
    "id" SERIAL NOT NULL,
    "variable" TEXT NOT NULL,
    "option" TEXT[],
    "nonReccurTaskId" TEXT,

    CONSTRAINT "customization_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "customization" ADD CONSTRAINT "customization_nonReccurTaskId_fkey" FOREIGN KEY ("nonReccurTaskId") REFERENCES "nonReccurTask"("id") ON DELETE SET NULL ON UPDATE CASCADE;
