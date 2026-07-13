import type { CollectionConfig } from 'payload'

function createSlug(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const Professionals: CollectionConfig = {
  slug: 'professionals',

  labels: {
    singular: 'Professionnel',
    plural: 'Professionnels',
  },

  access: {
    read: () => true,
  },

  admin: {
    useAsTitle: 'fullName',
    defaultColumns: [
      'fullName',
      'profession',
      'specialty',
      'visible',
      'order',
    ],
  },

  defaultSort: 'order',

  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (
          data?.title &&
          data?.firstName &&
          data?.lastName
        ) {
          data.fullName =
            `${data.title} ${data.firstName} ${data.lastName}`
        }

        return data
      },
    ],
  },

  fields: [

    // =========================
    // IDENTITÉ
    // =========================

    {
      name: 'title',
      label: 'Titre',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Docteur',
          value: 'Dr',
        },
        {
          label: 'Professeur',
          value: 'Pr',
        },
        {
          label: 'Monsieur',
          value: 'M.',
        },
        {
          label: 'Madame',
          value: 'Mme',
        },
      ],
    },

    {
      name: 'firstName',
      label: 'Prénom',
      type: 'text',
      required: true,
    },

    {
      name: 'lastName',
      label: 'Nom',
      type: 'text',
      required: true,
    },

    {
      name: 'fullName',
      label: 'Nom complet',
      type: 'text',
      admin: {
        readOnly: true,
        description:
          'Généré automatiquement à partir du titre, prénom et nom.',
      },
    },


    // =========================
    // URL PROFIL
    // =========================

    {
      name: 'slug',
      label: 'Adresse de la page',
      type: 'text',
      required: true,
      unique: true,
      index: true,

      admin: {
        description:
          'Adresse automatique de la fiche professionnelle.',
      },

      hooks: {
        beforeValidate: [
          ({ value, siblingData }) => {

            if (value) {
              return createSlug(String(value))
            }

            if (
              siblingData?.title &&
              siblingData?.firstName &&
              siblingData?.lastName
            ) {
              return createSlug(
                `${siblingData.firstName}-${siblingData.lastName}`
              )
            }

            return value
          },
        ],
      },
    },


    // =========================
    // PROFESSION
    // =========================

    {
      name: 'profession',
      label: 'Profession',
      type: 'select',
      required: true,

      options: [
        {
          label: 'Médecin généraliste',
          value: 'medecin-generaliste',
        },
        {
          label: 'Gynécologue',
          value: 'gynecologue',
        },
        {
          label: 'Cardiologue',
          value: 'cardiologue',
        },
        {
          label: 'Ophtalmologue',
          value: 'ophtalmologue',
        },
        {
          label: 'Chirurgien-dentiste',
          value: 'dentiste',
        },
        {
          label: 'Kinésithérapeute',
          value: 'kinesitherapeute',
        },
        {
          label: 'Podologue',
          value: 'podologue',
        },
        {
          label: 'Diététicien(ne)',
          value: 'dieteticien',
        },
        {
          label: 'Psychomotricien(ne)',
          value: 'psychomotricien',
        },
        {
          label: 'Secrétariat',
          value: 'secretariat',
        },
        {
          label: 'Autre',
          value: 'autre',
        },
      ],
    },


    // =========================
    // VISUEL
    // =========================

    {
      name: 'emoji',
      label: 'Badge visuel',
      type: 'select',
      defaultValue: 'stethoscope',

      options: [
        {
          label: '🩺 Médecine',
          value: 'stethoscope',
        },
        {
          label: '🌸 Gynécologie',
          value: 'flower',
        },
        {
          label: '❤️ Cardiologie',
          value: 'heart',
        },
        {
          label: '👁️ Ophtalmologie',
          value: 'eye',
        },
        {
          label: '🦷 Dentaire',
          value: 'tooth',
        },
        {
          label: '🦵 Kinésithérapie',
          value: 'leg',
        },
        {
          label: '👣 Podologie',
          value: 'foot',
        },
        {
          label: '🥗 Diététique',
          value: 'salad',
        },
        {
          label: '🧠 Psychomotricité',
          value: 'brain',
        },
        {
          label: '😴 Sommeil',
          value: 'sleep',
        },
        {
          label: '🤝 Coordination',
          value: 'handshake',
        },
      ],
    },


    {
      name: 'photo',
      label: 'Photo',
      type: 'upload',
      relationTo: 'media' as any,
    },


    // =========================
    // INFORMATIONS MÉTIER
    // =========================

    {
      name: 'specialty',
      label: 'Spécialité / groupe',
      type: 'relationship',
      relationTo: 'specialties',
    },

    {
      name: 'shortBio',
      label: 'Présentation courte',
      type: 'textarea',
      maxLength: 350,
    },

    {
      name: 'fullDescription',
      label: 'Présentation complète',
      type: 'textarea',
    },


    {
      name: 'rpps',
      label: 'Numéro RPPS',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },


    {
      name: 'cv',
      label: 'CV / parcours',
      type: 'textarea',
    },


    // =========================
    // CONTACT
    // =========================

    {
      name: 'doctolibUrl',
      label: 'Lien Doctolib',
      type: 'text',
    },

    {
      name: 'email',
      label: 'Email professionnel',
      type: 'email',
    },

    {
      name: 'phone',
      label: 'Téléphone',
      type: 'text',
    },


    // =========================
    // AFFICHAGE
    // =========================

    {
      name: 'visible',
      label: 'Visible sur le site',
      type: 'checkbox',
      defaultValue: true,

      admin: {
        position: 'sidebar',
      },
    },


    {
      name: 'order',
      label: 'Ordre d’affichage',
      type: 'number',
      defaultValue: 99,

      admin: {
        position: 'sidebar',
      },
    },

  ],
}