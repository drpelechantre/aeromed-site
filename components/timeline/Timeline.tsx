type TimelineItem = {
  title: string
  description: string
  date?: string
  icon?: string
}

type TimelineProps = {
  items: TimelineItem[]
}

export default function Timeline({
  items,
}: TimelineProps) {
  return (
    <div className="relative">

      <div className="absolute left-5 top-0 h-full w-px bg-slate-200" />

      <div className="space-y-10">
        {items.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="relative flex gap-6"
          >

            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm">
              {item.icon || '•'}
            </div>


            <div className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-sm">

              {item.date && (
                <div className="text-sm font-medium text-[#5D89AD]">
                  {item.date}
                </div>
              )}

              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-relaxed text-slate-600">
                {item.description}
              </p>

            </div>

          </div>
        ))}
      </div>

    </div>
  )
}