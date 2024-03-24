import { InputType, Field, GraphQLISODateTime } from '@nestjs/graphql';

@InputType()
export class ActionInput {
  @Field(type => GraphQLISODateTime)
  date: Date;

  @Field()
  actor: string;

  @Field()
  activeIndicator: boolean;

  @Field()
  actionCode: string;
}