import { Block } from 'payload/types'

const FeaturedBlock: Block = {
  slug: 'featuredBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'ctxButton',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'relationship',
          relationTo: 'pages',
          required: true,
          hasMany: false,
        },
      ],
    },
    {
      name: 'blocks',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'author',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}

export default FeaturedBlock
