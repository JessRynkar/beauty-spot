import { webpackBundler } from '@payloadcms/bundler-webpack'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloud } from '@payloadcms/plugin-cloud'
import seo from '@payloadcms/plugin-seo'
import type { GenerateTitle } from '@payloadcms/plugin-seo/types'
import { slateEditor } from '@payloadcms/richtext-slate'
import dotenv from 'dotenv'
import path from 'path'
import { buildConfig } from 'payload/config'

import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Services } from './collections/Services'
import Users from './collections/Users'
import { Contact } from './globals/Contact'
import { Footer } from './globals/Footer'
import { Header } from './globals/Header'
import { Hours } from './globals/Hours'
import { Icon } from './graphics/Icon'
import { Logo } from './graphics/Logo'

const generateTitle: GenerateTitle = () => {
  return 'The Beauty Spot'
}
dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
})

export default buildConfig({
  admin: {
    components: {
      graphics: {
        Icon,
        Logo,
      },
    },
    user: Users.slug,
    bundler: webpackBundler(),
    webpack: config => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          dotenv: path.resolve(__dirname, './dotenv.js'),
        },
      },
    }),
    meta: {
      favicon: '/favicon.png',
    },
  },
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Pages, Services, Media, Users],
  globals: [Contact, Hours, Header, Footer],
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL || '', 'https://www.google.com/'].filter(Boolean),
  csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL || '', 'https://www.google.com/'].filter(Boolean),
  plugins: [
    seo({
      collections: ['pages'],
      generateTitle,
      uploadsCollection: 'media',
    }),
    payloadCloud(),
  ],
})
