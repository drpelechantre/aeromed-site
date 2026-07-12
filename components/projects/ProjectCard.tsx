import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

type ProjectStatus = 'En cours' | 'À venir' | 'Terminé'

type ProjectCardProps = {
  title: string
  description: string
  category?: string
  status?: ProjectStatus
  date?: string
  href?: string
}

export default function ProjectCard({
  title,
  description,
  category,
  status = 'En cours',
  date,
  href,
}: ProjectCardProps) {
  const statusVariant =
    status === 'En cours'
      ? 'success'
      : status === 'À venir'
        ? 'warning'
        : 'default'

  return (
    <Card hover className="flex h-full flex-col">
      <div className="flex flex-wrap items-center justify-between gap-3">
        {category ? (
          <Badge variant="info">{category}</Badge>
        ) : (
          <span />
        )}

        <Badge variant={statusVariant}>
          {status}
        </Badge>
      </div>

      <div className="mt-6 flex-1">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
          {title}
        </h3>

        {date && (
          <div className="mt-3 text-sm text-slate-400">
            {date}
          </div>
        )}

        <p className="mt-5 leading-relaxed text-slate-600">
          {description}
        </p>
      </div>

      {href && (
        <div className="mt-8">
          <Button href={href} variant="secondary">
            Découvrir le projet
          </Button>
        </div>
      )}
    </Card>
  )
}