import { InputType, Field } from '@nestjs/graphql';
import { EquipmentDetailInput } from './equipment-detail.input';

@InputType()
export class CreateEquipmentInput {
  @Field()
  leadIdentifier: string;

  @Field()
  createUserId: string;

  @Field()
  agencyCode: string;

  @Field()
  caseCode: string;

  @Field(type => [EquipmentDetailInput])
  equipmentDetails: EquipmentDetailInput[];
}