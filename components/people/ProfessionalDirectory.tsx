'use client'

import { useState } from 'react'
import SectionTitle from '@/components/sections/SectionTitle'
import ProfessionalFilter from './ProfessionalFilter'
import ProfessionalGrid from './ProfessionalGrid'

type Professional = {
  id?: string | number
    title?: string
  firstName: string
  lastName: string
  name: string
  profession: string
  professionType?: string
  specialty?: string
  description?: string
  photo?: string
  badge?: string
  profileHref?: string
  appointmentHref?: string
}

type ProfessionalDirectoryProps = {
  professionals: Professional[]
}

export default function ProfessionalDirectory({
  professionals,
}: ProfessionalDirectoryProps) {

  const [filter, setFilter] = useState('all')


  const filterOptions = [
    {
      label: 'Tous',
      value: 'all',
    },
    ...Array.from(
      new Set(
        professionals
          .map((professional) => professional.professionType)
          .filter(Boolean)
      )
    ).map((type) => ({
      label: type as string,
      value: type as string,
    })),
  ]


  const filteredProfessionals =
    filter === 'all'
      ? professionals
      : professionals.filter(
          (professional) =>
            professional.professionType === filter
        )


  return (
    <>
      <SectionTitle
        eyebrow="Notre équipe"
        title="Des professionnels complémentaires"
        description="Médecins et professionnels paramédicaux travaillent ensemble au sein de la MSP Aéromed."
      />


      <div className="mt-10">
        <ProfessionalFilter
          options={filterOptions}
          value={filter}
          onChange={setFilter}
        />
      </div>


      <div className="mt-12">
        <ProfessionalGrid
          professionals={filteredProfessionals}
        />
      </div>

    </>
  )
}