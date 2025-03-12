import { Module } from "@nestjs/common";
import { PersonService } from "./person.service";
import { PersonResolver } from "./person.resolver";
import { PrismaModuleShared } from "../../prisma/shared/prisma.shared.module";

@Module({
  imports: [PrismaModuleShared],
  providers: [PersonResolver, PersonService],
})
export class PersonModule {}
