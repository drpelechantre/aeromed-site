import type { CollectionConfig } from 'payload'
import { HeroBlock } from '../blocks/HeroBlock'
import { SectionTitleBlock } from '../blocks/SectionTitleBlock'
import { ProfessionalsBlock } from '../blocks/ProfessionalsBlock'
import { CTA } from "../blocks/CTA";
import { RichTextBlock } from '../blocks/RichText'
import { HeroImage } from '../blocks/HeroImage'
import { CardsBlock } from '../blocks/CardsBlock'
import { FeaturesBlock } from "../blocks/FeaturesBlock";
import { StatsBlock } from "../blocks/StatsBlock";
import { FAQBlock } from "../blocks/FAQBlock";
import { GalleryBlock } from "../blocks/GalleryBlock";
import { ArticlesBlock } from "../blocks/Articles";
import { MapBlock } from "../blocks/MapBlock";
import { PartnersBlock } from "../blocks/PartnersBlock";
import { DownloadBlock } from "../blocks/DownloadBlock";
import { AnnouncementsBlock } from "../blocks/AnnouncementsBlock"

export const Pages: CollectionConfig = {
  slug: 'pages',

access: {
    read: () => true,
  },

  admin: {
    useAsTitle: 'title',
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },

    {
  name: 'layout',
  type: 'blocks',
  blocks: [
	StatsBlock,
	FeaturesBlock,
	ArticlesBlock,
	MapBlock,
	PartnersBlock,
	DownloadBlock,
    HeroBlock,
	GalleryBlock,
	FAQBlock,
	HeroImage,
	SectionTitleBlock,
	ProfessionalsBlock,
	CTA,
	RichTextBlock,
	CardsBlock,
	AnnouncementsBlock,
  ],
},
  ],
}