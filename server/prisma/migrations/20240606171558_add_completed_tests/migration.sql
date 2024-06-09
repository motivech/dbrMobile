-- CreateTable
CREATE TABLE "CompletedTest" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "test_id" INTEGER NOT NULL,

    CONSTRAINT "CompletedTest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CompletedTest" ADD CONSTRAINT "CompletedTest_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedTest" ADD CONSTRAINT "CompletedTest_test_id_fkey" FOREIGN KEY ("test_id") REFERENCES "tests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
