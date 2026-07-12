import SectionTitle from '@/components/sections/SectionTitle'
import SpecialtyCard from '@/components/specialities/SpecialityCard'

type Specialty = {
  id?: string | number
  name: string
  description?: string
  icon?: string
  practitionersCount?: number
  pageHref?: string
  appointmentHref?: string
  appointmentExternal?: boolean
}

type SpecialtiesSectionProps = {
  specialties: Specialty[]
  eyebrow?: string
  title?: string
  description?: string
  centered?: boolean
  emptyMessage?: string
}

export default function SpecialtiesSection({
  specialties,
  eyebrow = 'Spécialités',
  title = 'Une prise en charge pluriprofessionnelle',
  description = 'Découvrez les différentes spécialités présentes au sein de la MSP Aéromed.',
  centered = false,
  emptyMessage = 'Aucune spécialité à afficher pour le moment.',
}: SpecialtiesSectionProps) {
  return (
    <>
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        description={description}
        centered={centered}
      />

      <div className="mt-12">
        {specialties.length === 0 ? (
          <div className="rounded-[28px] border border-dashed border-slate-200 bg-white p-10 text-center text-slate-500">
            {emptyMessage}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {specialties.map((specialty) => (
              <SpecialtyCard
                key={specialty.id ?? specialty.name}
                name={specialty.name}
                description={specialty.description}
                icon={specialty.icon}
                practitionersCount={specialty.practitionersCount}
                pageHref={specialty.pageHref}
                appointmentHref={specialty.appointmentHref}
                appointmentExternal={specialty.appointmentExternal}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}