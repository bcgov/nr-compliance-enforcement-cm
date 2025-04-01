import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class ParkInput {
  @Field(() => String)
  externalId: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  legalName?: string;

  @Field(() => String, { nullable: true })
  geoOrganizationUnitCode?: string;
}
