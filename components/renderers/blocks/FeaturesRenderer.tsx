import type { BlockRendererProps } from "../PageRenderer";

export default function FeaturesRenderer({
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

        <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
          {block.title}
        </h2>

        {block.description && (
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            {block.description}
          </p>
        )}

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {block.features?.map((feature: any, index: number) => (
            <div
              key={feature.id ?? index}
              className="flex items-start gap-5"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F1EB] text-2xl">
                {feature.icon}
              </div>

              <div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>

                {feature.description && (
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}