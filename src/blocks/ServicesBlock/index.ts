import { Block } from "payload/types";

const ServicesBlock: Block = {
    slug: 'servicesBlock',
    fields: [
      {
        name: 'title',
        type: 'text',
        required: true,
      },
      {
        name: 'caption',
        type: 'textarea',
        required: true,
      },
      {
        name: 'services',
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
          {
            name: 'badge',
            type: 'text',
          }
        ],
      },
      
    ],
  };
  
  export default ServicesBlock;