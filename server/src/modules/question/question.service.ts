import { Injectable } from '@nestjs/common';
import {Prisma} from "@prisma/client";
import {PrismaService} from "../../prisma.service";

@Injectable()
export class QuestionService {

  constructor(private readonly prismaService: PrismaService) {
  }

  create(createQuestionDto: Prisma.QuestionCreateInput) {
    return this.prismaService.question.create({data:createQuestionDto});
  }

  findAll() {
    return this.prismaService.question.findMany();
  }

  findOne(id: number) {
    return this.prismaService.question.findFirst({where: {id}});
  }

  update(id: number, updateQuestionDto: Prisma.QuestionUpdateInput) {
    return this.prismaService.question.update({
      data: updateQuestionDto,
      where: {
        id
      }
    });
  }

  remove(id: number) {
    return this.prismaService.question.delete({
      where: {
        id
      }
    });
  }
}
