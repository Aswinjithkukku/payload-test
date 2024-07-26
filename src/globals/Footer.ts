import type { GlobalConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'
import link from '../fields/link'
import { slateEditor } from '@payloadcms/richtext-slate'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    // {
    //   name: 'columns',
    //   type: 'array',
    //   minRows: 1,
    //   maxRows: 3,
    //   fields: [
    //     {
    //       type: 'text',
    //       required: true,
    //       name: 'label',
    //     },
    //     {
    //       name: 'navItems',
    //       type: 'array',
    //       fields: [
    //         link({
    //           appearances: false,
    //         }),
    //       ],
    //     },
    //   ],
    // },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'address',
      type: 'richText',
      required: true,
      editor: slateEditor({
        admin: {
          elements: ['ol', 'ul'],
          leaves: ['bold', 'italic', 'underline'],
        },
      }),
    },
    {
      name: 'contact',
      type: 'array',
      minRows: 2,
      maxRows: 2,
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'highlightText',
          type: 'text',
          required: true,
        },
        {
          name: 'email',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'newsletter',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'highlightText',
          type: 'text',
          required: true,
        },
        {
          name: 'placeholderText',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'bottomBar',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'copyright',
          type: 'text',
          required: true,
        },
        {
          name: 'navItems',
          type: 'array',
          fields: [
            link({
              appearances: false,
            }),
          ],
        },
      ],
    },
  ],
}
