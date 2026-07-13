import type { Block } from "payload";

export const CTA: Block = {
  slug: "cta",
  labels: {
    singular: "Appel à l’action",
    plural: "Appels à l’action",
  },
  
   admin: {
    group: 'Actualités et projets',
    images: {
      thumbnail: {
        url: '/block-previews/action.png',
        alt: 'Aperçu du layout AAA',
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
      name: "buttonLabel",
      type: "text",
      label: "Texte du bouton",
    },
    {
      name: "buttonHref",
      type: "text",
      label: "Lien du bouton",
    },
  ],
};