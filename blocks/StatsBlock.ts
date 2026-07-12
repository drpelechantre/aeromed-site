import type { Block } from "payload";

export const StatsBlock: Block = {
  slug: "stats",

  labels: {
    singular: "Chiffres clés",
    plural: "Chiffres clés",
  },

 admin: {
    group: 'Présentation',
    images: {
      thumbnail: {
        url: '/block-previews/stats.png',
        alt: 'Aperçu du layout Stats',
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
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "stats",
      type: "array",
      label: "Chiffres",
      required: true,
      minRows: 1,
      fields: [
        {
          name: "value",
          type: "text",
          label: "Valeur",
          required: true,
          admin: {
            description: "Exemple : 9, 20+, 100 %, 2026",
          },
        },
        {
          name: "label",
          type: "text",
          label: "Libellé",
          required: true,
          admin: {
            description: "Exemple : spécialités présentes",
          },
        },
        {
          name: "description",
          type: "textarea",
          label: "Précision",
        },
      ],
    },
  ],
};