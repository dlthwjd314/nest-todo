-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "checked" BOOLEAN NOT NULL,

    PRIMARY KEY ("id")
);
