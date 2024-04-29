import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { Public } from "./auth/decorators/public.decorator";
import { ApiTags } from "@nestjs/swagger";

@Controller()
@ApiTags("Health Check")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Public()
  getHello(): string {
    return this.appService.getHello();
  }
}
