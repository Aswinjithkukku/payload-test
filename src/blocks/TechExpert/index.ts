import type { Block } from 'payload/types'

const TechExpertBlock: Block = {
    slug: 'techExpertBlock',
    fields: [
      {
        name: 'title',
        type: 'text',
        required: true,
      },
      {
        name: 'subtitle',
        type: 'text',
        required: true,
      },
      {
        name: 'description',
        type: 'textarea',
        required: true,
      },
      {
        name: 'ctaText',
        type: 'text',
        required: true,
      },
      {
        name: 'ctaLink',
        type: 'text',
        required: true,
      },
      {
        name: 'image',
        type: 'upload',
        relationTo: 'media',
        required: true,
      },
    ],
  };
  
  export default TechExpertBlock;