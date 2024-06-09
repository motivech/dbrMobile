import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma.service";
import {Prisma} from "@prisma/client";

@Injectable()
export class AnswerService {

    constructor(private readonly prismaService: PrismaService) {
    }

    create(answer: Prisma.AnswerCreateInput) {
        return this.prismaService.answer.create({
            data: answer
        })
    }

    getAll() {
        return this.prismaService.answer.findMany();
    }

}
