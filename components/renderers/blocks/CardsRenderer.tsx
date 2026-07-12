import type { BlockRendererProps } from "../PageRenderer";

export default function CardsRenderer({
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

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {Array.isArray(block.cards) &&
            block.cards.map((card: any, index: number) => (
              <div
                key={card.id ?? index}
                className="rounded-[28px] border border-slate-100 bg-white p-7 shadow-sm"
              >
                {card.icon && (
                  <div className="mb-5 text-3xl">{card.icon}</div>
                )}

                <h3 className="text-xl font-semibold text-slate-900">
                  {card.title}
                </h3>

                {card.description && (
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {card.description}
                  </p>
                )}

                {card.buttonLabel && card.buttonHref && (
                  <a
                    href={card.buttonHref}
                    className="mt-6 inline-flex font-medium text-[#5D89AD] transition hover:translate-x-1"
                  >
                    {card.buttonLabel} →
                  </a>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}