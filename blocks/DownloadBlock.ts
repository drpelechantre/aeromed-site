import type { Block } from "payload";

export const DownloadBlock: Block = {
  slug: "download",

  labels: {
    singular: "Téléchargement de documents",
    plural: "Téléchargements de documents",
  },
  
   admin: {
    group: 'Présentation',
    images: {
      thumbnail: {
        url: '/block-previews/download.png',
        alt: 'Aperçu du layout Téléchargement',
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
      name: "documents",
      type: "array",
      label: "Documents",
      required: true,
      minRows: 1,
      fields: [
        {
          name: "file",
          type: "upload",
          relationTo: "media",
          label: "Fichier",
          required: true,
        },
        {
          name: "title",
          type: "text",
          label: "Titre du document",
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
          defaultValue: "Télécharger",
        },
      ],
    },
  ],
};