import { Block } from "payload/types";

const WorkCardBlock: Block = {
    slug: 'workCardBlock',
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
        name: 'cards',
        type: 'array',
        required: true,
        minRows: 1,
        maxRows: 10,
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
        ],
      },
    ],
  };
  
  export default WorkCardBlock;