import type { Block } from "payload";

export const PartnersBlock: Block = {
  slug: "partners",

  labels: {
    singular: "Partenaires",
    plural: "Partenaires",
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
      name: "partners",
      type: "array",
      label: "Liste des partenaires",
      required: true,
      minRows: 1,
      fields: [
        {
          name: "logo",
          type: "upload",
          relationTo: "media",
          label: "Logo",
        },
        {
          name: "name",
          type: "text",
          label: "Nom",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          label: "Description",
        },
        {
          name: "url",
          type: "text",
          label: "Lien vers le site",
        },
      ],
    },
  ],
};