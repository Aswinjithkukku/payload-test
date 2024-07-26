import { Block } from 'payload/types'

const ArticleBlock: Block = {
  slug: 'articleBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'ctxButton',
      type: 'text',
      required: true,
    },
    {
      name: 'articles',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 10,
      fields: [
          {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
          },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'author',
          type: 'group',
          fields: [
            {
              name: 'name',
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
                name: 'date',
                type: 'date',
                required: true,
            }
          ],
        },
      ],
    },
  ],
}

export default ArticleBlock
