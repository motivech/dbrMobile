import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma.service";
import {Prisma} from "@prisma/client";

@Injectable()
export class SubjectService {

    constructor(private readonly prismaService: PrismaService) {
    }

    getAll() {
        return this.prismaService.subject.findMany();
    }

    getById(id: number) {
        return this.prismaService.subject.findFirst({
            where: {
                id
            }
        })
    }

    create(sub: Prisma.SubjectCreateInput) {
        return this.prismaService.subject.create({
            data: sub
        })
    }

    update(id: number, sub: Prisma.SubjectUpdateInput) {
        return this.prismaService.subject.update({
            data: sub,
            where: {
                id
            }
        })
    }

}
