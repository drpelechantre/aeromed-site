import type { Block } from 'payload'

export const ProfessionalsBlock: Block = {
  slug: 'professionals',

  labels: {
    singular: 'Professionnels',
    plural: 'Professionnels',
  },
  
   admin: {
    group: 'Santé et équipe',
    images: {
      thumbnail: {
        url: '/block-previews/profs.png',
        alt: 'Aperçu du layout Professionels',
      },
    },
  },

  fields: [
    {
  name: "showHero",
  label: "Afficher la présentation premium de l’équipe",
  type: "checkbox",
  defaultValue: false,
  admin: {
    description:
      "Affiche le grand bandeau de présentation avec le nombre de professionnels et de spécialités.",
  },
	},
 
 {
  name: "showPhilosophy",
  label: "Afficher la section sur le travail coordonné",
  type: "checkbox",
  defaultValue: false,
  admin: {
    description:
      "Ajoute une grande section premium sous les professionnels pour présenter la coordination de l’équipe.",
  },
},
	
	
	{
      name: 'title',
      label: 'Titre facultatif',
      type: 'text',
    },

    {
      name: 'description',
      label: 'Description facultative',
      type: 'textarea',
    },

    {
      name: 'specialty',
      label: 'Filtrer par spécialité',
      type: 'relationship',
      relationTo: 'specialties',
    },

    {
      name: 'limit',
      label: 'Nombre maximum de professionnels',
      type: 'number',
      defaultValue: 6,
      min: 1,
      max: 20,
    },

    {
      name: 'showDoctolib',
      label: 'Afficher les boutons Doctolib',
      type: 'checkbox',
      defaultValue: true,
    },

    {
      name: 'showAllButton',
      label: 'Afficher le bouton “Voir toute l’équipe”',
      type: 'checkbox',
      defaultValue: true,
    },

    {
      name: 'showAllButtonLabel',
      label: 'Texte du bouton',
      type: 'text',
      defaultValue: 'Découvrir toute l’équipe',
      admin: {
        condition: (_, siblingData) =>
          siblingData?.showAllButton === true,
      },
    },

    {
      name: 'showAllButtonUrl',
      label: 'Lien du bouton',
      type: 'text',
      defaultValue: '/equipe',
      admin: {
        condition: (_, siblingData) =>
          siblingData?.showAllButton === true,
      },
    },
  ],
}