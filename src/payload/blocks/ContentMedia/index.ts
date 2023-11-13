import type { Block } from 'payload/types'

export const ContentMedia: Block = {
  slug: 'contentMedia',
  fields: [
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'imagePosition',
      type: 'select',
      defaultValue: 'left',
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
