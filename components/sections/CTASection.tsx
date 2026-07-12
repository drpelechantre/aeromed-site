import Button from '@/components/ui/Button'

type CTASectionProps = {
  eyebrow?: string
  title: string
  description?: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTASection({
  eyebrow = 'Aéromed',
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="px-6 py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-gradient-to-r from-[#89B49A] to-[#6D96BD] p-10 text-white shadow-2xl sm:p-14">

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative max-w-3xl">

          <div className="text-sm uppercase tracking-[0.25em] text-white/70">
            {eyebrow}
          </div>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight leading-tight">
            {title}
          </h2>

          {description && (
            <p className="mt-6 text-lg leading-relaxed text-white/85">
              {description}
            </p>
          )}

          <div className="mt-10 flex flex-wrap gap-4">

            <Button
              href={primaryHref}
              className="bg-white text-slate-900 hover:bg-slate-100"
            >
              {primaryLabel}
            </Button>

            {secondaryLabel && secondaryHref && (
              <Button
                href={secondaryHref}
                variant="ghost"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                {secondaryLabel}
              </Button>
            )}

          </div>

        </div>
      </div>
    </section>
  )
}