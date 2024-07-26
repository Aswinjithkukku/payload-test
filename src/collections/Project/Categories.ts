
import type { CollectionConfig } from 'payload/types'

import { isAdmin } from '../../access/isAdmin'

export const ProjectCategories: CollectionConfig = {
  slug: 'project-categories',
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
    },
    {
      name: 'description',
      type: 'textarea',
    }
  ],
}
