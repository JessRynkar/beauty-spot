import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'category',
    defaultColumns: ['category', 'services', 'description'],
  },
  access: {
    read: () => true,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      type: 'row',
      admin: {
        position: 'sidebar',
      },
      fields: [
        {
          name: 'freshaURL',
          type: 'text',
          admin: {
            width: '100%',
          },
        },
        {
          name: 'category',
          type: 'text',
          required: true,
          admin: {
            width: '100%',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            width: '100%',
          },
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          admin: {
            width: '100%',
          },
        },
      ],
    },
    {
      name: 'services',
      type: 'array',
      admin: {
        components: {
          RowLabel: ({ data }) => {
            return data?.name
          },
        },
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
              admin: {
                width: '80%',
              },
            },

            {
              name: 'price',
              type: 'text',
              required: true,
              admin: {
                width: '20%',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'description',
              type: 'text',
              admin: {
                width: '80%',
              },
            },
            {
              name: 'duration',
              type: 'text',
              admin: {
                width: '20%',
              },
            },
          ],
        },
      ],
    },
  ],
}
