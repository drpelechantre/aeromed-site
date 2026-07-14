import Link from "next/link"
import { getPayload } from "payload"
import config from "@payload-config"
import type { Where } from "payload"

import AnnouncementGrid from "../../announcements/AnnouncementGrid"
import type { AnnouncementCardData } from "../../announcements/AnnouncementCard"


type AnnouncementsBlock = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null

  type?: string | null
  limit?: number | null
  featuredOnly?: boolean | null
  showClosed?: boolean | null

  layout?: "grid" | "list" | null
  showHighlights?: boolean | null
  showDate?: boolean | null
  showAuthor?: boolean | null

  emptyMessage?: string | null

  showAllButton?: boolean | null
  buttonLabel?: string | null
  buttonUrl?: string | null

  background?: "white" | "soft" | "gradient" | null
}

type Props = {
  block: AnnouncementsBlock
}

function getBackgroundClass(
  background?: AnnouncementsBlock["background"],
) {
  switch (background) {
    case "white":
      return "bg-white"

    case "gradient":
      return "bg-gradient-to-br from-[#EEF6F1] via-white to-[#EEF3F8]"

    case "soft":
    default:
      return "bg-[#F7FAF8]"
  }
}

export default async function AnnouncementsRenderer({ block }: Props) {
  const payload = await getPayload({
    config,
  })

  const conditions: Where[] = []

  if (!block.showClosed) {
    conditions.push({
      status: {
        equals: "open",
      },
    })
  } else {
    conditions.push({
      status: {
        in: ["open", "closed"],
      },
    })
  }

  if (block.type && block.type !== "all") {
    conditions.push({
      type: {
        equals: block.type,
      },
    })
  }

  if (block.featuredOnly) {
    conditions.push({
      featured: {
        equals: true,
      },
    })
  }

  const result = await payload.find({
    collection: "announcements",

    where:
      conditions.length > 0
        ? {
            and: conditions,
          }
        : undefined,

    sort: "-publishedAt",
    limit: block.limit ?? 6,
    depth: 2,
  })

  const announcements: AnnouncementCardData[] = result.docs.map(
    (announcement) => ({
      id: announcement.id,
      title: announcement.title,
      slug: announcement.slug,
      excerpt: announcement.excerpt,
      type: announcement.type,
      status: announcement.status,
      publishedAt: announcement.publishedAt,
      expiresAt: announcement.expiresAt,
      featured: announcement.featured,
      author: announcement.author,
      highlights: announcement.highlights,
    }),
  )

  const backgroundClass = getBackgroundClass(block.background)

  return (
    <section className={`py-20 sm:py-24 ${backgroundClass}`}>
      <div className="mx-auto max-w-7xl px-6">
        {(block.eyebrow || block.title || block.description) && (
          <div className="mb-10 max-w-3xl">
            {block.eyebrow && (
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#7A9B89]">
                {block.eyebrow}
              </div>
            )}

            {block.title && (
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {block.title}
              </h2>
            )}

            {block.description && (
              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                {block.description}
              </p>
            )}
          </div>
        )}

        <AnnouncementGrid
          announcements={announcements}
          layout={block.layout ?? "grid"}
          showHighlights={block.showHighlights ?? true}
          showDate={block.showDate ?? true}
          showAuthor={block.showAuthor ?? false}
          emptyMessage={
            block.emptyMessage ??
            "Aucune annonce n’est disponible pour le moment."
          }
        />

        {block.showAllButton && block.buttonUrl && (
          <div className="mt-10 flex justify-center">
            <Link
              href={block.buttonUrl}
              className="
                inline-flex items-center gap-2 rounded-2xl
                bg-slate-900 px-6 py-3
                text-sm font-semibold text-white
                shadow-sm transition
                hover:-translate-y-0.5 hover:bg-slate-800
                hover:shadow-md
              "
            >
              {block.buttonLabel ?? "Voir toutes les annonces"}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}