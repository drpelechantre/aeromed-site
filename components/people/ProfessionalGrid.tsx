"use client"

import { useMemo, useState } from "react"

import ProfessionalCard from "@/components/people/ProfessionalCard"

type Professional = {
  id?: string | number
  name: string
  profession: string
  specialty?: string
  description?: string
  photo?: string
  badge?: string
  profileHref?: string
  appointmentHref?: string
  appointmentExternal?: boolean
}

type ProfessionalGridProps = {
  professionals: Professional[]
  emptyMessage?: string
}

function normalizeText(value?: string) {
  return (value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
}

export default function ProfessionalGrid({
  professionals,
  emptyMessage = "Aucun professionnel à afficher pour le moment.",
}: ProfessionalGridProps) {
  const [search, setSearch] = useState("")
  const [selectedProfession, setSelectedProfession] = useState("Tous")

  const professions = useMemo(() => {
    return Array.from(
      new Set(
        professionals
          .map((professional) => professional.profession)
          .filter(Boolean),
      ),
    ).sort((a, b) => a.localeCompare(b, "fr"))
  }, [professionals])

  const filteredProfessionals = useMemo(() => {
    const normalizedSearch = normalizeText(search)

    return professionals.filter((professional) => {
      const matchesProfession =
        selectedProfession === "Tous" ||
        professional.profession === selectedProfession

      const searchableContent = normalizeText(
        [
          professional.name,
          professional.profession,
          professional.specialty,
          professional.description,
          professional.badge,
        ]
          .filter(Boolean)
          .join(" "),
      )

      const matchesSearch =
        normalizedSearch.length === 0 ||
        searchableContent.includes(normalizedSearch)

      return matchesProfession && matchesSearch
    })
  }, [professionals, search, selectedProfession])

  const hasActiveFilters =
    search.trim().length > 0 || selectedProfession !== "Tous"

  function resetFilters() {
    setSearch("")
    setSelectedProfession("Tous")
  }

  if (professionals.length === 0) {
    return (
      <div className="rounded-[30px] border border-dashed border-slate-200 bg-white p-10 text-center text-slate-500">
        {emptyMessage}
      </div>
    )
  }

  return (
    <div>
      {/* Zone de recherche et de filtres */}
      <div className="relative mb-10 overflow-hidden rounded-[32px] border border-slate-200/70 bg-[#f8faf9] p-5 shadow-[0_18px_55px_rgba(15,23,42,0.055)] sm:p-7">
        {/* Halos décoratifs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#b8d8c3]/25 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-[#b9d3ea]/25 blur-3xl"
        />

        <div className="relative">
          {/* Barre de recherche */}
          <div className="relative">
            <SearchIcon />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Rechercher un professionnel, une spécialité…"
              className="h-14 w-full rounded-[20px] border border-slate-200/80 bg-white/90 pl-12 pr-12 text-sm text-slate-900 shadow-[0_8px_30px_rgba(15,23,42,0.05)] outline-none transition duration-300 placeholder:text-slate-400 focus:border-[#84b597] focus:ring-4 focus:ring-[#84b597]/10"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Effacer la recherche"
                className="absolute right-4 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                ×
              </button>
            )}
          </div>

          {/* Filtres */}
          <div className="mt-5 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <FilterButton
              label="Tous"
              active={selectedProfession === "Tous"}
              onClick={() => setSelectedProfession("Tous")}
            />

            {professions.map((profession) => (
              <FilterButton
                key={profession}
                label={profession}
                active={selectedProfession === profession}
                onClick={() => setSelectedProfession(profession)}
              />
            ))}
          </div>

          {/* Résultats */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/70 pt-4">
            <p
              className="text-sm text-slate-500"
              aria-live="polite"
            >
              <span className="font-semibold text-slate-900">
                {filteredProfessionals.length}
              </span>{" "}
              {filteredProfessionals.length > 1
                ? "professionnels trouvés"
                : "professionnel trouvé"}
            </p>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-sm font-medium text-[#628fa4] transition hover:text-slate-900"
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grille */}
      {filteredProfessionals.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProfessionals.map((professional) => (
            <ProfessionalCard
              key={
                professional.id ??
                `${professional.name}-${professional.profession}`
              }
              name={professional.name}
              profession={professional.profession}
              specialty={professional.specialty}
              description={professional.description}
              photo={professional.photo}
              badge={professional.badge}
              profileHref={professional.profileHref}
              appointmentHref={professional.appointmentHref}
              appointmentExternal={professional.appointmentExternal}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-[30px] border border-dashed border-slate-200 bg-[#f8faf9] px-6 py-14 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl shadow-sm">
            🔎
          </div>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">
            Aucun professionnel trouvé
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
            Aucun professionnel ne correspond actuellement à votre recherche.
          </p>

          <button
            type="button"
            onClick={resetFilters}
            className="mt-5 inline-flex rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Afficher toute l’équipe
          </button>
        </div>
      )}
    </div>
  )
}

type FilterButtonProps = {
  label: string
  active: boolean
  onClick: () => void
}

function FilterButton({
  label,
  active,
  onClick,
}: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium transition duration-300",
        active
          ? "border-slate-900 bg-slate-900 text-white shadow-[0_8px_22px_rgba(15,23,42,0.16)]"
          : "border-slate-200 bg-white/90 text-slate-600 hover:-translate-y-0.5 hover:border-[#9bbfa8] hover:text-slate-900 hover:shadow-sm",
      ].join(" ")}
    >
      {label}
    </button>
  )
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  )
}