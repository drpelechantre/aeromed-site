import { getPayload } from "payload"
import config from "@payload-config"

import ProfessionalsSection from "@/components/people/ProfessionalsSection"

type ProfessionalsBlock = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null

  specialty?: string | null
  limit?: number | null
  showHero?: boolean | null
  showPhilosophy?: boolean | null
  showDoctolib?: boolean | null
  showTeamButton?: boolean | null
  buttonLabel?: string | null
  buttonUrl?: string | null
}

type Props = {
  block: ProfessionalsBlock
}

function formatProfession(value?: string | null) {
  const labels: Record<string, string> = {
    "medecin-generaliste": "Médecin généraliste",
    cardiologue: "Cardiologue",
    gynecologue: "Gynécologue",
    ophtalmologue: "Ophtalmologue",
    dentiste: "Chirurgien-dentiste",
    kinesitherapeute: "Kinésithérapeute",
    podologue: "Pédicure-podologue",
    dieteticien: "Diététicien",
    psychomotricien: "Psychomotricien",
  }

  return value ? labels[value] ?? value : ""
}

export default async function ProfessionalsRenderer({ block }: Props) {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: "professionals",
    limit: block.limit || 100,
    depth: 2,

    where: block.specialty
      ? {
          profession: {
            equals: block.specialty,
          },
        }
      : undefined,
  })

  const professionals = result.docs.map((professional: any) => ({
    id: professional.id,

    name:
      professional.name ||
      professional.fullName ||
      "Professionnel de santé",

    profession: formatProfession(professional.profession),

    specialty: professional.specialty || undefined,

    description: professional.description || undefined,

    photo:
      typeof professional.photo === "object"
        ? professional.photo?.url
        : professional.photo || undefined,

    badge: professional.badge || undefined,

    profileHref: professional.slug
      ? `/equipe/${professional.slug}`
      : undefined,

    appointmentHref:
      block.showDoctolib === false
        ? undefined
        : professional.appointmentHref ||
          professional.doctolibUrl ||
          professional.appointmentUrl ||
          undefined,
  }))

  return (
    <ProfessionalsSection
      eyebrow={block.eyebrow || undefined}
      title={block.title || undefined}
      description={block.description || undefined}
      professionals={professionals}
      showHero={Boolean(block.showHero)}
	   showPhilosophy={Boolean(block.showPhilosophy)}
    />
  )
}