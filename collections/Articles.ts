import type { CollectionConfig } from "payload";

export const Articles: CollectionConfig = {
  slug: "articles",

  admin: {
    useAsTitle: "title",
    defaultColumns: [
      "title",
      "category",
      "status",
      "publishedAt",
    ],
  },

  fields: [

    {
      name: "title",
      label: "Titre",
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
      name: "excerpt",
      label: "Résumé",
      type: "textarea",
    },

    {
      name: "content",
      label: "Contenu",
      type: "richText",
      required: true,
    },

    {
      name: "image",
      label: "Image principale",
      type: "upload",
      relationTo: "media",
    },
	
	{
  name: "categories",
  label: "Catégories",
  type: "relationship",
  relationTo: "article-categories",
  hasMany: true,
},
{
  name: "author",
  label: "Auteur",
  type: "relationship",
  relationTo: "professionals",
},
{
  name: "tags",
  label: "Mots-clés",
  type: "array",
  fields: [
    {
      name: "tag",
      label: "Mot-clé",
      type: "text",
    },
  ],
},
{
  name: "audience",
  label: "Public cible",
  type: "select",
  hasMany: true,
  options: [
    {
      label: "Patients",
      value: "patients",
    },
    {
      label: "Professionnels de santé",
      value: "professionnels",
    },
    {
      label: "Étudiants",
      value: "etudiants",
    },
    {
      label: "Partenaires",
      value: "partenaires",
    },
  ],
},
{
  name: "seo",
  label: "SEO",
  type: "group",
  fields: [
    {
      name: "metaTitle",
      label: "Titre SEO",
      type: "text",
    },
    {
      name: "metaDescription",
      label: "Description SEO",
      type: "textarea",
    },
  ],
},

    {
      name: "publishedAt",
      label: "Date de publication",
      type: "date",
    },

    {
      name: "status",
      label: "Statut",
      type: "select",
      defaultValue: "draft",
      options: [
        {
          label: "Brouillon",
          value: "draft",
        },
        {
          label: "Publié",
          value: "published",
        },
        {
          label: "Archivé",
          value: "archived",
        },
      ],
    },

    {
      name: "featured",
      label: "Article mis en avant",
      type: "checkbox",
      defaultValue: false,
    },

  ],
};