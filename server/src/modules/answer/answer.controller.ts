import {Body, Controller, Get, Post} from '@nestjs/common';
import {AnswerService} from './answer.service';
import {Prisma} from "@prisma/client";

@Controller('answer')
export class AnswerController {
    constructor(private readonly answerService: AnswerService) {
    }

    @Post('create')
    async create(@Body() answer: Prisma.AnswerCreateInput) {
        return this.answerService.create(answer);
    }

    @Get()
    async get() {
        return this.answerService.getAll()
    }


}
