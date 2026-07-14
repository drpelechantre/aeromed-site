import Link from "next/link"
import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Clock3,
  Euro,
  Handshake,
  Info,
  MapPin,
  Ruler,
  Stethoscope,
  UserRound,
  Wrench,
} from "lucide-react"

type AnnouncementHighlight = {
  id?: string | null
  icon?: string | null
  label?: string | null
  value?: string | null
}

type AnnouncementAuthor =
  | {
      id?: string | number
      name?: string | null
      email?: string | null
    }
  | string
  | number
  | null

export type AnnouncementCardData = {
  id: string | number
  title: string
  slug: string
  excerpt?: string | null
  type?: string | null
  status?: string | null
  publishedAt?: string | null
  expiresAt?: string | null
  featured?: boolean | null
  author?: AnnouncementAuthor
  highlights?: AnnouncementHighlight[] | null
}

type AnnouncementCardProps = {
  announcement: AnnouncementCardData
  layout?: "grid" | "list"
  showHighlights?: boolean
  showDate?: boolean
  showAuthor?: boolean
}

const typeLabels: Record<string, string> = {
  recrutement: "Recrutement",
  remplacement: "Remplacement",
  collaboration: "Collaboration",
  location: "Location de local",
  partenariat: "Partenariat",
  "appel-projet": "Appel à projet",
  autre: "Annonce",
}

const typeThemes: Record<
  string,
  {
    badge: string
    icon: React.ReactNode
  }
> = {
  recrutement: {
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    icon: <BriefcaseBusiness className="h-4 w-4" />,
  },

  remplacement: {
    badge: "bg-sky-50 text-sky-700 ring-sky-100",
    icon: <Stethoscope className="h-4 w-4" />,
  },

  collaboration: {
    badge: "bg-indigo-50 text-indigo-700 ring-indigo-100",
    icon: <Handshake className="h-4 w-4" />,
  },

  location: {
    badge: "bg-amber-50 text-amber-700 ring-amber-100",
    icon: <Building2 className="h-4 w-4" />,
  },

  partenariat: {
    badge: "bg-violet-50 text-violet-700 ring-violet-100",
    icon: <Handshake className="h-4 w-4" />,
  },

  "appel-projet": {
    badge: "bg-cyan-50 text-cyan-700 ring-cyan-100",
    icon: <Info className="h-4 w-4" />,
  },

  autre: {
    badge: "bg-slate-100 text-slate-700 ring-slate-200",
    icon: <Info className="h-4 w-4" />,
  },
}

const highlightIcons: Record<string, React.ReactNode> = {
  info: <Info className="h-4 w-4" />,
  missions: <BriefcaseBusiness className="h-4 w-4" />,
  profile: <UserRound className="h-4 w-4" />,
  salary: <Euro className="h-4 w-4" />,
  rent: <Euro className="h-4 w-4" />,
  location: <MapPin className="h-4 w-4" />,
  surface: <Ruler className="h-4 w-4" />,
  calendar: <CalendarDays className="h-4 w-4" />,
  clock: <Clock3 className="h-4 w-4" />,
  equipment: <Wrench className="h-4 w-4" />,
  contact: <UserRound className="h-4 w-4" />,
}

function formatDate(date?: string | null) {
  if (!date) {
    return null
  }

  const parsedDate = new Date(date)

  if (Number.isNaN(parsedDate.getTime())) {
    return null
  }

  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsedDate)
}

function getAuthorName(author?: AnnouncementAuthor) {
  if (!author || typeof author !== "object") {
    return null
  }

  return author.name || author.email || null
}

