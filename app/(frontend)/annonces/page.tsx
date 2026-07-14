import type { Metadata } from "next"
import Link from "next/link"

import { getPayload } from "payload"
import config from "@payload-config"

import AnnouncementGrid from "@/components/announcements/AnnouncementGrid"
import type { AnnouncementCardData } from "@/components/announcements/AnnouncementCard"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Annonces | MSP Aéromed",
  description:
    "Découvrez les offres de recrutement, collaborations, remplacements et locaux disponibles au sein de la MSP Aéromed à Toulouse.",
}

export default async function AnnouncementsPage() {
  const payload = await getPayload({
    config,
  })

  const result = await payload.find({
    collection: "announcements",
    where: {
      status: {
        equals: "open",
      },
    },
    sort: "-featured,-publishedAt",
    limit: 100,
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

  return (
    <main className="min-h-screen bg-[#F8FAF9]">
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F1EB] via-white to-[#E8EEF6]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:py-28">
          <Link
            href="/"
            className="
              inline-flex items-center gap-2 text-sm font-medium
              text-slate-500 transition hover:text-slate-900
            "
          >
            <span aria-hidden="true">←</span>
            Retour à l’accueil
          </Link>

          <div className="mt-10 max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7A9B89]">
              Opportunités
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Les annonces de la MSP Aéromed
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Retrouvez nos offres de recrutement, propositions de
              collaboration, remplacements, partenariats et locaux
              professionnels disponibles.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                Annonces ouvertes
              </div>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                Les opportunités actuelles
              </h2>
            </div>

            {announcements.length > 0 && (
              <div className="text-sm text-slate-500">
                {announcements.length}{" "}
                {announcements.length > 1 ? "annonces disponibles" : "annonce disponible"}
              </div>
            )}
          </div>

          <AnnouncementGrid
            announcements={announcements}
            layout="grid"
            showHighlights
            showDate
            showAuthor={false}
            emptyMessage="Aucune annonce n’est disponible pour le moment."
          />
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div
            className="
              relative overflow-hidden rounded-[36px]
              bg-gradient-to-r from-[#89B49A] to-[#6D96BD]
              px-8 py-10 text-white shadow-xl
              sm:px-10 lg:px-14 lg:py-14
            "
          >
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Candidature spontanée
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Vous souhaitez rejoindre Aéromed ?
              </h2>

              <p className="mt-5 text-base leading-7 text-white/85 sm:text-lg">
                Même en l’absence d’offre correspondant exactement à votre
                profil, vous pouvez nous présenter votre projet professionnel.
              </p>

              <Link
                href="/contact"
                className="
                  mt-8 inline-flex items-center gap-2 rounded-2xl
                  bg-white px-6 py-3 text-sm font-semibold
                  text-slate-900 shadow-md transition
                  hover:-translate-y-0.5 hover:bg-slate-100
                "
              >
                Contacter la MSP
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}