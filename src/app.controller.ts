import { Controller, Get, Res, Req, Post, Param, Query, HttpStatus, HttpCode, Header, Body, HttpException } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './Modules/user.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    this.userService.checkHealth('App Module');
    return this.appService.getHello();
  }
}
