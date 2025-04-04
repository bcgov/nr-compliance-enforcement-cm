import { InputType, Field, Int, ArgsType } from "@nestjs/graphql";
import { Max, Min } from "class-validator";

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

@ArgsType()
export class ParkArgs {
  @Field(() => String, { nullable: true })
  search?: string;

  @Field(() => Int)
  @Min(0)
  skip? = 0;

  @Field(() => Int)
  @Min(1)
  @Max(50)
  take? = 25;
}
