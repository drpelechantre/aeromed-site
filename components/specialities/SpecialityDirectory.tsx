'use client'

import { useState } from 'react'
import SectionTitle from '@/components/sections/SectionTitle'
import SpecialtyCard from '@/components/specialities/SpecialityCard'

type Specialty = {
  id?: string | number
  name: string
  category?: string
  description?: string
  icon?: string
  practitionersCount?: number
  pageHref?: string
  appointmentHref?: string
}

type SpecialtyDirectoryProps = {
  specialties: Specialty[]
}

export default function SpecialtyDirectory({
  specialties,
}: SpecialtyDirectoryProps) {
  const [filter, setFilter] = useState('all')


  const categories = [
    {
      label: 'Toutes',
      value: 'all',
    },
    ...Array.from(
      new Set(
        specialties
          .map((specialty) => specialty.category)
          .filter(Boolean)
      )
    ).map((category) => ({
      label: category as string,
      value: category as string,
    })),
  ]


  const filteredSpecialties =
    filter === 'all'
      ? specialties
      : specialties.filter(
          (specialty) =>
            specialty.category === filter
        )


  return (
    <>
      <SectionTitle
        eyebrow="Nos spécialités"
        title="Qui consulter ?"
        description="Retrouvez les différents professionnels présents au sein de la MSP Aéromed."
        centered
      />


      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() =>
              setFilter(category.value)
            }
            className={`
              rounded-full px-5 py-2.5 text-sm font-medium transition
              ${
                filter === category.value
                  ? 'bg-slate-900 text-white'
                  : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
              }
            `}
          >
            {category.label}
          </button>
        ))}
      </div>


      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredSpecialties.map((specialty) => (
          <SpecialtyCard
            key={
              specialty.id ??
              specialty.name
            }
            name={specialty.name}
            description={specialty.description}
            icon={specialty.icon}
            practitionersCount={
              specialty.practitionersCount
            }
            pageHref={specialty.pageHref}
            appointmentHref={
              specialty.appointmentHref
            }
          />
        ))}
      </div>
    </>
  )
}