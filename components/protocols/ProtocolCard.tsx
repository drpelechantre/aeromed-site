import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

type ProtocolStatus =
  | 'Actif'
  | 'En développement'
  | 'Archivé'

type ProtocolCardProps = {
  title: string
  description: string
  icon?: string
  category?: string
  status?: ProtocolStatus
  coordinators?: string[]
  href?: string
}

export default function ProtocolCard({
  title,
  description,
  icon = '📋',
  category,
  status = 'Actif',
  coordinators = [],
  href,
}: ProtocolCardProps) {
  const statusVariant =
    status === 'Actif'
      ? 'success'
      : status === 'En développement'
        ? 'warning'
        : 'default'

  return (
    <Card hover className="flex h-full flex-col">

      <div className="flex items-start justify-between gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E8F1EB] to-[#E8EEF6] text-2xl">
          {icon}
        </div>

        <Badge variant={statusVariant}>
          {status}
        </Badge>

      </div>


      <div className="mt-6 flex-1">

        {category && (
          <div className="text-sm font-medium text-[#5D89AD]">
            {category}
          </div>
        )}

        <h3 className="mt-2 text-2xl font-semibold text-slate-900">
          {title}
        </h3>


        <p className="mt-4 leading-relaxed text-slate-600">
          {description}
        </p>


        {coordinators.length > 0 && (
          <div className="mt-6">
            <div className="text-sm font-semibold text-slate-900">
              Référents
            </div>

            <ul className="mt-2 space-y-1 text-sm text-slate-500">
              {coordinators.map((person) => (
                <li key={person}>
                  • {person}
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>


      {href && (
        <div className="mt-7">
          <Button
            href={href}
            variant="secondary"
          >
            Découvrir le parcours
          </Button>
        </div>
      )}

    </Card>
  )
}