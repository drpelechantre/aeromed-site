type TeamHeroProps = {
  professionalCount?: number
  specialtyCount?: number
}

export default function TeamHero({
  professionalCount = 0,
  specialtyCount = 0,
}: TeamHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-200/60 bg-[#f8faf9]">
      {/* Décorations lumineuses */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#b8d8c3]/35 blur-[110px]" />

        <div className="absolute -right-24 top-0 h-[480px] w-[480px] rounded-full bg-[#b9d3ea]/40 blur-[120px]" />

        <div className="absolute bottom-[-220px] left-1/2 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-white blur-[90px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 sm:pb-20 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm font-medium text-slate-600 shadow-[0_8px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#84b597] shadow-[0_0_0_5px_rgba(132,181,151,0.14)]" />

            Maison de Santé Pluriprofessionnelle
          </div>

          {/* Titre */}
          <h1 className="text-balance text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-7xl">
            Des professionnels réunis
            <span className="mt-2 block bg-gradient-to-r from-[#79ad8d] via-[#6fa3a5] to-[#6e96be] bg-clip-text text-transparent">
              autour de votre santé.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-8 text-slate-600 sm:text-lg">
            À Aéromed, médecins et professionnels de santé travaillent
            ensemble pour proposer des soins accessibles, coordonnés et
            adaptés à chaque patient.
          </p>

          {/* Ancre */}
          <div className="mt-9 flex justify-center">
            <a
              href="#professionnels"
              className="group inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_20px_45px_rgba(15,23,42,0.22)]"
            >
              Découvrir notre équipe

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              >
                ↓
              </span>
            </a>
          </div>
        </div>

        {/* Chiffres clés */}
        <div className="mx-auto mt-14 grid max-w-4xl gap-3 sm:grid-cols-3 lg:mt-16">
          <StatCard
            value={professionalCount > 0 ? professionalCount.toString() : "—"}
            label="Professionnels"
          />

          <StatCard
            value={specialtyCount > 0 ? specialtyCount.toString() : "—"}
            label="Spécialités"
          />

          <StatCard value="1" label="Projet de santé commun" />
        </div>
      </div>
    </section>
  )
}

type StatCardProps = {
  value: string
  label: string
}

function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[26px] border border-white/80 bg-white/70 px-6 py-5 text-left shadow-[0_12px_40px_rgba(15,23,42,0.055)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-[0_20px_50px_rgba(15,23,42,0.09)]">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#84b597]/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">
        {value}
      </div>

      <div className="mt-1 text-sm font-medium text-slate-500">{label}</div>
    </div>
  )
}