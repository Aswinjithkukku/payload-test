import { Block } from "payload/types";

const NewsLetterBlock: Block = {
    slug: 'newsLetterBlock',
    fields: [
      {
        name: 'highlightedText',
        type: 'text',
        required: true,
      },
      {
        name: 'placeholderText',
        type: 'textarea',
        required: true,
      },
      {
        name: 'ctxButton',
        type: 'text',
        required: true,
      },
    ],
  };
  
  export default NewsLetterBlock;