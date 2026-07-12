import type { Block } from "payload";

export const ArticlesBlock: Block = {
  slug: "articles",

  labels: {
    singular: "Liste d’articles",
    plural: "Listes d’articles",
  },

 admin: {
    group: 'Présentation',
    images: {
      thumbnail: {
        url: '/block-previews/articles.png',
        alt: 'Aperçu du layout Articles',
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
      name: "articles",
      type: "array",
      label: "Articles",
      required: true,
      minRows: 1,
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Image",
        },
        {
          name: "category",
          type: "text",
          label: "Catégorie",
          admin: {
            description:
              "Exemples : Prévention, Recherche, Vie de la MSP, Pédagogie.",
          },
        },
        {
          name: "date",
          type: "date",
          label: "Date",
          admin: {
            date: {
              pickerAppearance: "dayOnly",
              displayFormat: "dd/MM/yyyy",
            },
          },
        },
        {
          name: "title",
          type: "text",
          label: "Titre",
          required: true,
        },
        {
          name: "summary",
          type: "textarea",
          label: "Résumé",
          required: true,
        },
        {
          name: "linkLabel",
          type: "text",
          label: "Texte du lien",
          defaultValue: "Lire l’article",
        },
        {
          name: "linkHref",
          type: "text",
          label: "Adresse du lien",
          admin: {
            description:
              "Par exemple : /actualites/depistage-diabete",
          },
        },
      ],
    },
  ],
};