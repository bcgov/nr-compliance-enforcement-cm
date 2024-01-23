import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({
  path: "",
  version: "1",
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/get-hello')
  getHello(): string {
    console.log("in get-hello");
    return this.appService.getHello();
  }
}
