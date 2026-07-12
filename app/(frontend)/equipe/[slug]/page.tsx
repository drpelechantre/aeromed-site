import Link from "next/link";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";

import PageRenderer from '@/components/renderers/PageRenderer'
type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatProfession(value?: string | null) {
  const labels: Record<string, string> = {
    "medecin-generaliste": "Médecin généraliste",
    gynecologue: "Gynécologue",
    cardiologue: "Cardiologue",
    ophtalmologue: "Ophtalmologue",
    dentiste: "Chirurgien-dentiste",
    kinesitherapeute: "Kinésithérapeute",
    podologue: "Pédicure-podologue",
    dieteticien: "Diététicien(ne)",
    psychomotricien: "Psychomotricien(ne)",
    secretariat: "Secrétariat",
    autre: "Professionnel de santé",
  };

  return value ? labels[value] ?? value : "Professionnel de santé";
}

function formatEmoji(value?: string | null) {
  const emojis: Record<string, string> = {
    stethoscope: "🩺",
    flower: "🌸",
    heart: "❤️",
    eye: "👁️",
    tooth: "🦷",
    leg: "🦵",
    foot: "👣",
    salad: "🥗",
    brain: "🧠",
    sleep: "😴",
    handshake: "🤝",
  };

  return value ? emojis[value] ?? "🩺" : "🩺";
}

export default async function ProfessionalPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: "professionals",
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        {
          visible: {
            equals: true,
          },
        },
      ],
    },
    limit: 1,
    depth: 2,
  });

const professional = result.docs[0] as typeof result.docs[0] & {
  fullDescription?: string | null
  shortBio?: string | null
  cv?: string | null

  photo?:
    | number
    | {
        alt?: string | null
        url?: string | null
        sizes?: {
          card?: {
            url?: string | null
          } | null
        } | null
      }
    | null
};
  
  if (!professional) {
    notFound();
  }

  const profession = formatProfession(professional.profession);
  const badge = formatEmoji(professional.emoji);

 const photo =
  typeof professional.photo === "object" && professional.photo
    ? professional.photo
    : null

const photoUrl =
  photo?.sizes?.card?.url ||
  photo?.url ||
  undefined

  const specialty =
    professional.specialty &&
    typeof professional.specialty === "object"
      ? professional.specialty.name
      : undefined;

