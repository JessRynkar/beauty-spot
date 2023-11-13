import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { CallToAction } from '../../blocks/CallToAction'
import { Content } from '../../blocks/Content'
import { ContentMedia } from '../../blocks/ContentMedia'
import { GoogleMaps } from '../../blocks/GoogleMaps'
import { MediaBlock } from '../../blocks/MediaBlock'
import { ServicesList } from '../../blocks/ServicesList'
import { hero } from '../../fields/hero'
import { slugField } from '../../fields/slug'
import { adminsOrPublished } from './access/adminsOrPublished'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    preview: doc =>
      `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/${doc.slug !== 'home' ? doc.slug : ''}`,
  },
  versions: {
    drafts: true,
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [hero],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              required: true,
              blocks: [CallToAction, Content, ContentMedia, GoogleMaps, MediaBlock, ServicesList],
            },
          ],
        },
      ],
    },
    slugField(),
  ],
}
