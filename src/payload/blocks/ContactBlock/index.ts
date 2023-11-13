import type { Block } from 'payload/types'

export const ContactBlock: Block = {
  slug: 'contactBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      admin: {
        description: 'The contact information will be populated from the Contact settings.',
      },
    },
  ],
}
