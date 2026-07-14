import AnnouncementCard, {
  type AnnouncementCardData,
} from "./AnnouncementCard"

type AnnouncementGridProps = {
  announcements: AnnouncementCardData[]
  layout?: "grid" | "list"
  showHighlights?: boolean
  showDate?: boolean
  showAuthor?: boolean
  emptyMessage?: string
}

export default function AnnouncementGrid({
  announcements,
  layout = "grid",
  showHighlights = true,
  showDate = true,
  showAuthor = false,
  emptyMessage = "Aucune annonce n’est disponible pour le moment.",
}: AnnouncementGridProps) {
  if (announcements.length === 0) {
    return (
      <div
        className="
          rounded-[28px] border border-dashed border-slate-200
          bg-white/70 px-6 py-12 text-center
        "
      >
        <p className="text-sm text-slate-500">{emptyMessage}</p>
      </div>
    )
  }

  if (layout === "list") {
    return (
      <div className="grid gap-5">
        {announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement.id}
            announcement={announcement}
            layout="list"
            showHighlights={showHighlights}
            showDate={showDate}
            showAuthor={showAuthor}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {announcements.map((announcement) => (
        <AnnouncementCard
          key={announcement.id}
          announcement={announcement}
          layout="grid"
          showHighlights={showHighlights}
          showDate={showDate}
          showAuthor={showAuthor}
        />
      ))}
    </div>
  )
}