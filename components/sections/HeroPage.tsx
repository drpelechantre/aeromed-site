type HeroPageProps = {
  badge: string
  title: string
  description: string
}

export default function HeroPage({
  badge,
  title,
  description,
}: HeroPageProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8F1EB] via-white to-[#E8EEF6]" />

      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#B6D2BE]/25 blur-3xl" />
      <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#88AFCF]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="inline-flex items-center rounded-full border border-white bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur">
          {badge}
        </div>

       <h1
  className="
    text-5xl
    lg:text-6xl
    font-semibold
    tracking-tight
    leading-tight
    bg-gradient-to-r
    from-[#82B99A]
    via-[#7EB2AB]
    to-[#6D99BE]
    bg-clip-text
    text-transparent
  "
>
  {title}
</h1>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
    </section>
  )
}