import type { Block } from "payload";

export const GalleryBlock: Block = {
  slug: "gallery",

  labels: {
    singular: "Galerie photos",
    plural: "Galeries photos",
  },

 admin: {
    group: 'Informations pratiques',
    images: {
      thumbnail: {
        url: '/block-previews/galphotos.png',
        alt: 'Aperçu du layout Galerie Photos',
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
      name: "images",
      type: "array",
      label: "Images",
      required: true,
      minRows: 1,
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media" as any,
          label: "Image",
          required: true,
        },
        {
          name: "alt",
          type: "text",
          label: "Texte alternatif",
          required: true,
          admin: {
            description:
              "Décris brièvement l’image pour l’accessibilité et le référencement.",
          },
        },
        {
          name: "caption",
          type: "text",
          label: "Légende",
        },
      ],
    },
  ],
};