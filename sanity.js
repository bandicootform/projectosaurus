import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'w4lwi5tk',
    dataset: 'production',
      useCdn: true,
      });