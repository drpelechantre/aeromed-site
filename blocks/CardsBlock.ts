import type { Block } from 'payload'

export const CardsBlock: Block = {
  slug: 'cards',

  labels: {
    singular: 'Section de cartes',
    plural: 'Sections de cartes',
  },

  fields: [
    {
      name: 'eyebrow',
      label: 'Petit titre',
      type: 'text',
      admin: {
        description:
          'Petit texte affiché au-dessus du titre principal, par exemple « Projet de santé ».',
      },
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
      name: 'columns',
      label: 'Nombre de colonnes',
      type: 'select',
      defaultValue: '3',
      options: [
        {
          label: '2 colonnes',
          value: '2',
        },
        {
          label: '3 colonnes',
          value: '3',
        },
        {
          label: '4 colonnes',
          value: '4',
        },
      ],
    },
    {
      name: 'style',
      label: 'Style des cartes',
      type: 'select',
      defaultValue: 'default',
      options: [
        {
          label: 'Classique',
          value: 'default',
        },
        {
          label: 'Fond doux',
          value: 'soft',
        },
        {
          label: 'Effet verre',
          value: 'glass',
        },
      ],
    },
    {
      name: 'cards',
      label: 'Cartes',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'icon',
          label: 'Icône',
          type: 'text',
          admin: {
            description:
              'Tu peux mettre un emoji, par exemple 🩺, ❤️, 📚 ou 🔬.',
          },
        },
        {
          name: 'title',
          label: 'Titre',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Texte',
          type: 'textarea',
          required: true,
        },
        {
          name: 'buttonLabel',
          label: 'Texte du lien',
          type: 'text',
          admin: {
            description:
              'Par exemple « En savoir plus ». Laisse vide pour ne pas afficher de lien.',
          },
        },
        {
          name: 'buttonHref',
          label: 'Adresse du lien',
          type: 'text',
          admin: {
            description:
              'Par exemple /projets, /equipe ou une adresse externe.',
          },
        },
      ],
    },
  ],
}