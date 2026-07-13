import type { CollectionConfig } from "payload";

export const Specialties: CollectionConfig = {
      slug: 'specialties',
	  
	    admin: {
    useAsTitle: "name",
  },
  
      labels: {
        singular: 'Spécialité',
        plural: 'Spécialités',
      },
      fields: [
        {
          name: 'name',
          label: 'Nom',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
        },
        {
          name: 'doctolibUrl',
          label: 'Lien Doctolib',
          type: 'text',
        },
		{
  name: 'logo',
  label: 'Logo Aéromed',
  type: 'upload',
  relationTo: 'media',
},
        {
          name: 'visible',
          label: 'Visible',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'order',
          label: 'Ordre',
          type: 'number',
        },
      ],
    };