import {HttpCode, HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {PrismaService} from "../../prisma.service";
import {Prisma, PrismaClient} from "@prisma/client";

@Injectable()
export class UserService {

    constructor(private readonly prismaService: PrismaService) {
    }

    async register(user: Prisma.UserCreateInput) {

        const candidat = await this.prismaService.user.findFirst({
            where: {
                login: user.login
            }
        })

        if(candidat) {
            throw new HttpException('user was registered', HttpStatus.BAD_REQUEST);
        }

        return await this.prismaService.user.create({
            data: user
        });
    }

    async login(usr: {login: string, password: string}) {

        const candidat = await this.prismaService.user.findFirst({
            where: {
                login: usr.login
            }
        })

        if(!candidat) {
            throw new HttpException('user not found', HttpStatus.BAD_REQUEST)
        }

        if(usr.password !== candidat.password) {
            throw new HttpException('login or password is not correct', HttpStatus.BAD_REQUEST)
        }

        return candidat;
    }

}
