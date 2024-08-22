import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { ShortenUrlService } from './shortenUrl.service';
import { ShortenedUrl } from './dto/shortenedUrl.entity';
import { ShortenedUrlDto } from './dto/shortenedUrl.dto';

@Resolver(of => ShortenedUrl)
export class ShortenUrlResolver {
    constructor(private shortenUrlService: ShortenUrlService) {}

    @Query(returns => [ShortenedUrl])
    async getShortenedUrls() {
        return await this.shortenUrlService.getShortenedUrls();
    }

    @Mutation(returns => ShortenedUrl)
    async createShortenUrl(@Args('createShortenUrl') createShortenUrlDto: ShortenedUrlDto) {
        return await this.shortenUrlService.createShortenUrl(createShortenUrlDto);
    }
}
