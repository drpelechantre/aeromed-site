type SectionTitleProps = {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionTitleProps) {
  return (
    <div
      className={`max-w-3xl ${
        centered ? 'mx-auto text-center' : ''
      }`}
    >
      {eyebrow && (
        <div className="mb-4 text-sm uppercase tracking-[0.25em] text-slate-400">
          {eyebrow}
        </div>
      )}

      <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-relaxed text-slate-600">
          {description}
        </p>
      )}
    </div>
  )
}