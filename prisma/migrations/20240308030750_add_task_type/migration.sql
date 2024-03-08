-- AlterTable
ALTER TABLE "nonReccurTask" ADD COLUMN     "tasktype" TEXT NOT NULL DEFAULT 'Non-Recurring';

-- AlterTable
ALTER TABLE "reccurTask" ADD COLUMN     "tasktype" TEXT NOT NULL DEFAULT 'Recurring';
