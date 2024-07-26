import { Block } from "payload/types";

const ERPContentBlock: Block = {
    slug: 'ERPContentBlock',
    fields: [
      {
        name: 'title',
        type: 'text',
        required: true,
      },
      {
        name: 'description',
        type: 'text',
        required: true,
      },
      {
        name: 'highlightedText',
        type: 'text',
        required: true,
      },
      {
        name: 'ctxButton',
        type: 'text',
        required: true,
      },
      {
        name: 'cards',
        type: 'array',
        required: true,
        minRows: 2,
        maxRows: 4,
        fields: [
          {
            name: 'description',
            type: 'text',
            required: true,
          },
          {
            name: 'value',
            type: 'text',
            required: true,
          },
        ],
      },
    ],
  };
  
  export default ERPContentBlock;