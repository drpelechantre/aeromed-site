import Link from "next/link"

type ProfessionalCardProps = {
 title?: string;
  firstName: string;
  lastName: string;
  profession: string;
  specialty?: string;
  description?: string;
  photo?: string;
  badge?: string;
  profileHref?: string;
  appointmentHref?: string;
  appointmentExternal?: boolean
}

type ProfessionTheme = {
  background: string
  glow: string
  accent: string
  accentSoft: string
}

function getProfessionTheme(profession: string): ProfessionTheme {
  const normalizedProfession = profession.toLowerCase()

  if (normalizedProfession.includes("cardio")) {
    return {
      background: "from-[#f8e9ec] via-[#fcf4f5] to-[#f5e9ee]",
      glow: "bg-[#d995a4]/30",
      accent: "text-[#a85d70]",
      accentSoft: "bg-[#f8e8ec] text-[#95566a]",
    }
  }

  if (
    normalizedProfession.includes("gynéco") ||
    normalizedProfession.includes("gyneco")
  ) {
    return {
      background: "from-[#faece8] via-[#fdf5f2] to-[#f6e8ec]",
      glow: "bg-[#dfa99e]/30",
      accent: "text-[#a96868]",
      accentSoft: "bg-[#f9e9e5] text-[#9a6261]",
    }
  }

  if (
    normalizedProfession.includes("ophtalmo") ||
    normalizedProfession.includes("optique")
  ) {
    return {
      background: "from-[#e8f2f8] via-[#f1f7fa] to-[#e7eff7]",
      glow: "bg-[#86b3cf]/30",
      accent: "text-[#527f9c]",
      accentSoft: "bg-[#e7f1f7] text-[#527d98]",
    }
  }

  if (
    normalizedProfession.includes("dentiste") ||
    normalizedProfession.includes("dentaire")
  ) {
    return {
      background: "from-[#f3f1ea] via-[#faf9f5] to-[#edf1ee]",
      glow: "bg-[#b4c7bd]/28",
      accent: "text-[#69847a]",
      accentSoft: "bg-[#edf2ef] text-[#657e75]",
    }
  }

  if (
    normalizedProfession.includes("kiné") ||
    normalizedProfession.includes("kine")
  ) {
    return {
      background: "from-[#e8f2f3] via-[#f2f8f8] to-[#e8f0f5]",
      glow: "bg-[#85b5b5]/30",
      accent: "text-[#4f8587]",
      accentSoft: "bg-[#e6f2f1] text-[#4f7f80]",
    }
  }

  if (normalizedProfession.includes("podologue")) {
    return {
      background: "from-[#f3eee5] via-[#faf7f1] to-[#eef2e8]",
      glow: "bg-[#c1ad83]/28",
      accent: "text-[#8a7550]",
      accentSoft: "bg-[#f2ede3] text-[#806e4f]",
    }
  }

  if (
    normalizedProfession.includes("diét") ||
    normalizedProfession.includes("diet")
  ) {
    return {
      background: "from-[#e9f3e8] via-[#f4f8f1] to-[#e7f0e8]",
      glow: "bg-[#91bd8d]/30",
      accent: "text-[#628b61]",
      accentSoft: "bg-[#e8f2e6] text-[#60825f]",
    }
  }

  if (normalizedProfession.includes("psychomot")) {
    return {
      background: "from-[#eeeaf7] via-[#f7f4fa] to-[#e9eef7]",
      glow: "bg-[#a89bc8]/30",
      accent: "text-[#75669a]",
      accentSoft: "bg-[#eee9f6] text-[#716491]",
    }
  }

  return {
    background: "from-[#e6f0ea] via-[#f1f6f3] to-[#e6edf5]",
    glow: "bg-[#8bb69b]/30",
    accent: "text-[#5d89ad]",
    accentSoft: "bg-[#e9f2ed] text-[#60836d]",
  }
}

export default function ProfessionalCard({
  title,
  firstName,
  lastName,
  profession,
  specialty,
  description,
  photo,
  badge,
  profileHref,
  appointmentHref,
  appointmentExternal = true,
}: ProfessionalCardProps) {
  const theme = getProfessionTheme(profession)

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[34px] border border-slate-200/70 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.065)] transition-all duration-500 hover:-translate-y-2 hover:border-slate-300/70 hover:shadow-[0_28px_70px_rgba(15,23,42,0.14)]">
      {/* Halo général au survol */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-20 top-1/3 z-0 h-56 w-56 rounded-full ${theme.glow} blur-[80px] opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Photo */}
      <div
        className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${theme.background}`}
      >
        <div
          aria-hidden="true"
          className={`absolute -left-16 -top-16 h-52 w-52 rounded-full ${theme.glow} blur-[70px]`}
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-[#7fa8cc]/20 blur-[75px]"
        />

        {photo ? (
          <img
            src={photo}
           alt={`Portrait de ${title ?? ""} ${firstName} ${lastName}`}
            className="relative z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.055]"
          />
        ) : (
          <div className="relative z-10 flex h-full w-full items-center justify-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/90 bg-white/75 text-5xl shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl transition duration-500 group-hover:scale-105">
              {badge || "🩺"}
            </div>
          </div>
        )}

        {/* Badge métier */}
        <div className="absolute left-5 top-5 z-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <span className="text-sm" aria-hidden="true">
              {badge || "🩺"}
            </span>

            <span>{profession}</span>
          </span>
        </div>

        {/* Dégradé inférieur */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-slate-950/30 via-slate-900/5 to-transparent" />

        {/* Ligne lumineuse */}
        <div className="absolute inset-x-7 bottom-0 z-20 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-60" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-7">
        {specialty && (
          <div
            className={`mb-4 inline-flex w-fit rounded-full px-3 py-1.5 text-xs font-semibold ${theme.accentSoft}`}
          >
            {specialty}
          </div>
        )}

     <h3 className="text-xl font-semibold leading-tight text-slate-900">
  <span className="block">
    {title} {firstName}
  </span>

  <span className="block">
    {lastName}
  </span>
</h3>

        <div className="mt-4 h-px w-full bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />

        {description && (
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
            {description}
          </p>
        )}

        <div className="mt-auto pt-7">
          <div className="flex flex-col gap-3">
            {appointmentHref && (
              <Link
                href={appointmentHref}
                target={appointmentExternal ? "_blank" : undefined}
                rel={appointmentExternal ? "noreferrer" : undefined}
                className="group/button inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(15,23,42,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_16px_35px_rgba(15,23,42,0.22)]"
              >
                Prendre rendez-vous

                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-0.5"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            )}

            {profileHref && (
              <Link
                href={profileHref}
                className={`group/profile inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition duration-300 hover:border-slate-300 hover:bg-slate-50 ${theme.accent}`}
              >
                Découvrir le profil

                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4 transition-transform duration-300 group-hover/profile:translate-x-0.5"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}