import type { CollectionConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'
import { publishedOnly } from '../access/publishedOnly'
import { Callout } from '../blocks/Callout'
import { CallToAction } from '../blocks/CallToAction'
import { CardGrid } from '../blocks/CardGrid'
import { CaseStudiesHighlight } from '../blocks/CaseStudiesHighlight'
import { CaseStudyCards } from '../blocks/CaseStudyCards'
import { CaseStudyParallax } from '../blocks/CaseStudyParallax'
import { CodeFeature } from '../blocks/CodeFeature'
import { Content } from '../blocks/Content'
import { ContentGrid } from '../blocks/ContentGrid'
import { ExampleTabs } from '../blocks/ExampleTabs'
import { Form } from '../blocks/Form'
import { HoverCards } from '../blocks/HoverCards'
import { HoverHighlights } from '../blocks/HoverHighlights'
import { LinkGrid } from '../blocks/LinkGrid'
import { LogoGrid } from '../blocks/LogoGrid'
// import { MediaBlock } from '../blocks/Media'
import { MediaContent } from '../blocks/MediaContent'
import { Pricing } from '../blocks/Pricing'
import { ReusableContent } from '../blocks/ReusableContent'
import { Slider } from '../blocks/Slider'
import { Steps } from '../blocks/Steps'
import { StickyHighlights } from '../blocks/StickyHighlights'
import { fullTitle } from '../fields/fullTitle'
import { hero } from '../fields/hero'
import { slugField } from '../fields/slug'
import { formatPreviewURL } from '../utilities/formatPreviewURL'
import { revalidatePage } from '../utilities/revalidatePage'
import { Statement } from '../blocks/Statement'
import { MediaContentAccordion } from '../blocks/MediaContentAccordion'
import TechExpertBlock from '../blocks/TechExpert'
import LogoBlock from '../blocks/LogoBlock'
import DigitalExcellenceBlock from '../blocks/DigitalExcellenceBlock'
import StatisticsBlock from '../blocks/StatisticsBlock'
import ServicesBlock from '../blocks/ServicesBlock'
import ProjectListBlock from '../blocks/ProjectList'
import ERPContentBlock from '../blocks/ERPContentBlock'
import NewsLetterBlock from '../blocks/NewsletterBlock'
import WorkCardBlock from '../blocks/WorkCardBlock'
import FeaturedBlock from '../blocks/FeaturedBlock'
import TestimonialBlock from '../blocks/TestimonialBlock'
import ArticleBlock from '../blocks/ArticleBlock'
import StyledTextBlock from '../blocks/StyledTextBlock'

import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
})

export const generatePreviewPath = ({ path }) => `${path}`


console.log(process.env);

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'fullTitle',
    livePreview: {
      url: ({ data }) => {
        const path = generatePreviewPath({
          path: `/${typeof data?.slug === 'string' ? data.slug : ''}`,
        })
        console.log(process.env.PAYLOAD_PUBLIC_APP_URL, path)

        return `${process.env.PAYLOAD_PUBLIC_APP_URL}${path}`
      },
    },
    preview: doc => {
      console.log(formatPreviewURL('pages', doc), ' -doc')

      return formatPreviewURL('pages', doc)
    },
    defaultColumns: ['fullTitle', 'slug', 'createdAt', 'updatedAt'],
  },
  versions: {
    drafts: true,
  },
  access: {
    create: isAdmin,
    read: publishedOnly,
    readVersions: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  hooks: {
    afterChange: [
      ({ req: { payload }, doc }) => {
        revalidatePage({
          payload,
          collection: 'pages',
          doc,
        })
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    fullTitle,
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [hero],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              required: true,
              blocks: [
                Callout,
                CallToAction,
                CardGrid,
                CaseStudyCards,
                CaseStudiesHighlight,
                CaseStudyParallax,
                CodeFeature,
                Content,
                ContentGrid,
                Form,
                HoverCards,
                HoverHighlights,
                LinkGrid,
                LogoGrid,
                // MediaBlock,
                MediaContent,
                MediaContentAccordion,
                Pricing,
                ReusableContent,
                Slider,
                Statement,
                Steps,
                StickyHighlights,
                ExampleTabs,
                TechExpertBlock,
                LogoBlock,
                DigitalExcellenceBlock,
                StatisticsBlock,
                ServicesBlock,
                ProjectListBlock,
                ERPContentBlock,
                NewsLetterBlock,
                WorkCardBlock,
                FeaturedBlock,
                TestimonialBlock,
                ArticleBlock,
                StyledTextBlock,
              ],
            },
          ],
        },
      ],
    },
    slugField(),
  ],
}
