import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { TestService } from './test.service';
import {Prisma} from "@prisma/client";
type CheckTestParams = {
  answers: {question_id: number, answer_id: number}[],
  user_id: number
}
@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get('subject/:subjectId')
  async getAllTestBySubject(@Param('subjectId') subjectId: number) {
    return await this.testService.getBySubject(+subjectId);
  }

  @Post(':testId/check')
  async checkTest(@Param('testId') testId: number, @Body() body:CheckTestParams ) {
    return this.testService.checkTest({
      test_id: +testId,
      answers: body.answers,
      user_id: body.user_id
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
  @Get('completeds/:userId')
  async getCompleted(@Param('userId') userId: number) {
    return await this.testService.getCompleted(+userId);
  }

}
