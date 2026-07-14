import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { getPayload } from "payload"
import config from "@payload-config"

import RichTextRenderer from "@/components/renderers/blocks/RichTextRenderer"

import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Clock3,
  Download,
  Euro,
  Handshake,
  Info,
  Mail,
  MapPin,
  Phone,
  Ruler,
  Stethoscope,
  UserRound,
  Wrench,
} from "lucide-react"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

type MediaValue =
  | {
      id?: string | number
      url?: string | null
      alt?: string | null
      filename?: string | null
    }
  | string
  | number
  | null

type AuthorValue =
  | {
      id?: string | number
      name?: string | null
      email?: string | null
    }
  | string
  | number
  | null

const typeLabels: Record<string, string> = {
  recrutement: "Recrutement",
  remplacement: "Remplacement",
  collaboration: "Collaboration",
  location: "Location de local",
  partenariat: "Partenariat",
  "appel-projet": "Appel à projet",
  autre: "Annonce",
}

const typeIcons: Record<string, React.ReactNode> = {
  recrutement: <BriefcaseBusiness className="h-4 w-4" />,
  remplacement: <Stethoscope className="h-4 w-4" />,
  collaboration: <Handshake className="h-4 w-4" />,
  location: <Building2 className="h-4 w-4" />,
  partenariat: <Handshake className="h-4 w-4" />,
  "appel-projet": <Info className="h-4 w-4" />,
  autre: <Info className="h-4 w-4" />,
}

const highlightIcons: Record<string, React.ReactNode> = {
  info: <Info className="h-5 w-5" />,
  missions: <BriefcaseBusiness className="h-5 w-5" />,
  profile: <UserRound className="h-5 w-5" />,
  salary: <Euro className="h-5 w-5" />,
  rent: <Euro className="h-5 w-5" />,
  location: <MapPin className="h-5 w-5" />,
  surface: <Ruler className="h-5 w-5" />,
  calendar: <CalendarDays className="h-5 w-5" />,
  clock: <Clock3 className="h-5 w-5" />,
  equipment: <Wrench className="h-5 w-5" />,
  contact: <UserRound className="h-5 w-5" />,
}

function formatDate(date?: string | null) {
  if (!date) {
    return null
  }

  const parsed = new Date(date)

  if (Number.isNaN(parsed.getTime())) {
    return null
  }

  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsed)
}

function getMediaUrl(media: MediaValue) {
  if (!media || typeof media !== "object") {
    return null
  }

  return media.url ?? null
}

function getMediaAlt(media: MediaValue) {
  if (!media || typeof media !== "object") {
    return ""
  }

  return media.alt ?? ""
}

function getAuthorName(author: AuthorValue) {
  if (!author || typeof author !== "object") {
    return null
  }

  return author.name || author.email || null
}

async function getAnnouncement(slug: string) {
  const payload = await getPayload({
    config,
  })

  const result = await payload.find({
    collection: "announcements",
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
    depth: 2,
  })

  return result.docs[0] ?? null
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const announcement = await getAnnouncement(slug)

  if (!announcement) {
    return {
      title: "Annonce introuvable | MSP Aéromed",
    }
  }

  return {
    title:
      announcement.seoTitle ||
      `${announcement.title} | MSP Aéromed`,
    description:
      announcement.seoDescription ||
      announcement.excerpt ||
      undefined,
  }
}

