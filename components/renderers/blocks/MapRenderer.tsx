type BlockRendererProps = {
  block: any;
};;

export default function MapRenderer({
  block,
}: BlockRendererProps) {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">

        <div>
          {block.eyebrow && (
            <div className="mb-4 text-sm uppercase tracking-[0.25em] text-slate-400">
              {block.eyebrow}
            </div>
          )}

          <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
            {block.title}
          </h2>

          {block.description && (
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              {block.description}
            </p>
          )}

          {block.address && (
            <div className="mt-8 rounded-[24px] border border-slate-100 bg-white p-6 shadow-sm">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
                Adresse
              </div>

              <p className="mt-3 whitespace-pre-line text-lg leading-relaxed text-slate-800">
                {block.address}
              </p>
            </div>
          )}

          {Array.isArray(block.features) && block.features.length > 0 && (
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {block.features.map((feature: any, index: number) => (
                <div
                  key={feature.id ?? index}
                  className="flex items-center gap-3 rounded-2xl bg-[#F4F7F6] px-4 py-3 text-slate-700"
                >
                  {feature.icon && (
                    <span className="text-xl">{feature.icon}</span>
                  )}

                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          )}

          {block.directionsUrl && (
            <a
              href={block.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-2xl bg-slate-900 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-slate-800"
            >
              {block.directionsLabel || "Calculer mon itinéraire"}
            </a>
          )}
        </div>

        <div className="overflow-hidden rounded-[36px] border border-white bg-slate-100 shadow-xl">
          {block.mapUrl ? (
            <iframe
              src={block.mapUrl}
              title={block.title || "Carte d’accès"}
              className="h-[460px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <div className="flex h-[460px] items-center justify-center text-slate-500">
              Carte non renseignée
            </div>
          )}
        </div>

      </div>
    </section>
  );
}