import {createClient} from 'next-sanity'

import {apiVersion, dataset, projectId} from './env'

export const client = createClient({
  projectId: 'w4lwi5tk',
    dataset: 'production',
      apiVersion: '2023-03-01',
        useCdn: true,
        })