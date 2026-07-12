import Button from '@/components/ui/Button'

type HeroImageSectionProps = {
  image: string
  eyebrow?: string
  title: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
}

export default function HeroImageSection({
  image,
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
}: HeroImageSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-b-[48px]">

      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-900/45" />
      </div>


      <div className="relative mx-auto max-w-7xl px-6 py-32 text-white lg:py-40">

        <div className="max-w-3xl">

          {eyebrow && (
            <div className="text-sm uppercase tracking-[0.25em] text-white/70">
              {eyebrow}
            </div>
          )}


          <h1 className="mt-6 text-5xl font-semibold tracking-tight lg:text-6xl">
            {title}
          </h1>


          {description && (
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85">
              {description}
            </p>
          )}


          {primaryLabel && primaryHref && (
            <div className="mt-10">
              <Button
                href={primaryHref}
                className="bg-white text-slate-900 hover:bg-slate-100"
              >
                {primaryLabel}
              </Button>
            </div>
          )}

        </div>

      </div>

    </section>
  )
}