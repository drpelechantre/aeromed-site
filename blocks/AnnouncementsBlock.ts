import type { Block } from "payload"

export const AnnouncementsBlock: Block = {
  slug: "announcements",

  labels: {
    singular: "Liste d’annonces",
    plural: "Listes d’annonces",
  },

  interfaceName: "AnnouncementsBlock",

  fields: [
    {
      name: "eyebrow",
      label: "Surtitre",
      type: "text",
      defaultValue: "Annonces",
      admin: {
        description:
          "Petit texte affiché au-dessus du titre, par exemple : Opportunités.",
      },
    },

    {
      name: "title",
      label: "Titre",
      type: "text",
      defaultValue: "Les opportunités de la MSP Aéromed",
      required: true,
    },

    {
      name: "description",
      label: "Description",
      type: "textarea",
      admin: {
        description:
          "Texte d’introduction affiché avant la liste des annonces.",
      },
    },

    {
      type: "row",
      fields: [
        {
          name: "type",
          label: "Type d’annonce",
          type: "select",
          admin: {
            width: "50%",
            description:
              "Laisser vide pour afficher tous les types d’annonces.",
          },
          options: [
            {
              label: "Tous les types",
              value: "all",
            },
            {
              label: "Recrutement",
              value: "recrutement",
            },
            {
              label: "Remplacement",
              value: "remplacement",
            },
            {
              label: "Collaboration",
              value: "collaboration",
            },
            {
              label: "Location de local",
              value: "location",
            },
            {
              label: "Partenariat",
              value: "partenariat",
            },
            {
              label: "Appel à projet",
              value: "appel-projet",
            },
            {
              label: "Autre",
              value: "autre",
            },
          ],
          defaultValue: "all",
        },

        {
          name: "limit",
          label: "Nombre maximal d’annonces",
          type: "number",
          min: 1,
          max: 24,
          defaultValue: 6,
          admin: {
            width: "50%",
          },
        },
      ],
    },

    {
      type: "row",
      fields: [
        {
          name: "featuredOnly",
          label: "Uniquement les annonces mises en avant",
          type: "checkbox",
          defaultValue: false,
          admin: {
            width: "50%",
          },
        },

        {
          name: "showClosed",
          label: "Afficher les annonces terminées",
          type: "checkbox",
          defaultValue: false,
          admin: {
            width: "50%",
            description:
              "Par défaut, seules les annonces actuellement ouvertes sont affichées.",
          },
        },
      ],
    },

    {
      name: "layout",
      label: "Présentation",
      type: "radio",
      defaultValue: "grid",
      options: [
        {
          label: "Grille de cartes",
          value: "grid",
        },
        {
          label: "Liste horizontale",
          value: "list",
        },
      ],
      admin: {
        layout: "horizontal",
      },
    },

    {
      name: "showHighlights",
      label: "Afficher les points clés dans les cartes",
      type: "checkbox",
      defaultValue: true,
      admin: {
        description:
          "Affiche les premiers points clés de chaque annonce directement dans la liste.",
      },
    },

    {
      name: "showDate",
      label: "Afficher la date de publication",
      type: "checkbox",
      defaultValue: true,
    },

    {
      name: "showAuthor",
      label: "Afficher l’auteur",
      type: "checkbox",
      defaultValue: false,
    },

    {
      name: "emptyMessage",
      label: "Message si aucune annonce n’est disponible",
      type: "text",
      defaultValue: "Aucune annonce n’est disponible pour le moment.",
    },

    {
      name: "showAllButton",
      label: "Afficher le bouton vers toutes les annonces",
      type: "checkbox",
      defaultValue: true,
    },

    {
      type: "row",
      fields: [
        {
          name: "buttonLabel",
          label: "Texte du bouton",
          type: "text",
          defaultValue: "Voir toutes les annonces",
          admin: {
            width: "50%",
            condition: (_, siblingData) =>
              Boolean(siblingData?.showAllButton),
          },
        },

        {
          name: "buttonUrl",
          label: "Lien du bouton",
          type: "text",
          defaultValue: "/annonces",
          admin: {
            width: "50%",
            condition: (_, siblingData) =>
              Boolean(siblingData?.showAllButton),
          },
        },
      ],
    },

    {
      name: "background",
      label: "Fond de la section",
      type: "select",
      defaultValue: "soft",
      options: [
        {
          label: "Blanc",
          value: "white",
        },
        {
          label: "Fond doux",
          value: "soft",
        },
        {
          label: "Dégradé léger",
          value: "gradient",
        },
      ],
    },
  ],
}