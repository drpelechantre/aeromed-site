import type { Block } from "payload";

export const ArticlesBlock: Block = {
  slug: "articles",

  labels: {
    singular: "Articles",
    plural: "Articles",
  },

  fields: [

    {
      name: "title",
      label: "Titre de section",
      type: "text",
      defaultValue: "Nos actualités",
    },

    {
      name: "description",
      label: "Description",
      type: "textarea",
    },

    {
      name: "limit",
      label: "Nombre d'articles affichés",
      type: "number",
      defaultValue: 3,
      min: 1,
      max: 12,
    },

    {
      name: "category",
      label: "Filtrer par catégorie",
      type: "relationship",
      relationTo: "article-categories",
    },

    {
      name: "featuredOnly",
      label: "Afficher uniquement les articles à la une",
      type: "checkbox",
      defaultValue: false,
    },

    {
      name: "buttonLabel",
      label: "Texte du bouton",
      type: "text",
      defaultValue: "Voir toutes les actualités",
    },

    {
      name: "buttonUrl",
      label: "Lien du bouton",
      type: "text",
      defaultValue: "/actualites",
    },

  ],
};