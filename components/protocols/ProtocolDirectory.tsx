'use client'

import { useState } from 'react'
import SectionTitle from '@/components/sections/SectionTitle'
import ProtocolGrid from './ProtocolGrid'

type Protocol = {
  id?: string | number
  title: string
  description: string
  category?: string
  icon?: string
  status?: 'Actif' | 'En développement' | 'Archivé'
  coordinators?: string[]
  href?: string
}

type ProtocolDirectoryProps = {
  protocols: Protocol[]
}

export default function ProtocolDirectory({
  protocols,
}: ProtocolDirectoryProps) {
  const [filter, setFilter] = useState('all')

  const categories = [
    {
      label: 'Tous',
      value: 'all',
    },

    ...Array.from(
      new Set(
        protocols
          .map((protocol) => protocol.category)
          .filter(Boolean)
      )
    ).map((category) => ({
      label: category as string,
      value: category as string,
    })),
  ]


  const filteredProtocols =
    filter === 'all'
      ? protocols
      : protocols.filter(
          (protocol) =>
            protocol.category === filter
        )


  return (
    <>
      <SectionTitle
        eyebrow="Coordination des soins"
        title="Nos parcours et protocoles"
        description="Des prises en charge organisées autour de parcours coordonnés entre les différents professionnels de la MSP."
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
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
              }
            `}
          >
            {category.label}
          </button>
        ))}
      </div>


      <div className="mt-12">
        <ProtocolGrid
          protocols={filteredProtocols}
        />
      </div>
    </>
  )
}