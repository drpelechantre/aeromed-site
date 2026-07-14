import type { CollectionConfig } from "payload"

function createSlug(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export const Announcements: CollectionConfig = {
  slug: "announcements",

  labels: {
    singular: "Annonce",
    plural: "Annonces",
  },

  admin: {
    useAsTitle: "title",
    defaultColumns: [
      "title",
      "type",
      "status",
      "publishedAt",
      "featured",
    ],
    group: "Contenus",
    description:
      "Offres de recrutement, locations de locaux, remplacements, collaborations et autres opportunités.",
  },

  defaultSort: "-publishedAt",

  access: {
  read: ({ req }) => {
    if (req.user) {
      return true
    }

    return {
      status: {
        equals: "open",
      },
      publishedAt: {
        less_than_equal: new Date().toISOString(),
      },
    }
  },
},

  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data) {
          return data
        }

        if (!data.slug && data.title) {
          data.slug = createSlug(data.title)
        }

        return data
      },
    ],
  },

  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Contenu",
          description: "Présentation générale et contenu de l’annonce.",
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
              index: true,
              admin: {
                position: "sidebar",
                description:
                  "Adresse de la page. Générée automatiquement à partir du titre.",
              },
            },

            {
              name: "excerpt",
              label: "Résumé",
              type: "textarea",
              required: true,
              maxLength: 350,
              admin: {
                description:
                  "Texte court utilisé dans les cartes et les listes d’annonces.",
              },
            },

            {
              name: "coverImage",
              label: "Image principale",
              type: "upload",
              relationTo: "media",
              admin: {
                description:
                  "Image facultative affichée sur la carte et la page de l’annonce.",
              },
            },

            {
              name: "content",
              label: "Contenu détaillé",
              type: "richText",
              required: true,
            },
          ],
        },

        {
          label: "Points clés",
          description:
            "Informations synthétiques mises en valeur dans un encadré.",
          fields: [
            {
              name: "highlightsTitle",
              label: "Titre de l’encadré",
              type: "text",
              defaultValue: "Les points clés",
            },

            {
              name: "highlights",
              label: "Points clés",
              type: "array",
              minRows: 0,
              maxRows: 12,
              labels: {
                singular: "Point clé",
                plural: "Points clés",
              },
              admin: {
                initCollapsed: false,
                description:
                  "Exemples : missions, rémunération, loyer, surface, disponibilité ou organisation.",
              },
              fields: [
                {
                  name: "icon",
                  label: "Icône",
                  type: "select",
                  defaultValue: "info",
                  options: [
                    {
                      label: "Information",
                      value: "info",
                    },
                    {
                      label: "Missions",
                      value: "missions",
                    },
                    {
                      label: "Profession / profil",
                      value: "profile",
                    },
                    {
                      label: "Rémunération",
                      value: "salary",
                    },
                    {
                      label: "Loyer",
                      value: "rent",
                    },
                    {
                      label: "Localisation",
                      value: "location",
                    },
                    {
                      label: "Surface",
                      value: "surface",
                    },
                    {
                      label: "Date / disponibilité",
                      value: "calendar",
                    },
                    {
                      label: "Temps de travail",
                      value: "clock",
                    },
                    {
                      label: "Équipement",
                      value: "equipment",
                    },
                    {
                      label: "Contact",
                      value: "contact",
                    },
                  ],
                },

                {
                  name: "label",
                  label: "Intitulé",
                  type: "text",
                  required: true,
                  admin: {
                    placeholder: "Exemple : Rémunération",
                  },
                },

                {
                  name: "value",
                  label: "Information",
                  type: "textarea",
                  required: true,
                  admin: {
                    placeholder:
                      "Exemple : Activité libérale avec accompagnement à l’installation",
                  },
                },
              ],
            },
          ],
        },

        {
          label: "Documents et liens",
          description:
            "Fiche de poste, descriptif PDF ou lien vers une ressource externe.",
          fields: [
            {
              name: "document",
              label: "Document à télécharger",
              type: "upload",
              relationTo: "media",
              admin: {
                description:
                  "Fiche de poste, présentation du local ou document complet au format PDF.",
              },
            },

            {
              name: "documentLabel",
              label: "Texte du bouton de téléchargement",
              type: "text",
              defaultValue: "Télécharger le document",
              admin: {
                condition: (_, siblingData) => Boolean(siblingData?.document),
              },
            },

            {
              name: "externalLink",
              label: "Lien externe",
              type: "text",
              admin: {
                placeholder: "https://…",
                description:
                  "Lien vers une fiche complète, un formulaire ou un site partenaire.",
              },
            },

            {
              name: "externalLinkLabel",
              label: "Texte du bouton externe",
              type: "text",
              defaultValue: "Consulter le lien",
              admin: {
                condition: (_, siblingData) =>
                  Boolean(siblingData?.externalLink),
              },
            },
          ],
        },

        {
          label: "Contact",
          description:
            "Personne ou service à contacter à propos de l’annonce.",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "contactName",
                  label: "Nom du contact",
                  type: "text",
                  admin: {
                    width: "50%",
                  },
                },

                {
                  name: "contactRole",
                  label: "Fonction",
                  type: "text",
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
                  name: "contactEmail",
                  label: "Adresse e-mail",
                  type: "email",
                  admin: {
                    width: "50%",
                  },
                },

                {
                  name: "contactPhone",
                  label: "Téléphone",
                  type: "text",
                  admin: {
                    width: "50%",
                  },
                },
              ],
            },

            {
              name: "contactButtonLabel",
              label: "Texte du bouton de contact",
              type: "text",
              defaultValue: "Nous contacter",
            },
          ],
        },

        {
          label: "Référencement",
          description:
            "Informations complémentaires et classement de l’annonce.",
          fields: [
            {
              name: "keywords",
              label: "Mots-clés",
              type: "array",
              labels: {
                singular: "Mot-clé",
                plural: "Mots-clés",
              },
              fields: [
                {
                  name: "keyword",
                  label: "Mot-clé",
                  type: "text",
                  required: true,
                },
              ],
            },

            {
              name: "seoTitle",
              label: "Titre SEO",
              type: "text",
              maxLength: 70,
              admin: {
                description:
                  "Facultatif. Le titre de l’annonce sera utilisé par défaut.",
              },
            },

            {
              name: "seoDescription",
              label: "Description SEO",
              type: "textarea",
              maxLength: 170,
              admin: {
                description:
                  "Facultatif. Le résumé de l’annonce sera utilisé par défaut.",
              },
            },
          ],
        },
      ],
    },

    {
      name: "type",
      label: "Type d’annonce",
      type: "select",
      required: true,
      defaultValue: "recrutement",
      index: true,
      admin: {
        position: "sidebar",
      },
      options: [
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
    },

    {
      name: "status",
      label: "Statut",
      type: "select",
      required: true,
      defaultValue: "draft",
      index: true,
      admin: {
        position: "sidebar",
      },
      options: [
        {
          label: "Brouillon",
          value: "draft",
        },
        {
          label: "Ouverte",
          value: "open",
        },
        {
          label: "Terminée / pourvue",
          value: "closed",
        },
        {
          label: "Archivée",
          value: "archived",
        },
      ],
    },

    {
      name: "author",
      label: "Auteur",
      type: "relationship",
      relationTo: "users",
      admin: {
        position: "sidebar",
      },
    },

    {
      name: "publishedAt",
      label: "Date de publication",
      type: "date",
      required: true,
      defaultValue: () => new Date().toISOString(),
      index: true,
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayAndTime",
          displayFormat: "dd/MM/yyyy à HH:mm",
        },
      },
    },

    {
      name: "expiresAt",
      label: "Date de fin",
      type: "date",
      admin: {
        position: "sidebar",
        description:
          "Facultatif. La date pourra être affichée comme date limite ou disponibilité.",
        date: {
          pickerAppearance: "dayAndTime",
          displayFormat: "dd/MM/yyyy à HH:mm",
        },
      },
    },

    {
      name: "featured",
      label: "Mettre en avant",
      type: "checkbox",
      defaultValue: false,
      index: true,
      admin: {
        position: "sidebar",
        description:
          "Permet d’afficher cette annonce dans les sélections de la page d’accueil.",
      },
    },
  ],
}