import type { Block } from 'payload/types'
export const GoogleMaps: Block = {
  slug: 'googleMaps',
  labels: {
    singular: 'Google Map',
    plural: 'Google Maps',
  },
  fields: [
    {
      admin: {
        description:
          'This block will automatically render the global contact data, you can update these in your site settings.',
      },
      name: 'media',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
