import { InputType, Field, Float } from '@nestjs/graphql';
import { ActionInput } from './action.input';

@InputType()
export class EquipmentDetailInput {
  @Field()
  actionEquipmentTypeCode: string;

  @Field()
  actionEquipmentTypeActiveIndicator: boolean;

  @Field({ nullable: true })
  address?: string;

  @Field(type => Float, { nullable: true })
  xCoordinate?: number;

  @Field(type => Float, { nullable: true })
  yCoordinate?: number;

  @Field(type => [ActionInput])
  actions: ActionInput[];
}