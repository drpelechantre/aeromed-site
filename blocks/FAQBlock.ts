import type { Block } from "payload";

export const FAQBlock: Block = {
  slug: "faq",

  labels: {
    singular: "FAQ",
    plural: "FAQ",
  },
  
   admin: {
    group: 'Présentation',
    images: {
      thumbnail: {
        url: '/block-previews/faq.png',
        alt: 'Aperçu du layout FAQ',
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
      name: "items",
      type: "array",
      label: "Questions",
      required: true,
      minRows: 1,
      fields: [
        {
          name: "question",
          type: "text",
          label: "Question",
          required: true,
        },
        {
          name: "answer",
          type: "textarea",
          label: "Réponse",
          required: true,
        },
      ],
    },
  ],
};