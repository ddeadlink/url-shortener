import { gql } from '@apollo/client';

export const GET_SHORTENED_URLS = gql`
  query GetShortenedUrls {
    getShortenedUrls {
      _id
      url
      shortId
    }
  }
`;

export const CREATE_SHORTENED_URL = gql`
  mutation CreateShortenedUrl($input: ShortenedUrlDto!) {
    createShortenUrl(createShortenUrl: $input) {
      _id
      url
      shortId
    }
  }
`;