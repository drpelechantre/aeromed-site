import type { BlockRendererProps } from "../PageRenderer";

type Media = {
  url?: string;
  alt?: string;
};

export default function ArticlesRenderer({
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

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.isArray(block.articles) &&
            block.articles.map((article: any, index: number) => {
              const image =
                typeof article.image === "object"
                  ? (article.image as Media)
                  : null;

              const formattedDate = article.date
                ? new Intl.DateTimeFormat("fr-FR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  }).format(new Date(article.date))
                : null;

              return (
                <article
                  key={article.id ?? index}
                  className="group overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {image?.url && (
                    <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={image.url}
                        alt={image.alt || article.title || ""}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="p-7">
                    {(article.category || formattedDate) && (
                      <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
                        {article.category && (
                          <span className="rounded-full bg-[#E8F1EB] px-3 py-1 font-medium text-[#5D89AD]">
                            {article.category}
                          </span>
                        )}

                        {formattedDate && (
                          <time
                            dateTime={article.date}
                            className="text-slate-400"
                          >
                            {formattedDate}
                          </time>
                        )}
                      </div>
                    )}

                    <h3 className="text-xl font-semibold text-slate-900">
                      {article.title}
                    </h3>

                    {article.summary && (
                      <p className="mt-3 leading-relaxed text-slate-600">
                        {article.summary}
                      </p>
                    )}

                    {article.linkLabel && article.linkHref && (
                      <a
                        href={article.linkHref}
                        className="mt-6 inline-flex font-medium text-[#5D89AD] transition group-hover:translate-x-1"
                      >
                        {article.linkLabel} →
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
}