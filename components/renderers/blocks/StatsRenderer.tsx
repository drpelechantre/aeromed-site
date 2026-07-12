import type { BlockRendererProps } from "../PageRenderer";

export default function StatsRenderer({
  block,
}: BlockRendererProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        {block.eyebrow && (
          <div className="mb-4 text-sm uppercase tracking-[0.25em] text-slate-400">
            {block.eyebrow}
          </div>
        )}

        {block.title && (
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
            {block.title}
          </h2>
        )}

        {block.description && (
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            {block.description}
          </p>
        )}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.isArray(block.stats) &&
            block.stats.map((stat: any, index: number) => (
              <div
                key={stat.id ?? index}
                className="rounded-[28px] border border-slate-100 bg-white p-7 shadow-sm"
              >
                <div className="text-4xl font-semibold tracking-tight text-[#5D89AD]">
                  {stat.value}
                </div>

                <div className="mt-3 text-lg font-semibold text-slate-900">
                  {stat.label}
                </div>

                {stat.description && (
                  <p className="mt-2 leading-relaxed text-slate-600">
                    {stat.description}
                  </p>
                )}
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}