import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { TestService } from './test.service';
import {Prisma} from "@prisma/client";

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get('subject/:subjectId')
  async getAllTestBySubject(@Param('subjectId') subjectId: number) {
    return await this.testService.getBySubject(+subjectId);
  }

  @Post(':testId/check')
  async checkTest(@Param('testId') testId: number, @Body() answers: {question_id: number, answer_id: number}[] ) {
    return this.testService.checkTest({
      test_id: +testId,
      answers
    })
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.testService.getById(+id);
  }

  @Post('create')
  async createTest(@Body() test: Prisma.TestCreateInput) {
    return this.testService.createTest(test);
  }
}
