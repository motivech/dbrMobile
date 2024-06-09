/*
  Warnings:

  - You are about to drop the `CompletedTest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CompletedTest" DROP CONSTRAINT "CompletedTest_test_id_fkey";

-- DropForeignKey
ALTER TABLE "CompletedTest" DROP CONSTRAINT "CompletedTest_user_id_fkey";

-- DropForeignKey
ALTER TABLE "subject" DROP CONSTRAINT "subject_question_id_fkey";

-- DropForeignKey
ALTER TABLE "tests" DROP CONSTRAINT "tests_subject_id_fkey";

-- DropTable
DROP TABLE "CompletedTest";

-- DropTable
DROP TABLE "Subject";

-- DropTable
DROP TABLE "subject";

-- CreateTable
CREATE TABLE "completed-tests" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "test_id" INTEGER NOT NULL,

    CONSTRAINT "completed-tests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "answers" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "question_id" INTEGER NOT NULL,

    CONSTRAINT "answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subjects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "subjects_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tests" ADD CONSTRAINT "tests_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "completed-tests" ADD CONSTRAINT "completed-tests_test_id_fkey" FOREIGN KEY ("test_id") REFERENCES "tests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "completed-tests" ADD CONSTRAINT "completed-tests_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
