import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShortenUrlController } from './shortenUrl.controller';
import { ShortenUrlService } from './shortenUrl.service';
import { ShortenUrlResolver } from './shortenUrl.resolver';
import { ShortenedUrl, ShortenedUrlSchema } from './schemas/shortenedUrl';

@Module({
    imports: [MongooseModule.forFeature([{ name: ShortenedUrl.name, schema: ShortenedUrlSchema }])],
    controllers: [ShortenUrlController],
    providers: [ShortenUrlService, ShortenUrlResolver],
    exports: [ShortenUrlService]
})
export class ShortenUrlModule {}
