import type { Block } from "payload";

export const MapBlock: Block = {
  slug: "map",

  labels: {
    singular: "Carte et accès",
    plural: "Cartes et accès",
  },

 admin: {
    group: 'Présentation',
    images: {
      thumbnail: {
        url: '/block-previews/map.png',
        alt: 'Aperçu du layout Maps',
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
      name: "address",
      type: "textarea",
      label: "Adresse",
      required: true,
    },
    {
      name: "mapUrl",
      type: "text",
      label: "Lien d’intégration de la carte",
      required: true,
      admin: {
        description:
          "Colle ici l’adresse src de l’iframe Google Maps ou OpenStreetMap.",
      },
    },
    {
      name: "directionsUrl",
      type: "text",
      label: "Lien pour calculer l’itinéraire",
      admin: {
        description:
          "Lien Google Maps ou autre service d’itinéraire.",
      },
    },
    {
      name: "directionsLabel",
      type: "text",
      label: "Texte du bouton",
      defaultValue: "Calculer mon itinéraire",
    },
    {
      name: "features",
      type: "array",
      label: "Informations pratiques",
      fields: [
        {
          name: "icon",
          type: "text",
          label: "Icône",
          admin: {
            description: "Exemples : ♿, 🚗, 🚌, 🚲",
          },
        },
        {
          name: "text",
          type: "text",
          label: "Information",
          required: true,
        },
      ],
    },
  ],
};