console.log("PHOTO PAYLOAD :", professional.photo)
console.log("PHOTO URL UTILISÉE :", photoUrl)

  return (
  
  
    <main className="min-h-screen bg-[#f8faf9]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e8f1eb] via-white to-[#e8eef6]" />

        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#88b69a]/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#6a95bc]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-8">
          <Link
            href="/equipe"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            <span aria-hidden="true">←</span>
            Retour à l’équipe
          </Link>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-6 lg:grid-cols-[380px_1fr] lg:items-center lg:pb-28">
          {/* PHOTO */}
          <div className="relative mx-auto w-full max-w-[380px]">
            <div className="absolute -inset-4 rounded-[44px] bg-white/40 blur-xl" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[38px] border border-white/80 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.14)]">
              {photoUrl ? (
  <img
    src={photoUrl}
    alt={photo?.alt || professional.fullName}
    className="h-full w-full object-cover"
  />
) : (
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#dcebe1] via-[#eef4f2] to-[#dfe9f4]">
                  <div className="absolute -left-12 top-10 h-40 w-40 rounded-full bg-[#88b69a]/25 blur-3xl" />
                  <div className="absolute -right-12 bottom-10 h-48 w-48 rounded-full bg-[#6a95bc]/25 blur-3xl" />

                  <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/80 bg-white/80 text-6xl shadow-xl backdrop-blur">
                    {badge}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* INFORMATIONS */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
              <span className="text-lg">{badge}</span>
              <span>{profession}</span>
            </div>

            <h1 className="mt-7 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {professional.fullName}
            </h1>

            {specialty && (
              <p className="mt-5 text-xl font-medium text-[#5d89ad]">
                {specialty}
              </p>
            )}

            {professional.shortBio && (
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                {professional.shortBio}
              </p>
            )}

            <div className="mt-9 flex flex-wrap gap-3">
              {professional.doctolibUrl && (
                <a
                  href={professional.doctolibUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Prendre rendez-vous
                </a>
              )}

              {professional.email && (
                <a
                  href={`mailto:${professional.email}`}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/90 bg-white/80 px-6 py-3.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:bg-white"
                >
                  Envoyer un email
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1fr_320px] lg:py-24">
        <div className="space-y-8">
          {/* PRÉSENTATION */}
          <article className="rounded-[34px] border border-slate-100 bg-white p-7 shadow-[0_14px_45px_rgba(15,23,42,0.05)] sm:p-10">
            <div className="text-sm font-medium uppercase tracking-[0.22em] text-[#6f9b80]">
              Présentation
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              À propos
            </h2>

            <div className="mt-7 whitespace-pre-line text-base leading-8 text-slate-600">
              {professional.fullDescription ||
                professional.shortBio ||
                "La présentation complète de ce professionnel sera prochainement disponible."}
            </div>
          </article>

          {/* PARCOURS */}
          {professional.cv && (
            <article className="rounded-[34px] border border-slate-100 bg-white p-7 shadow-[0_14px_45px_rgba(15,23,42,0.05)] sm:p-10">
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-[#658db4]">
                Parcours
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                Formation et expérience
              </h2>

              <div className="mt-7 whitespace-pre-line text-base leading-8 text-slate-600">
                {professional.cv}
              </div>
            </article>
          )}
        </div>

        {/* COLONNE LATÉRALE */}
        <aside className="space-y-6">
          <div className="rounded-[30px] border border-slate-100 bg-white p-7 shadow-[0_14px_45px_rgba(15,23,42,0.05)]">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
              Informations pratiques
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400">
                  Profession
                </div>
                <div className="mt-1 font-medium text-slate-800">
                  {profession}
                </div>
              </div>

              {specialty && (
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400">
                    Spécialité
                  </div>
                  <div className="mt-1 font-medium text-slate-800">
                    {specialty}
                  </div>
                </div>
              )}

              {professional.rpps && (
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400">
                    Numéro RPPS
                  </div>
                  <div className="mt-1 font-medium text-slate-800">
                    {professional.rpps}
                  </div>
                </div>
              )}

              {professional.phone && (
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400">
                    Téléphone
                  </div>
                  <a
                    href={`tel:${professional.phone}`}
                    className="mt-1 block font-medium text-[#5d89ad] hover:underline"
                  >
                    {professional.phone}
                  </a>
                </div>
              )}

              {professional.email && (
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400">
                    Email
                  </div>
                  <a
                    href={`mailto:${professional.email}`}
                    className="mt-1 block break-words font-medium text-[#5d89ad] hover:underline"
                  >
                    {professional.email}
                  </a>
                </div>
              )}
            </div>
          </div>

          {professional.doctolibUrl && (
            <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#87b299] to-[#6b96bd] p-7 text-white shadow-xl">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />

              <div className="relative">
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-white/70">
                  Rendez-vous
                </div>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  Consulter les disponibilités
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/80">
                  Accédez directement à l’agenda en ligne du professionnel.
                </p>

                <a
                  href={professional.doctolibUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-md transition hover:bg-slate-100"
                >
                  Ouvrir Doctolib
                </a>
              </div>
            </div>
          )}
        </aside>
      </section>

      {/* RETOUR ÉQUIPE */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Équipe Aéromed
            </div>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              Découvrir les autres professionnels
            </h2>
          </div>

          <Link
            href="/equipe"
            className="inline-flex rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Voir toute l’équipe →
          </Link>
        </div>
      </section>
    </main>
  );
}