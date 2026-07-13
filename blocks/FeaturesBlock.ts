import type { Block } from "payload";

export const FeaturesBlock: Block = {
  slug: "features",

  labels: {
    singular: "Liste d'atouts",
    plural: "Listes d'atouts",
  },

 admin: {
    group: 'Actualités et projets',
    images: {
      thumbnail: {
        url: '/block-previews/atouts.png',
        alt: 'Aperçu du layout Atouts',
      },
    },
  },

  fields: [
    {
      name: "eyebrow",
      type: "text",
      label: "Petit titre",
    },
    {
      name: "title",
      type: "text",
      label: "Titre",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "features",
      label: "Atouts",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "icon",
          label: "Icône",
          type: "text",
        },
        {
          name: "title",
          label: "Titre",
          type: "text",
          required: true,
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
        },
      ],
    },
  ],
};