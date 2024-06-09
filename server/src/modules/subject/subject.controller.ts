import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import { SubjectService } from './subject.service';
import {Prisma} from "@prisma/client";

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Post('create')
  async create(@Body() subject: Prisma.SubjectCreateInput) {
    return this.subjectService.create(subject);
  }

  @Patch(":id")
  async update(@Param('id') id: number, @Body() subject: Prisma.SubjectUpdateInput) {
    return this.subjectService.update(+id, subject);
  }

  @Get()
  async getAll() {
    return this.subjectService.getAll()
  }

  @Get(":id")
  async getById(@Param('id') id: number) {
    return this.subjectService.getById(+id);
  }

}
