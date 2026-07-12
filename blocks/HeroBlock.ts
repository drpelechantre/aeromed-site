import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',

  labels: {
    singular: 'Hero',
    plural: 'Heros',
  },
  
   admin: {
    group: 'Présentation',
    images: {
      thumbnail: {
        url: '/block-previews/hero.png',
        alt: 'Aperçu du layout Hero',
      },
    },
  },
  

  fields: [

    {
      name: 'eyebrow',
      label: 'Petit texte au-dessus du titre',
      type: 'text',
    },

    {
      name: 'title',
      label: 'Titre principal',
      type: 'text',
      required: true,
    },

    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },

    {
      name: 'buttonLabel',
      label: 'Texte du bouton',
      type: 'text',
    },

    {
      name: 'buttonUrl',
      label: 'Lien du bouton',
      type: 'text',
    },

  ],
}