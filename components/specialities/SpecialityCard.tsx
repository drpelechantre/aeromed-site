import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

type SpecialtyCardProps = {
  name: string
  description?: string
  icon?: string
  practitionersCount?: number
  pageHref?: string
  appointmentHref?: string
  appointmentExternal?: boolean
}

export default function SpecialtyCard({
  name,
  description,
  icon = '🩺',
  practitionersCount,
  pageHref,
  appointmentHref,
  appointmentExternal = true,
}: SpecialtyCardProps) {
  return (
    <Card hover className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E8F1EB] to-[#E8EEF6] text-2xl">
          {icon}
        </div>

        {typeof practitionersCount === 'number' && (
          <Badge variant="info">
            {practitionersCount}{' '}
            {practitionersCount > 1
              ? 'professionnels'
              : 'professionnel'}
          </Badge>
        )}
      </div>

      <div className="mt-6 flex-1">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
          {name}
        </h3>

        {description && (
          <p className="mt-4 leading-relaxed text-slate-600">
            {description}
          </p>
        )}
      </div>

      {(pageHref || appointmentHref) && (
        <div className="mt-7 flex flex-wrap gap-3">
          {pageHref && (
            <Button href={pageHref} variant="secondary">
              Découvrir
            </Button>
          )}

          {appointmentHref && (
            <Button
              href={appointmentHref}
              external={appointmentExternal}
            >
              Prendre rendez-vous
            </Button>
          )}
        </div>
      )}
    </Card>
  )
}