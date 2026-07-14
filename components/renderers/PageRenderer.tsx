import type { ComponentType } from "react";

import HeroRenderer from "./blocks/HeroRenderer";
import ProfessionalsRenderer from "./blocks/ProfessionalsRenderer";
import SectionTitleRenderer from "./blocks/SectionTitleRenderer";
import CTARenderer from "./blocks/CTARenderer";
import RichTextRenderer from './blocks/RichTextRenderer'
import HeroImageRenderer from './blocks/HeroImageRenderer'
import CardsRenderer from "./blocks/CardsRenderer";
import FeaturesRenderer from "./blocks/FeaturesRenderer";
import StatsRenderer from "./blocks/StatsRenderer";
import FAQRenderer from "./blocks/FAQRenderer";
import GalleryRenderer from "./blocks/GalleryRenderer";
import ArticlesRenderer from "./blocks/ArticlesRenderer";
import MapRenderer from "./blocks/MapRenderer";
import PartnersRenderer from "./blocks/PartnersRenderer";
import DownloadRenderer from "./blocks/DownloadRenderer";
import AnnouncementsRenderer from "./blocks/AnnouncementsRenderer";

type Block = {
  id?: string | number | null;
  blockType: string;

  [key: string]: unknown;
};

type PageRendererProps = {
  blocks?: Block[] | null;
};

const renderers: Record<string, ComponentType<any>> = {
  hero: HeroRenderer,
  heroImage: HeroImageRenderer,
  professionals: ProfessionalsRenderer,
  sectionTitle: SectionTitleRenderer,
  cta: CTARenderer,
  richText: RichTextRenderer,
  cards: CardsRenderer,
  features: FeaturesRenderer,
  stats: StatsRenderer,
  faq: FAQRenderer,
  gallery: GalleryRenderer,
  articles: ArticlesRenderer,
  announcements: AnnouncementsRenderer,
  map: MapRenderer,
  partners: PartnersRenderer,
  download: DownloadRenderer,
};

export default function PageRenderer({
  blocks,
}: PageRendererProps) {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  let alternatingIndex = 0;

  return (
    <main>
      {blocks.map((block, index) => {
        const Renderer = renderers[block.blockType];

        if (!Renderer) {
          return null;
        }

        const key =
          block.id ?? `${block.blockType}-${index}`;

        const hasSpecialBackground = [
          'hero',
          'heroImage',
          'cta',
        ].includes(block.blockType);

        if (hasSpecialBackground) {
          return (
            <div key={key}>
              <Renderer block={block} />
            </div>
          );
        }

        const isGradient =
          alternatingIndex % 2 === 1;

        alternatingIndex += 1;

        return (
          <section
            key={key}
            className={
              isGradient
                ? 'bg-gradient-to-br from-[#F1F7F3] via-[#F8FAF9] to-[#EEF4FA]'
                : 'bg-white'
            }
          >
            <Renderer block={block} />
          </section>
        );
      })}
    </main>
  );
}