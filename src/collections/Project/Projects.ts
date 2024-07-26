import type { CollectionConfig } from 'payload/types'

import { isAdmin } from '../../access/isAdmin'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true,
    update: isAdmin,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      label: 'URL',
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'project-categories',
      required: true,
    },
  ],
}
