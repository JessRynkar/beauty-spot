import type { GlobalConfig } from 'payload/types'

export const Contact: GlobalConfig = {
  slug: 'contact',
  typescript: {
    interface: 'Contact',
  },
  graphQL: {
    name: 'Contact',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'number',
      type: 'text',
    },
    {
      name: 'email',
      type: 'text',
    },
    {
      name: 'address',
      type: 'group',
      fields: [
        {
          name: 'line1',
          label: 'Line 1',
          type: 'text',
        },
        {
          name: 'line2',
          label: 'Line 2',
          type: 'text',
        },
      ],
    },
    {
      name: 'instagram',
      type: 'text',
    },
    {
      name: 'facebook',
      type: 'text',
    },
  ],
}
