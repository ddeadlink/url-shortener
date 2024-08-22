import React, { useEffect, createContext, useContext } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_SHORTENED_URLS, CREATE_SHORTENED_URL } from '../queries';
import type { URL } from '../types';

interface OpportunitiesData {
    generateUrl: (url: string) => void;
    urls: URL[]
    shortenedUrlLoading: boolean;
    isUrlsLoading: boolean,
}

export const useUrlGenerator = (): OpportunitiesData => {
    const [createShortenedUrl, { loading: shortenedUrlLoading }] = useMutation(CREATE_SHORTENED_URL);

    const { data, loading: isUrlsLoading, refetch: getShortenedUrls } = useQuery(GET_SHORTENED_URLS, {
        notifyOnNetworkStatusChange: true
    })

    const generateUrl = (url: string) => {
        createShortenedUrl({ variables: { input: { url } } });
    };

    useEffect(() => {
        getShortenedUrls();
    }, [shortenedUrlLoading]);

    return {
        generateUrl,
        urls: data?.getShortenedUrls || [],
        shortenedUrlLoading,
        isUrlsLoading,
    }
}

const UrlGeneratorContext = createContext<OpportunitiesData | undefined>(undefined);

export const UrlGeneratorContextProvider = ({ children }: { children: React.ReactNode }) => {
    const data = useUrlGenerator();

    return (
        <UrlGeneratorContext.Provider value={data}>
          {children}
        </UrlGeneratorContext.Provider>
    )
};

export const useUrlGeneratorContext = (): OpportunitiesData  => {
    const context = useContext(UrlGeneratorContext);
    
    if (context === undefined) {
      throw new Error('useUrlGeneratorContext must be used within an UrlGeneratorContextProvider');
    }
    
    return context;
  };