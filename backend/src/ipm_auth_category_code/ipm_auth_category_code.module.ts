import { Module } from "@nestjs/common";
import { IpmAuthCategoryCodeService } from "./ipm_auth_category_code.service";
import { IpmAuthCategoryCodeResolver } from "./ipm_auth_category_code.resolver";
import { PrismaModule } from "nestjs-prisma";

@Module({
  imports: [PrismaModule],
  providers: [IpmAuthCategoryCodeResolver, IpmAuthCategoryCodeService],
})
export class IpmAuthCategoryCodeModule {}
