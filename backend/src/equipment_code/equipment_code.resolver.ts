import { Resolver, Query, Args } from '@nestjs/graphql';
import { EquipmentCodeService } from './equipment_code.service';

@Resolver('EquipmentCode')
export class EquipmentCodeResolver {
  constructor(private readonly equipmentCodeService: EquipmentCodeService) {}

  @Query('getAllActiveEquipmentCodes')
  findAll() {
    return this.equipmentCodeService.findAll();
  }

  @Query('getEquipmentCode')
  findOne(@Args('equipment_code') equipment_code: string) {
    return this.equipmentCodeService.findOne(equipment_code);
  }

}
