import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

type PartnerCardProps = {
  name: string
  description?: string
  logo?: string
  category?: string
  href?: string
  external?: boolean
}

export default function PartnerCard({
  name,
  description,
  logo,
  category,
  href,
  external = true,
}: PartnerCardProps) {
  return (
    <Card hover className="flex h-full flex-col">
      <div className="flex min-h-24 items-center justify-center rounded-2xl bg-[#F8FAF9] p-6">
        {logo ? (
          <img
            src={logo}
            alt={`Logo ${name}`}
            className="max-h-16 max-w-full object-contain"
          />
        ) : (
          <div className="text-4xl">🤝</div>
        )}
      </div>

      <div className="mt-6 flex-1">
        {category && (
          <div className="text-sm font-medium text-[#5D89AD]">
            {category}
          </div>
        )}

        <h3 className="mt-2 text-xl font-semibold text-slate-900">
          {name}
        </h3>

        {description && (
          <p className="mt-4 leading-relaxed text-slate-600">
            {description}
          </p>
        )}
      </div>

      {href && (
        <div className="mt-7">
          <Button
            href={href}
            variant="secondary"
            external={external}
          >
            Découvrir le partenaire
          </Button>
        </div>
      )}
    </Card>
  )
}