import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const RichTextBlock: Block = {
  slug: 'richText',

  labels: {
    singular: 'Texte riche',
    plural: 'Textes riches',
  },

  fields: [
    {
      name: 'content',
      label: 'Contenu',
      type: 'richText',
      editor: lexicalEditor(),
    },
    {
      name: 'width',
      label: 'Largeur du contenu',
      type: 'select',
      defaultValue: 'normal',
      options: [
        {
          label: 'Étroit',
          value: 'narrow',
        },
        {
          label: 'Normal',
          value: 'normal',
        },
        {
          label: 'Large',
          value: 'wide',
        },
      ],
    },
  ],
}