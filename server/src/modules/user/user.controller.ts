import {Body, Controller, Post} from '@nestjs/common';
import { UserService } from './user.service';
import {Prisma} from "@prisma/client";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() user: Prisma.UserCreateInput) {
    return await this.userService.register(user);
  }

  @Post('auth')
  async auth(@Body() user: {login: string; password: string}) {
    return await this.userService.login(user);
  }
}
