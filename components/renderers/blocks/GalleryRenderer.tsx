type BlockRendererProps = {
  block: any;
};;

type Media = {
  url?: string;
  alt?: string;
};

export default function GalleryRenderer({
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(block.images) &&
            block.images.map((item: any, index: number) => {
              const image =
                typeof item.image === "object"
                  ? (item.image as Media)
                  : null;

              if (!image?.url) {
                return null;
              }

              return (
                <figure
                  key={item.id ?? index}
                  className="group overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-sm"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={image.url}
                      alt={item.alt || image.alt || ""}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  {item.caption && (
                    <figcaption className="px-5 py-4 text-sm text-slate-600">
                      {item.caption}
                    </figcaption>
                  )}
                </figure>
              );
            })}
        </div>

      </div>
    </section>
  );
}