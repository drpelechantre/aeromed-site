import type { Block } from 'payload'

export const SectionTitleBlock: Block = {

  slug: 'sectionTitle',

  labels: {
    singular: 'Titre de section',
    plural: 'Titres de section',
  },
 admin: {
    group: 'Présentation',
    images: {
      thumbnail: {
        url: '/block-previews/sectiontitle.png',
        alt: 'Aperçu du layout Titre de Section',
      },
    },
  },

  fields: [

    {
      name: 'eyebrow',
      label: 'Petit texte au-dessus',
      type: 'text',
    },


    {
      name: 'title',
      label: 'Titre',
      type: 'text',
      required: true,
    },


    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },


    {
      name: 'alignment',
      label: 'Alignement',
      type: 'select',
      defaultValue: 'center',
      options: [
        {
          label: 'Gauche',
          value: 'left',
        },
        {
          label: 'Centre',
          value: 'center',
        },
      ],
    },

  ],
}