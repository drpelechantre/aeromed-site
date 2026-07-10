import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { SiteSettings } from './globals/SiteSettings'

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || '',
  admin: {
    user: 'users',
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [],
    },
   
{
  slug: 'professionals',
  labels: {
    singular: 'Professionnel',
    plural: 'Professionnels',
  },
  admin: {
    useAsTitle: 'fullName',
  },
  fields: [
    {
      name: 'fullName',
      label: 'Nom complet',
      type: 'text',
      required: true,
    },
    {
      name: 'profession',
      label: 'Profession',
      type: 'select',
      required: true,
      options: [
        { label: 'Médecin généraliste', value: 'medecin-generaliste' },
        { label: 'Gynécologue', value: 'gynecologue' },
        { label: 'Cardiologue', value: 'cardiologue' },
        { label: 'Ophtalmologue', value: 'ophtalmologue' },
        { label: 'Chirurgien-dentiste', value: 'dentiste' },
        { label: 'Kinésithérapeute', value: 'kinesitherapeute' },
        { label: 'Podologue', value: 'podologue' },
        { label: 'Diététicien(ne)', value: 'dieteticien' },
        { label: 'Psychomotricien(ne)', value: 'psychomotricien' },
        { label: 'Secrétariat', value: 'secretariat' },
        { label: 'Autre', value: 'autre' },
      ],
    },
    {
      name: 'emoji',
      label: 'Badge visuel',
      type: 'select',
      defaultValue: 'stethoscope',
      options: [
        { label: '🩺 Médecine', value: 'stethoscope' },
        { label: '🌸 Gynécologie', value: 'flower' },
        { label: '❤️ Cardiologie', value: 'heart' },
        { label: '👁️ Ophtalmologie', value: 'eye' },
        { label: '🦷 Dentaire', value: 'tooth' },
        { label: '🦵 Kinésithérapie', value: 'leg' },
        { label: '👣 Podologie', value: 'foot' },
        { label: '🥗 Diététique', value: 'salad' },
        { label: '🧠 Psychomotricité', value: 'brain' },
        { label: '😴 Sommeil', value: 'sleep' },
        { label: '🤝 Coordination', value: 'handshake' },
      ],
    },
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
    },
    {
      name: 'rpps',
      label: 'Numéro RPPS',
      type: 'text',
    },
    {
      name: 'cv',
      label: 'CV / parcours',
      type: 'textarea',
    },
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
    {
      name: 'visible',
      label: 'Visible sur le site',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'order',
      label: 'Ordre d’affichage',
      type: 'number',
      defaultValue: 99,
    },
  ],
},


    {
      slug: 'specialties',
      labels: {
        singular: 'Spécialité',
        plural: 'Spécialités',
      },
      fields: [
        { name: 'name', label: 'Nom', type: 'text', required: true },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'doctolibUrl', label: 'Lien Doctolib', type: 'text' },
        { name: 'visible', label: 'Visible', type: 'checkbox', defaultValue: true },
        { name: 'order', label: 'Ordre', type: 'number' },
      ],
    },
  ],
  
  
  globals: [SiteSettings],
  
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
})