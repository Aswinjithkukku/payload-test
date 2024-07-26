import { Block } from 'payload/types'

const TestimonialBlock: Block = {
  slug: 'testimonialBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'quotes',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          required: true,
        },
        {
          name: 'author',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'position',
          type: 'text',
          required: true,
        }
      ],
    },
  ],
}

export default TestimonialBlock
