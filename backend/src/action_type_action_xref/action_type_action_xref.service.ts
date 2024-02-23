import { Injectable } from '@nestjs/common';
import { PrismaService } from "nestjs-prisma";

@Injectable()
export class ActionTypeActionXrefService {
  constructor(private prisma: PrismaService) {}

  find(action_type_code? : string) {
    const dataContext = this.prisma.action_type_action_xref;
    return action_type_code ? dataContext.findMany( { where: { action_type_code: action_type_code } })
                       : dataContext.findMany() ;
                      
  }
}
