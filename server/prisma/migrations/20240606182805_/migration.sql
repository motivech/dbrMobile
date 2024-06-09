/*
  Warnings:

  - A unique constraint covering the columns `[question_id]` on the table `answers` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "questions" ADD COLUMN     "right_answer_id" INTEGER DEFAULT 1;

-- CreateIndex
CREATE UNIQUE INDEX "answers_question_id_key" ON "answers"("question_id");
