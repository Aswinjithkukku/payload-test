import { Block } from "payload/types";

const LogoBlock: Block = {
    slug: 'logoBlock',
    fields: [
      {
        name: 'title',
        type: 'text',
        required: true,
      },
      {
        name: 'logos',
        type: 'array',
        required: true,
        minRows: 1,
        maxRows: 10,
        fields: [
          {
            name: 'company',
            type: 'text',
            required: true,
          },
          {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
            required: true,
          },
        ],
      },
    ],
  };
  
  export default LogoBlock;