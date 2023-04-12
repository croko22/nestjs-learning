import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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

  @Get('/facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookLogin() {
    return;
  }

  @Get('/facebook/redirect')
  @UseGuards(AuthGuard('facebook'))
  async facebookLoginRedirect() {
    return;
  }
}
