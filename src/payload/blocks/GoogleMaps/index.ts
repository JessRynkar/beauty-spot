import type { Block } from 'payload/types'
export const GoogleMaps: Block = {
  slug: 'googleMaps',
  labels: {
    singular: 'Google Map',
    plural: 'Google Maps',
  },
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
