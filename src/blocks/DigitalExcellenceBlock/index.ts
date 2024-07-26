import { Block } from "payload/types";

const DigitalExcellenceBlock: Block = {
    slug: 'digitalExcellenceBlock',
    fields: [
      {
        name: 'title',
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
        name: 'highlightedText',
        type: 'text',
        required: true,
      },
      {
        name: 'highlightedDescription',
        type: 'textarea',
        required: true,
      },
    ],
  };
  
  export default DigitalExcellenceBlock;