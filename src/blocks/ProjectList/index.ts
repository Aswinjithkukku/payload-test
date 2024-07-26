import { Block } from 'payload/types'
import payload from 'payload';

const ProjectListBlock: Block = {
  slug: 'project-list-block',
  fields: [
    {
      name: 'ProjectList',
      type: 'array',
      labels: {
        singular: 'Project',
        plural: 'Projects',
      },
      fields: [
        {
          name: 'Project',
          type: 'relationship',
          relationTo: 'projects',
          required: true,
        },
      ],
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'project-categories',
      hasMany: true,
      label: 'Categories',
      hooks: {
        beforeChange: [
          async () => {
            try {
              const allCategories = await payload.find({
                collection: 'project-categories',
              });
              return allCategories.docs.map(category => category.id);
            } catch (error) {
              console.error('Error fetching categories:', error);
              return [];
            }
          },
        ],
      },
    },
  ],
  
}

export default ProjectListBlock
