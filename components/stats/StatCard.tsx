import Card from '@/components/ui/Card'

type StatCardProps = {
  value: string
  label: string
  description?: string
  icon?: string
}

export default function StatCard({
  value,
  label,
  description,
  icon,
}: StatCardProps) {
  return (
    <Card className="text-center">
      {icon && (
        <div className="mb-4 text-3xl">
          {icon}
        </div>
      )}

      <div className="text-4xl font-semibold tracking-tight text-slate-900">
        {value}
      </div>

      <div className="mt-3 text-lg font-medium text-slate-700">
        {label}
      </div>

      {description && (
        <p className="mt-3 text-sm leading-relaxed text-slate-500">
          {description}
        </p>
      )}
    </Card>
  )
}