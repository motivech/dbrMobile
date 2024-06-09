import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma.service";
import {Prisma} from "@prisma/client";

@Injectable()
export class TestService {

    constructor(private readonly prismaService: PrismaService) {
    }

    // Получение конкретного теста
    getById(id: number) {
        return this.prismaService.test.findFirst({
            where: {
                id
            },
            select: {
                id: true,
                subject: true,
                name: true,
                description: true,
                questions: {
                    select: {
                        id: true,
                        text: true,
                        answers: true,
                        right_answer_id: true,
                    }
                }
            }
        })
    }

    // Получение тестов по предмету
    getBySubject(subjectId: number) {
        return this.prismaService.test.findMany({
            where: {
                subject_id: subjectId
            },
            select: {
                id: true,
                subject: true,
                name: true,
                description: true,
                questions: {
                    select: {
                        id: true,
                        answers: true,
                        text: true,
                    }
                },
            }
        })
    }

    async checkTest({test_id, answers}: {test_id: number, answers: {question_id: number, answer_id: number}[]}) {

        console.log(answers)

       const { questions} = await this.prismaService.test.findFirst({
           where: {
               id: test_id
           },
           select: {
               questions: {
                   select: {
                       id: true,
                       right_answer_id: true,
                       answers: true,
                   }
               }
           }
       })

        let rightAnswers = 0
        let errorQuestionsId: number[] = [];

        for(const userAnswer of answers) {
            const question = questions.find(el => el.id === userAnswer.question_id);

            if(!question) continue;

            if(userAnswer.answer_id === question.right_answer_id) rightAnswers++;
            else {
                errorQuestionsId.push(userAnswer.question_id)
            }
        }

        return {
            totalScore: (rightAnswers / questions.length) * 100,
            countQuestions: questions.length,
            errorQuestionsId
        }
    }

    createTest(test: Prisma.TestCreateInput) {
        return this.prismaService.test.create({
            data: test
        })
    }

}
