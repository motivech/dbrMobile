-- DropForeignKey
ALTER TABLE "questions" DROP CONSTRAINT "questions_test_id_fkey";

-- AlterTable
ALTER TABLE "questions" ALTER COLUMN "test_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_test_id_fkey" FOREIGN KEY ("test_id") REFERENCES "tests"("id") ON DELETE SET NULL ON UPDATE CASCADE;
