import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TestModule } from './modules/test/test.module';
import { SubjectModule } from './modules/subject/subject.module';
import { QuestionModule } from './modules/question/question.module';
import { AnswerModule } from './modules/answer/answer.module';

@Module({
  imports: [UserModule, TestModule, SubjectModule, QuestionModule, AnswerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