export default async function AnnouncementPage({
  params,
}: PageProps) {
  const { slug } = await params
  const announcement = await getAnnouncement(slug)

  if (!announcement) {
    notFound()
  }

  const type = announcement.type ?? "autre"
  const typeLabel = typeLabels[type] ?? "Annonce"
  const typeIcon = typeIcons[type] ?? typeIcons.autre

  const publicationDate = formatDate(announcement.publishedAt)
  const expirationDate = formatDate(announcement.expiresAt)
  const authorName = getAuthorName(announcement.author)

  const coverImageUrl = getMediaUrl(announcement.coverImage)
  const coverImageAlt =
    getMediaAlt(announcement.coverImage) || announcement.title

  const documentUrl = getMediaUrl(announcement.document)

  const isClosed =
    announcement.status === "closed" ||
    announcement.status === "archived"

  const hasContact =
    announcement.contactName ||
    announcement.contactRole ||
    announcement.contactEmail ||
    announcement.contactPhone

  return (
    <main className="min-h-screen bg-[#F8FAF9]">
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F1EB] via-white to-[#E8EEF6]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
          <Link
            href="/annonces"
            className="
              inline-flex items-center gap-2 text-sm font-medium
              text-slate-500 transition hover:text-slate-900
            "
          >
            <span aria-hidden="true">←</span>
            Retour aux annonces
          </Link>

          <div className="mt-10 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <div
                className="
                  inline-flex items-center gap-2 rounded-full
                  bg-white/80 px-3 py-1.5 text-xs font-semibold
                  text-slate-700 shadow-sm ring-1 ring-slate-200
                  backdrop-blur
                "
              >
                {typeIcon}
                {typeLabel}
              </div>

              {announcement.featured && (
                <div className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">
                  À la une
                </div>
              )}

              {isClosed && (
                <div className="rounded-full bg-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600">
                  Annonce terminée
                </div>
              )}
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {announcement.title}
            </h1>

            {announcement.excerpt && (
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                {announcement.excerpt}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-500">
              {publicationDate && (
                <div className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  Publié le {publicationDate}
                </div>
              )}

              {expirationDate && !isClosed && (
                <div className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4" />
                  Jusqu’au {expirationDate}
                </div>
              )}

              {authorName && (
                <div className="inline-flex items-center gap-2">
                  <UserRound className="h-4 w-4" />
                  {authorName}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {coverImageUrl && (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="overflow-hidden rounded-[32px] border border-slate-100 shadow-sm">
              <img
                src={coverImageUrl}
                alt={coverImageAlt}
                className="h-auto max-h-[560px] w-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      <section className="py-14 sm:py-18 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            {announcement.highlights &&
              announcement.highlights.length > 0 && (
                <section
                  className="
                    mb-10 rounded-[30px] border border-slate-200/70
                    bg-white p-6 shadow-sm sm:p-8
                  "
                >
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    {announcement.highlightsTitle || "Les points clés"}
                  </h2>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {announcement.highlights.map(
                      (highlight, index) => {
                        const icon =
                          highlightIcons[
                            highlight.icon ?? "info"
                          ] ?? highlightIcons.info

                        return (
                          <div
                            key={
                              highlight.id ??
                              `${highlight.label}-${index}`
                            }
                            className="
                              rounded-2xl bg-slate-50
                              p-4 sm:p-5
                            "
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className="
                                  flex h-10 w-10 shrink-0 items-center
                                  justify-center rounded-xl bg-white
                                  text-[#6B96B9] shadow-sm
                                "
                              >
                                {icon}
                              </div>

                              <div>
                                {highlight.label && (
                                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    {highlight.label}
                                  </div>
                                )}

                                {highlight.value && (
                                  <div className="mt-1 text-sm font-medium leading-6 text-slate-700">
                                    {highlight.value}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )
                      },
                    )}
                  </div>
                </section>
              )}

            {isClosed && (
              <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800">
                Cette annonce n’est plus active. Son contenu reste
                accessible à titre informatif.
              </div>
            )}

            <section className="rounded-[30px] border border-slate-200/70 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
  <RichTextRenderer
    block={{
      content: announcement.content,
    }}
  />
</section>
          </div>

          <aside className="space-y-6">
            {(documentUrl || announcement.externalLink) && (
              <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">
                  Documents et liens
                </h2>

                <div className="mt-5 grid gap-3">
                  {documentUrl && (
                    <a
                      href={documentUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex items-center justify-center gap-2
                        rounded-2xl bg-slate-900 px-5 py-3
                        text-sm font-semibold text-white
                        transition hover:bg-slate-800
                      "
                    >
                      <Download className="h-4 w-4" />
                      {announcement.documentLabel ||
                        "Télécharger le document"}
                    </a>
                  )}

                  {announcement.externalLink && (
                    <a
                      href={announcement.externalLink}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex items-center justify-center gap-2
                        rounded-2xl border border-slate-200
                        bg-white px-5 py-3 text-sm
                        font-semibold text-slate-700
                        transition hover:bg-slate-50
                      "
                    >
                      {announcement.externalLinkLabel ||
                        "Consulter le lien"}
                      <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </section>
            )}

            {hasContact && (
              <section
                className="
                  rounded-[28px] bg-gradient-to-br
                  from-[#EAF3ED] to-[#EDF3F8]
                  p-6 shadow-sm
                "
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6F927E]">
                  Contact
                </div>

                {announcement.contactName && (
                  <h2 className="mt-3 text-xl font-semibold text-slate-900">
                    {announcement.contactName}
                  </h2>
                )}

                {announcement.contactRole && (
                  <p className="mt-1 text-sm text-slate-600">
                    {announcement.contactRole}
                  </p>
                )}

                <div className="mt-5 grid gap-3">
                  {announcement.contactEmail && (
                    <a
                      href={`mailto:${announcement.contactEmail}`}
                      className="
                        inline-flex items-center gap-3 rounded-2xl
                        bg-white/80 px-4 py-3 text-sm
                        font-medium text-slate-700 transition
                        hover:bg-white
                      "
                    >
                      <Mail className="h-4 w-4 text-[#6B96B9]" />
                      {announcement.contactEmail}
                    </a>
                  )}

                  {announcement.contactPhone && (
                    <a
                      href={`tel:${announcement.contactPhone.replace(
                        /\s/g,
                        "",
                      )}`}
                      className="
                        inline-flex items-center gap-3 rounded-2xl
                        bg-white/80 px-4 py-3 text-sm
                        font-medium text-slate-700 transition
                        hover:bg-white
                      "
                    >
                      <Phone className="h-4 w-4 text-[#6B96B9]" />
                      {announcement.contactPhone}
                    </a>
                  )}
                </div>
              </section>
            )}

            <Link
              href="/contact"
              className="
                inline-flex w-full items-center justify-center
                rounded-2xl border border-slate-200 bg-white
                px-5 py-3 text-sm font-semibold text-slate-700
                shadow-sm transition hover:bg-slate-50
              "
            >
              {announcement.contactButtonLabel || "Nous contacter"}
            </Link>
          </aside>
        </div>
      </section>
    </main>
  )
}