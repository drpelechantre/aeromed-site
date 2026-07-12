import Link from "next/link"

type TeamPhilosophyProps = {
  eyebrow?: string
  title?: string
  description?: string
  buttonLabel?: string
  buttonHref?: string
}

export default function TeamPhilosophy({
  eyebrow = "Notre approche",
  title = "Une équipe réunie autour d’un projet de santé commun.",
  description = "À Aéromed, la complémentarité des métiers permet de mieux orienter les patients, de favoriser les échanges entre professionnels et de construire des prises en charge plus fluides.",
  buttonLabel = "Découvrir notre projet de santé",
  buttonHref = "/projets",
}: TeamPhilosophyProps) {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-4 sm:pb-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-[38px] border border-white/80 bg-gradient-to-br from-[#edf5ef] via-[#f7faf9] to-[#e9f0f7] px-7 py-12 shadow-[0_24px_70px_rgba(15,23,42,0.09)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          {/* Halos décoratifs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-28 -z-10 h-72 w-72 rounded-full bg-[#9fc8ac]/35 blur-[90px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -right-20 -z-10 h-80 w-80 rounded-full bg-[#91b4d2]/30 blur-[100px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:64px_64px]"
          />

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-sm backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[#82ad92]" />
                {eyebrow}
              </div>

              <h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
                {title}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                {description}
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:min-w-64">
              <Link
                href={buttonHref}
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_18px_40px_rgba(15,23,42,0.23)]"
              >
                {buttonLabel}

                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <div className="grid grid-cols-3 gap-2">
                <MiniValue icon="↔" label="Échanges" />
                <MiniValue icon="◎" label="Coordination" />
                <MiniValue icon="♡" label="Proximité" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type MiniValueProps = {
  icon: string
  label: string
}

function MiniValue({ icon, label }: MiniValueProps) {
  return (
    <div className="rounded-2xl border border-white/80 bg-white/65 px-2 py-3 text-center shadow-sm backdrop-blur-xl">
      <div className="text-lg text-[#668ca0]" aria-hidden="true">
        {icon}
      </div>

      <div className="mt-1 text-[0.65rem] font-semibold text-slate-600 sm:text-xs">
        {label}
      </div>
    </div>
  )
}