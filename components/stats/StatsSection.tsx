import SectionTitle from '@/components/sections/SectionTitle'
import StatCard from './StatCard'

type Stat = {
  value: string
  label: string
  description?: string
  icon?: string
}

type StatsSectionProps = {
  stats: Stat[]
  eyebrow?: string
  title?: string
  description?: string
}

export default function StatsSection({
  stats,
  eyebrow = 'Aéromed en quelques chiffres',
  title = 'Une organisation pluriprofessionnelle',
  description,
}: StatsSectionProps) {
  return (
    <>
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        description={description}
        centered
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={`${stat.value}-${stat.label}`}
            value={stat.value}
            label={stat.label}
            description={stat.description}
            icon={stat.icon}
          />
        ))}
      </div>
    </>
  )
}