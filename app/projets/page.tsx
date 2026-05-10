export default function ProjetsPage() {
  const projects = [
    {
      title: "Soins coordonnés",
      text: "Développer des parcours partagés entre professionnels pour améliorer la continuité et la lisibilité des prises en charge.",
    },
    {
      title: "Prévention & santé publique",
      text: "Construire des actions de prévention adaptées aux besoins du quartier et de l’ouest toulousain.",
    },
    {
      title: "Recherche clinique",
      text: "Participer à une dynamique de réflexion, d’évaluation et d’amélioration continue des pratiques en soins primaires.",
	  link: "/prevention/",
	  linkLabel: "Voir les actions de prévention →",
    },
    {
      title: "Pédagogie",
      text: "Accueillir et accompagner les étudiants en santé dans un environnement pluriprofessionnel exigeant et bienveillant.",
      link: "/pedagogie/",
      linkLabel: "Découvrir notre démarche pédagogique →",
    },
  ];

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
              <div className="font-semibold text-lg tracking-tight">
                Aéromed
              </div>
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
            <a href="/projets/" className="text-slate-900 font-medium">
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

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F1EB] via-white to-[#E8EEF6]" />

        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm text-slate-600 shadow-sm border border-white mb-8">
              Projet de santé • MSP Aéromed
            </div>

            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-slate-900">
              Une MSP engagée
              <span className="block bg-gradient-to-r from-[#88B69A] to-[#6A95BC] bg-clip-text text-transparent">
                pour les soins de demain.
              </span>
            </h1>

            <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-2xl">
              La MSP Aéromed développe une approche coordonnée et moderne des
              soins primaires, en lien avec les besoins du territoire, la
              prévention, la pédagogie et l’innovation en santé.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">
              Nos axes de développement
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
              Une dynamique pluriprofessionnelle.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#DCEADF] to-[#DDE7F2] flex items-center justify-center text-2xl mb-6">
                  ✨
                </div>

                <h3 className="text-2xl font-semibold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {project.text}
                </p>

                {project.link && (
                  <a
                    href={project.link}
                    className="inline-flex mt-6 text-[#5D89AD] font-medium hover:translate-x-1 transition"
                  >
                    {project.linkLabel}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div className="bg-[#F8FAF9] rounded-[36px] p-10 border border-slate-100 shadow-sm">
            <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">
              Recherche
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Participer à l’évolution des soins primaires
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed">
              Aéromed souhaite s’inscrire dans une démarche d’évaluation,
              d’innovation et de recherche en soins ambulatoires, en lien avec
              les enjeux du territoire et les pratiques de terrain.
            </p>
          </div>

          <div className="bg-[#F8FAF9] rounded-[36px] p-10 border border-slate-100 shadow-sm">
            <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">
              Pédagogie
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Former les professionnels de demain
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed">
              La MSP accueille des étudiants en santé dans un environnement
              moderne favorisant la transmission, la coordination et
              l’apprentissage du travail pluriprofessionnel.
            </p>

            <a
              href="/pedagogie/"
              className="inline-flex mt-6 text-[#5D89AD] font-medium hover:translate-x-1 transition"
            >
              Accéder à la page pédagogie →
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto rounded-[40px] bg-gradient-to-r from-[#89B49A] to-[#6D96BD] p-14 text-white shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <div className="text-sm uppercase tracking-[0.25em] text-white/70 mb-4">
              Territoire
            </div>

            <h2 className="text-4xl font-semibold tracking-tight leading-tight">
              Une MSP connectée à son écosystème local.
            </h2>

            <p className="mt-6 text-lg text-white/85 leading-relaxed">
              Aéromed souhaite développer des collaborations avec les acteurs de
              santé du territoire, les structures hospitalières, la CPTS
              Toulouse Ouest et les partenaires de prévention.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-semibold text-lg">MSP Aéromed</div>
            <div className="text-slate-500 mt-1 text-sm">
              Toulouse • Saint-Martin-du-Touch
            </div>
          </div>

          <div>
            <div className="font-semibold text-slate-900">
              Projet pluriprofessionnel
            </div>

            <div className="text-slate-500 mt-2 text-sm">
              Coordination • Prévention • Recherche • Pédagogie
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