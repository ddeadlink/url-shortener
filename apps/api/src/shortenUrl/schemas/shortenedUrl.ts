import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class ShortenedUrl {
  @Prop(String)
  url: string;

  @Prop(String)
  shortId: string;
}

export const ShortenedUrlSchema = SchemaFactory.createForClass(ShortenedUrl);
