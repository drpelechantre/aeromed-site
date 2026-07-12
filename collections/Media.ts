import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',

  access: {
    read: () => true,
  },

  upload: {
    mimeTypes: ['image/*', 'application/pdf'],

    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        fit: 'cover',
        withoutEnlargement: false,
      },
      {
        name: 'card',
        width: 768,
        height: 576,
        fit: 'cover',
        withoutEnlargement: false,
      },
      {
        name: 'hero',
        width: 1600,
        height: 900,
        fit: 'cover',
        withoutEnlargement: false,
      },
    ],

    adminThumbnail: 'thumbnail',

    focalPoint: true,
    crop: true,
  },

  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Texte alternatif',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Légende',
    },
  ],
}