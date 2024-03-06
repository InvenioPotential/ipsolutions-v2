-- CreateTable
CREATE TABLE "nonReccurTask" (
    "id" SERIAL NOT NULL,
    "category" VARCHAR(255),
    "subcategory" VARCHAR(255),
    "type" VARCHAR(255),
    "site" VARCHAR(255),
    "tasktype" VARCHAR(255),
    "due" VARCHAR(255),
    "stage" VARCHAR(255),
    "priority" VARCHAR(255),
    "date" TIMESTAMP(3) NOT NULL,
    "task" VARCHAR(255),
    "remark" VARCHAR(255),
    "assignTaskTo" VARCHAR(255),

    CONSTRAINT "nonReccurTask_pkey" PRIMARY KEY ("id")
);
