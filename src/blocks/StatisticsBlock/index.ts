import { Block } from "payload/types";

const StatisticsBlock: Block = {
    slug: 'statisticsBlock',
    fields: [
      {
        name: 'stats',
        type: 'array',
        required: true,
        minRows: 1,
        maxRows: 3,
        fields: [
          {
            name: 'number',
            type: 'number',
            required: true,
          },
          {
            name: 'description',
            type: 'textarea',
            required: true,
          },
          {
            name: 'icon',
            type: 'select',
            options: [
              { label: 'Smile', value: 'smile' },
              { label: 'Trophy', value: 'trophy' },
              { label: 'Megaphone', value: 'megaphone' },
              { label: 'Briefcase', value: 'briefcase' },
            ],
            required: true,
          },
        ],
      },
    ],
  };
  
  export default StatisticsBlock;