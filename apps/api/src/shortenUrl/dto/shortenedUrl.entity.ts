import { ObjectType, Field, ID } from "@nestjs/graphql";
import { ObjectId } from 'mongodb';

@ObjectType()
export class ShortenedUrl {
  @Field(() => ID)
  _id: ObjectId;

  @Field()
  url: string;

  @Field()
  shortId: string;
}
