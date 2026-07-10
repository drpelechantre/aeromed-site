import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',

  label: 'Paramètres du site',

  admin: {
    description:
      'Modifiez les informations générales, le menu principal et les coordonnées de la MSP.',
  },

  access: {
    read: () => true,
  },

  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Identité',
          fields: [
            {
              name: 'siteName',
              label: 'Nom du site',
              type: 'text',
              required: true,
              defaultValue: 'Aéromed',
            },
            {
              name: 'subtitle',
              label: 'Sous-titre',
              type: 'text',
              required: true,
              defaultValue: 'Maison de Santé Pluriprofessionnelle',
            },
          ],
        },

        {
          label: 'Menu principal',
          fields: [
            {
              name: 'navigationItems',
              label: 'Liens du menu',
              type: 'array',
              labels: {
                singular: 'Lien',
                plural: 'Liens',
              },
              maxRows: 10,
              defaultValue: [
                {
                  label: 'Rendez-vous',
                  url: '/rendez-vous',
                },
                {
                  label: 'Équipe',
                  url: '/equipe',
                },
                {
                  label: 'Projets',
                  url: '/projets',
                },
                {
                  label: 'Recherche',
                  url: '/recherche',
                },
                {
                  label: 'Recrutement',
                  url: '/recrutement',
                },
                {
                  label: 'Contact',
                  url: '/contact',
                },
              ],
              fields: [
                {
                  name: 'label',
                  label: 'Texte affiché',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'url',
                  label: 'Destination',
                  type: 'text',
                  required: true,
                  admin: {
                    description:
                      'Exemple : /equipe, /contact ou https://www.exemple.fr',
                  },
                },
                {
                  name: 'openInNewTab',
                  label: 'Ouvrir dans un nouvel onglet',
                  type: 'checkbox',
                  defaultValue: false,
                },
              ],
            },
            {
              name: 'ctaLabel',
              label: 'Texte du bouton principal',
              type: 'text',
              required: true,
              defaultValue: 'Prendre rendez-vous',
            },
            {
              name: 'ctaUrl',
              label: 'Destination du bouton principal',
              type: 'text',
              required: true,
              defaultValue: '/rendez-vous',
            },
          ],
        },

        {
          label: 'Coordonnées',
          fields: [
            {
              name: 'phone',
              label: 'Téléphone du secrétariat',
              type: 'text',
            },
            {
              name: 'email',
              label: 'Adresse e-mail',
              type: 'email',
            },
            {
              name: 'address',
              label: 'Adresse',
              type: 'textarea',
            },
            {
              name: 'city',
              label: 'Ville / quartier',
              type: 'text',
              defaultValue: 'Toulouse • Saint-Martin-du-Touch',
            },
          ],
        },

        {
          label: 'Pied de page',
          fields: [
            {
              name: 'footerText',
              label: 'Texte du pied de page',
              type: 'textarea',
              defaultValue: 'Maison de Santé Pluriprofessionnelle',
            },
            {
              name: 'copyright',
              label: 'Copyright',
              type: 'text',
              defaultValue: '© 2026 Aéromed',
            },
          ],
        },
      ],
    },
  ],
}