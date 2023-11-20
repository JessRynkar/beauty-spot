import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'The Beauty Spot - Hertfordshire',
  title: 'The Beauty Spot - Hertfordshire',
  description: 'An open-source e-commerce store built with Payload and Next.js.',
  images: [
    {
      url: 'https://beauty-spot.co.uk/media/reception.png',
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