export default function AnnouncementCard({
  announcement,
  layout = "grid",
  showHighlights = true,
  showDate = true,
  showAuthor = false,
}: AnnouncementCardProps) {
  const type = announcement.type ?? "autre"
  const theme = typeThemes[type] ?? typeThemes.autre
  const typeLabel = typeLabels[type] ?? "Annonce"

  const publicationDate = formatDate(announcement.publishedAt)
  const expirationDate = formatDate(announcement.expiresAt)
  const authorName = getAuthorName(announcement.author)

  const highlights = announcement.highlights?.slice(0, 3) ?? []
  const isClosed =
    announcement.status === "closed" || announcement.status === "archived"

  return (
    <article
      className={`
        group relative overflow-hidden rounded-[28px]
        border border-slate-200/70 bg-white
        shadow-[0_10px_35px_rgba(15,23,42,0.05)]
        transition duration-300
        hover:-translate-y-1
        hover:border-slate-300
        hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]
        ${
          layout === "list"
            ? "grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center"
            : "flex h-full flex-col p-6 sm:p-7"
        }
      `}
    >
      <div
        className="
          pointer-events-none absolute -right-12 -top-12
          h-36 w-36 rounded-full bg-gradient-to-br
          from-emerald-100/50 to-sky-100/40 blur-2xl
          transition duration-500 group-hover:scale-125
        "
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <div
            className={`
              inline-flex items-center gap-2 rounded-full
              px-3 py-1.5 text-xs font-semibold ring-1 ring-inset
              ${theme.badge}
            `}
          >
            {theme.icon}
            <span>{typeLabel}</span>
          </div>

          {announcement.featured && (
            <div
              className="
                inline-flex items-center rounded-full
                bg-slate-900 px-3 py-1.5
                text-xs font-semibold text-white
              "
            >
              À la une
            </div>
          )}

          {isClosed && (
            <div
              className="
                inline-flex items-center rounded-full
                bg-slate-100 px-3 py-1.5
                text-xs font-semibold text-slate-500
              "
            >
              Annonce terminée
            </div>
          )}
        </div>

        <h3
          className="
            mt-5 text-xl font-semibold leading-snug
            tracking-tight text-slate-900
            transition-colors group-hover:text-[#5D89AD]
          "
        >
          {announcement.title}
        </h3>

        {announcement.excerpt && (
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {announcement.excerpt}
          </p>
        )}

        {showHighlights && highlights.length > 0 && (
          <div className="mt-6 grid gap-3">
            {highlights.map((highlight, index) => {
              const icon =
                highlightIcons[highlight.icon ?? "info"] ??
                highlightIcons.info

              return (
                <div
                  key={highlight.id ?? `${highlight.label}-${index}`}
                  className="
                    flex items-start gap-3 rounded-2xl
                    bg-slate-50 px-4 py-3
                  "
                >
                  <div
                    className="
                      mt-0.5 flex h-8 w-8 shrink-0 items-center
                      justify-center rounded-xl bg-white
                      text-[#6B96B9] shadow-sm
                    "
                  >
                    {icon}
                  </div>

                  <div className="min-w-0">
                    {highlight.label && (
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        {highlight.label}
                      </div>
                    )}

                    {highlight.value && (
                      <div className="mt-0.5 text-sm font-medium text-slate-700">
                        {highlight.value}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
            {showDate && publicationDate && (
              <div className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" />
                <span>Publié le {publicationDate}</span>
              </div>
            )}

            {expirationDate && !isClosed && (
              <div className="inline-flex items-center gap-1.5">
                <Clock3 className="h-3.5 w-3.5" />
                <span>Jusqu’au {expirationDate}</span>
              </div>
            )}

            {showAuthor && authorName && (
              <div className="inline-flex items-center gap-1.5">
                <UserRound className="h-3.5 w-3.5" />
                <span>{authorName}</span>
              </div>
            )}
          </div>

          <Link
            href={`/annonces/${announcement.slug}`}
            className="
              mt-5 inline-flex items-center gap-2
              text-sm font-semibold text-[#5D89AD]
              transition-all
              group-hover:gap-3 group-hover:text-[#467596]
            "
          >
            Découvrir l’annonce
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  )
}