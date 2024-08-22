import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class ShortenedUrlDto {
  @Field()
  url: string;
}