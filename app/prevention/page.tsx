const preventionActions = [
  {
    date: "2026",
    category: "Prévention",
    title: "Actions de prévention à venir",
    excerpt:
      "La MSP Aéromed développera progressivement des actions de prévention en lien avec les besoins du quartier, les professionnels de santé et les partenaires du territoire.",
    status: "À venir",
  },
  {
    date: "2026",
    category: "Santé publique",
    title: "Construction du programme de prévention",
    excerpt:
      "Les premières actions seront organisées autour de thématiques prioritaires : dépistage, éducation à la santé, maladies chroniques, sommeil, nutrition et prévention cardiovasculaire.",
    status: "En préparation",
  },
];

export default function PreventionPage() {
  return (
    <div className="min-h-screen bg-[#F8FAF9] text-slate-800 font-sans">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo-aeromed.jpg"
              alt="Logo Aéromed"
              className="w-12 h-12 object-contain"
            />
            <div>
              <div className="font-semibold text-lg tracking-tight">Aéromed</div>
              <div className="text-xs text-slate-500 -mt-1">
                Maison de Santé Pluriprofessionnelle
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-sm text-slate-600">
            <a href="/rendez-vous/" className="hover:text-slate-900 transition">
              Rendez-vous
            </a>
            <a href="/equipe/" className="hover:text-slate-900 transition">
              Équipe
            </a>
            <a href="/projets/" className="hover:text-slate-900 transition">
              Projets
            </a>
            <a href="/recherche/" className="hover:text-slate-900 transition">
              Recherche
            </a>
            <a href="/recrutement/" className="hover:text-slate-900 transition">
              Recrutement
            </a>
            <a href="/contact/" className="hover:text-slate-900 transition">
              Contact
            </a>
          </nav>

          <a
            href="/rendez-vous/"
            className="bg-slate-900 text-white px-5 py-2.5 rounded-2xl text-sm hover:bg-slate-800 transition shadow-sm"
          >
            Prendre rendez-vous
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E8F1EB] via-white to-[#E8EEF6]" />
          <div className="relative max-w-7xl mx-auto px-6 py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm text-slate-600 shadow-sm border border-white mb-8">
                Prévention • Santé publique • Territoire
              </div>

              <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-slate-900">
                Prévenir,
                <span className="block bg-gradient-to-r from-[#88B69A] to-[#6A95BC] bg-clip-text text-transparent">
                  accompagner et sensibiliser.
                </span>
              </h1>

              <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-2xl">
                La MSP Aéromed s’inscrit dans une démarche de prévention et de
                santé publique, avec des actions pensées au plus près des besoins
                des patients et du territoire.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">
                Actions menées
              </div>
              <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
                Journal de prévention
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                Retrouvez ici les actions de prévention organisées ou portées par
                la maison de santé, classées par ordre chronologique.
              </p>
            </div>

            <div className="grid gap-7">
              {preventionActions.map((action) => (
                <article
                  key={action.title}
                  className="group bg-white rounded-[34px] border border-slate-100 shadow-sm hover:shadow-xl transition duration-300 overflow-hidden"
                >
                  <div className="grid lg:grid-cols-[220px_1fr]">
                    <div className="bg-gradient-to-br from-[#E8F1EB] to-[#E8EEF6] p-8 flex flex-col justify-between">
                      <div>
                        <div className="text-sm uppercase tracking-[0.22em] text-slate-500">
                          {action.category}
                        </div>
                        <div className="mt-4 text-4xl font-semibold text-slate-900">
                          {action.date}
                        </div>
                      </div>

                      <div className="mt-8 inline-flex w-fit rounded-full bg-white/80 px-4 py-2 text-sm text-[#5D89AD] border border-white shadow-sm">
                        {action.status}
                      </div>
                    </div>

                    <div className="p-8 lg:p-10">
                      <h3 className="text-2xl font-semibold tracking-tight text-slate-900 group-hover:text-[#5D89AD] transition">
                        {action.title}
                      </h3>

                      <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
                        {action.excerpt}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-3 text-sm">
                        <span className="rounded-full bg-[#F4F7F6] px-4 py-2 text-slate-600">
                          Prévention
                        </span>
                        <span className="rounded-full bg-[#F4F7F6] px-4 py-2 text-slate-600">
                          Coordination
                        </span>
                        <span className="rounded-full bg-[#F4F7F6] px-4 py-2 text-slate-600">
                          Santé publique
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#F4F7F6]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-[40px] bg-white p-10 lg:p-14 border border-slate-100 shadow-sm">
              <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">
                À venir
              </div>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
                Des actions amenées à évoluer avec le territoire.
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-3xl">
                Cette page sera enrichie progressivement avec les campagnes, ateliers,
                temps d’information et projets de prévention portés par les
                professionnels de la MSP.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-semibold text-lg">MSP Aéromed</div>
            <div className="text-slate-500 mt-1 text-sm">
              Toulouse • Saint-Martin-du-Touch
            </div>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Secrétariat MSP</div>
            <div className="text-slate-500 mt-2 text-sm">
              Téléphone : 05 XX XX XX XX
            </div>
            <div className="text-slate-500 mt-1 text-sm">
              Adresse : à compléter
            </div>
          </div>
          <div className="text-sm text-slate-500 md:text-right">
            © 2026 Aéromed
            <br />
            Maison de Santé Pluriprofessionnelle
          </div>
        </div>
      </footer>
    </div>
  );
}