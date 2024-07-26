import { Block } from 'payload/types'

const StyledTextBlock: Block = {
  slug: 'styledTextBlock',
  fields: [
    {
      name: 'textItems',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'style',
          type: 'select',
          options: [
            { label: 'Bold', value: 'bold' },
            { label: 'Outlined', value: 'outlined' },
          ],
          required: true,
        },
      ],
    },
  ],
}

export default StyledTextBlock
