import type { Block } from 'payload'

export const HeroImage: Block = {
  slug: 'heroImage',

  labels: {
    singular: 'Hero avec image',
    plural: 'Heros avec image',
  },
  
   admin: {
    group: 'Présentation',
    images: {
      thumbnail: {
        url: '/block-previews/heroimage.png',
        alt: 'Aperçu du layout Hero avec Image',
      },
    },
  },

  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Petit titre',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titre principal',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'Adresse de l’image',
      required: true,
      admin: {
        description:
          'Exemple : /images/equipe.jpg',
      },
    },
    {
      name: 'primaryLabel',
      type: 'text',
      label: 'Texte du bouton principal',
    },
    {
      name: 'primaryHref',
      type: 'text',
      label: 'Lien du bouton principal',
    },
  ],
}