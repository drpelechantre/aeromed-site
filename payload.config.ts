import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

import { SiteSettings } from './globals/SiteSettings'
import { Pages } from './collections/Pages'
import { Media } from './collections/Media'
import { Professionals } from './collections/Professionals'
import { Specialties } from "./collections/Specialties";
import { Articles } from "./collections/Articles";
import { ArticleCategories } from "./collections/ArticleCategories";
import sharp from 'sharp'

console.log(
  'BLOB actif :',
  Boolean(process.env.BLOB_READ_WRITE_TOKEN),
)

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || '',
	sharp,
	
  editor: lexicalEditor(),

  admin: {
    user: 'users',
  },

  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [],
    },

    Pages,
    Media,
    Professionals,
	Specialties,
	Articles,
	ArticleCategories,
	],

  globals: [SiteSettings],

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),

  plugins: [
    vercelBlobStorage({
    enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),

      collections: {
        media: {
          prefix: 'media',
        },
      },

      token: process.env.BLOB_READ_WRITE_TOKEN,

    }),
  ],
})