const specialties = [
  {
    name: "Médecine générale",
    description: "Consultations de médecine générale et suivi global.",
    doctolibUrl:
      "https://www.doctolib.fr/cabinet-medical/colomiers/centre-medical-du-07",
  },
  {
    name: "Cardiologie",
    description: "Suivi cardiovasculaire et explorations spécialisées.",
    doctolibUrl: "#",
  },
  {
    name: "Ophtalmologie",
    description: "Consultations et suivi ophtalmologique.",
    doctolibUrl: "#",
  },
  {
    name: "Gynécologie",
    description: "Suivi gynécologique et santé de la femme.",
    doctolibUrl: "#",
  },
  {
    name: "Dentiste",
    description: "Soins dentaires et prévention bucco-dentaire.",
    doctolibUrl: "#",
  },
  {
    name: "Kinésithérapie",
    description: "Rééducation et prise en charge fonctionnelle.",
    doctolibUrl: "#",
  },
  {
    name: "Podologie",
    description: "Bilans et soins podologiques.",
    doctolibUrl: "#",
  },
  {
    name: "Diététique",
    description: "Accompagnement nutritionnel personnalisé.",
    doctolibUrl: "#",
  },
  {
    name: "Psychomotricité",
    description: "Évaluation et accompagnement psychomoteur.",
    doctolibUrl: "#",
  },
];

export default function RendezVousPage() {
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
            <a href="/rendez-vous" className="text-slate-900 font-medium">
              Rendez-vous
            </a>
            <a href="/equipe" className="hover:text-slate-900 transition">
              Équipe
            </a>
            <a href="/projets" className="hover:text-slate-900 transition">
              Projets
            </a>
            <a href="/recherche" className="hover:text-slate-900 transition">
              Recherche
            </a>
            <a href="/recrutement" className="hover:text-slate-900 transition">
              Recrutement
            </a>
            <a href="/contact" className="hover:text-slate-900 transition">
              Contact
            </a>
          </nav>

          <a
            href="/rendez-vous"
            className="bg-slate-900 text-white px-5 py-2.5 rounded-2xl text-sm hover:bg-slate-800 transition shadow-sm"
          >
            Prendre rendez-vous
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E8F1EB] via-white to-[#E8EEF6]" />

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-14">
              <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">
                Rendez-vous
              </div>

              <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
                Choisir une spécialité
              </h1>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Retrouvez les agendas Doctolib des différents professionnels de
                la Maison de Santé Aéromed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {specialties.map((specialty) => (
                <a
                  key={specialty.name}
                  href={specialty.doctolibUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group bg-white/70 backdrop-blur-xl rounded-[30px] p-7 border border-white shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">
                        {specialty.name}
                      </h2>

                      <p className="mt-3 text-sm leading-relaxed text-slate-500">
                        {specialty.description}
                      </p>
                    </div>

                    <div className="shrink-0 rounded-xl bg-[#0596DE] px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
                      Doctolib
                    </div>
                  </div>

                  <div className="mt-8 text-sm font-medium text-[#5D89AD] group-hover:translate-x-1 transition">
                    Accéder à l’agenda →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}