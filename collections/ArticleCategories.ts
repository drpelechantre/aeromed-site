import type { CollectionConfig } from "payload";

export const ArticleCategories: CollectionConfig = {
  slug: "article-categories",

  admin: {
    useAsTitle: "name",
    defaultColumns: [
      "name",
      "slug",
    ],
  },

  fields: [

    {
      name: "name",
      label: "Nom",
      type: "text",
      required: true,
    },

    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
      unique: true,
    },

    {
      name: "description",
      label: "Description",
      type: "textarea",
    },

    {
      name: "icon",
      label: "Icône",
      type: "text",
      admin: {
        description:
          "Emoji ou symbole affiché avec la catégorie (ex : 🩺 🎓 🔬)",
      },
    },

  ],
};