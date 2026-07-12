type BlockRendererProps = {
  block: any;
};;

export default function FAQRenderer({
  block,
}: BlockRendererProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">

        {block.eyebrow && (
          <div className="mb-4 text-sm uppercase tracking-[0.25em] text-slate-400">
            {block.eyebrow}
          </div>
        )}

        <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
          {block.title}
        </h2>

        {block.description && (
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            {block.description}
          </p>
        )}

        <div className="mt-12 space-y-4">
          {Array.isArray(block.items) &&
            block.items.map((item: any, index: number) => (
              <details
                key={item.id ?? index}
                className="group rounded-[24px] border border-slate-100 bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-slate-900">
                  <span>{item.question}</span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8F1EB] text-xl text-[#5D89AD] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="mt-4 border-t border-slate-100 pt-4">
                  <p className="leading-relaxed text-slate-600">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
        </div>

      </div>
    </section>
  );
}