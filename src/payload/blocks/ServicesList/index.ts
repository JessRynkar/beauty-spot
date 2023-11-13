import type { Block } from 'payload/types'
export const ServicesList: Block = {
  slug: 'servicesList',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'full',
      options: [
        {
          value: 'mini',
          label: 'Mini',
        },
        {
          value: 'full',
          label: 'Full',
        },
      ],
    },
    {
      name: 'service',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
    },
  ],
}
