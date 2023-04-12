import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //?Todo: Don't have routes with the same name.
  @Get('userss')
  getUsers(): string[] {
    return this.appService.getUsers();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
