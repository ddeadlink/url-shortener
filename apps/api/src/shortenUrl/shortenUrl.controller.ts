import { Controller, Post, Get, Body } from '@nestjs/common';
import { ShortenUrlService } from './shortenUrl.service';
import { ShortenedUrlDto } from './dto/shortenedUrl.dto';

@Controller('shortenUrl')
export class ShortenUrlController {
  constructor(private readonly shortenUrlService: ShortenUrlService) {}

  @Get('shorten')
  getShortenedUrls() {
    return this.shortenUrlService.getShortenedUrls();
  }

  @Post('shorten')
  createShortenUrl(@Body('url') url: string) {
    return this.shortenUrlService.createShortenUrl({ url } as ShortenedUrlDto);
  }
}