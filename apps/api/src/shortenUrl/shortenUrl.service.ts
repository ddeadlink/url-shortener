import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ShortenedUrl } from './schemas/shortenedUrl';
import { ShortenedUrlDto } from './dto/shortenedUrl.dto';

@Injectable()
export class ShortenUrlService {
  constructor(@InjectModel(ShortenedUrl.name) private ShortenUrlModel: Model<ShortenedUrl>) {}

  getShortenedUrls(): Promise<ShortenedUrl[]> {
    // could add pagination but this is not BE oriented task so skip
    return this.ShortenUrlModel.find().exec();
  }

  createShortenUrl(dto: ShortenedUrlDto): Promise<ShortenedUrl> {
    const shortId = nanoid(6);
    const createOpportunity = new this.ShortenUrlModel({
      url: dto.url,
      shortId,
    });

    return createOpportunity.save();
  }
}