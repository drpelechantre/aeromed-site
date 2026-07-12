import TeamHero from "@/components/sections/TeamHero"
import SectionTitle from "@/components/sections/SectionTitle"
import ProfessionalGrid from "./ProfessionalGrid"
import TeamPhilosophy from "@/components/sections/TeamPhilosophy"

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
}

type Props = {
  professionals: Professional[]
  eyebrow?: string
  title?: string
  description?: string
  showHero?: boolean
  showPhilosophy?: boolean
}

export default function ProfessionalsSection({
  professionals,
  eyebrow = "Équipe",
  title = "Des professionnels à votre écoute",
  description =
    "Une équipe pluriprofessionnelle travaillant de manière coordonnée afin de proposer un parcours de soins de qualité.",
  showHero = false,
  showPhilosophy = false,
}: Props) {
  const specialties = Array.from(
    new Set(
      professionals
        .map((professional) => professional.profession)
        .filter(Boolean),
    ),
  )

  return (
    <>
      {showHero && (
        <TeamHero
          professionalCount={professionals.length}
          specialtyCount={specialties.length}
        />
      )}

      <section
        id="professionnels"
        className="bg-white py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          {!showHero && (
            <SectionTitle
              eyebrow={eyebrow}
              title={title}
              description={description}
            />
          )}

          <div className={showHero ? "" : "mt-12"}>
            <ProfessionalGrid professionals={professionals} />
          </div>
        </div>
      </section>
	    {showPhilosophy && <TeamPhilosophy />}
    </>
  )
}