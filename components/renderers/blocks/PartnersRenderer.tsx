import type { BlockRendererProps } from "../PageRenderer";

type Media = {
  url?: string;
  alt?: string;
};

export default function PartnersRenderer({
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
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            {block.description}
          </p>
        )}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(block.partners) &&
            block.partners.map((partner: any, index: number) => {
              const logo =
                typeof partner.logo === "object"
                  ? (partner.logo as Media)
                  : null;

              const content = (
                <>
                  {logo?.url && (
                    <div className="flex h-24 items-center justify-center rounded-2xl bg-[#F8FAF9] p-5">
                      <img
                        src={logo.url}
                        alt={logo.alt || partner.name || ""}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  )}

                  <div className={logo?.url ? "mt-6" : ""}>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {partner.name}
                    </h3>

                    {partner.description && (
                      <p className="mt-3 leading-relaxed text-slate-600">
                        {partner.description}
                      </p>
                    )}

                    {partner.url && (
                      <div className="mt-6 font-medium text-[#5D89AD] transition group-hover:translate-x-1">
                        Découvrir le partenaire →
                      </div>
                    )}
                  </div>
                </>
              );

              return partner.url ? (
                <a
                  key={partner.id ?? index}
                  href={partner.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[28px] border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {content}
                </a>
              ) : (
                <article
                  key={partner.id ?? index}
                  className="rounded-[28px] border border-slate-100 bg-white p-7 shadow-sm"
                >
                  {content}
                </article>
              );
            })}
        </div>

      </div>
    </section>
  );
}