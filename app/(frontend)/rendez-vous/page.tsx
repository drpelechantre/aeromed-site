import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RendezVousPage() {
  const specialties = [
    {
      name: "Médecine générale",
      description: "Suivi médical global, prévention et soins courants.",
      doctolibUrl:
        "https://www.doctolib.fr/cabinet-medical/colomiers/centre-medical-du-07",
    },
    {
      name: "Cardiologie",
      description: "Consultations cardiovasculaires et suivi cardiaque.",
      doctolibUrl: "#",
    },
    {
      name: "Ophtalmologie",
      description: "Consultations de la vision et pathologies oculaires.",
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
      description: "Rééducation et prise en charge locomotrice.",
      doctolibUrl: "#",
    },
    {
      name: "Podologie",
      description: "Soins du pied et troubles de la posture.",
      doctolibUrl: "#",
    },
    {
      name: "Diététique",
      description: "Accompagnement nutritionnel personnalisé.",
      doctolibUrl: "#",
    },
    {
      name: "Psychomotricité",
      description: "Prise en charge psychocorporelle.",
      doctolibUrl: "#",
    },
    {
      name: "Prothésiste dentaire",
      description: "Fabrication et suivi des dispositifs dentaires.",
      doctolibUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-slate-800">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FAF9] via-white to-[#F3F7F6]">
        <div className="absolute top-16 right-10 w-96 h-96 rounded-full bg-[#88B69A]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#6A95BC]/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm text-slate-600 shadow-sm border border-white mb-8">
              Prise de rendez-vous • MSP Aéromed
            </div>

            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-slate-900">
              Accéder simplement
              <span className="block bg-gradient-to-r from-[#88B69A] to-[#6A95BC] bg-clip-text text-transparent">
                aux consultations.
              </span>
            </h1>

            <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-2xl">
              Retrouvez les spécialités présentes au sein de la Maison de Santé
              Aéromed et accédez aux agendas de prise de rendez-vous.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-white" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">
              Rendez-vous
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
              Choisir une spécialité
            </h2>

            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Chaque carte vous oriente vers l’agenda correspondant. Un accès
              simple, lisible et centralisé pour faciliter votre parcours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
            {specialties.map((specialty) => (
              <a
                key={specialty.name}
                href={specialty.doctolibUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative rounded-[30px] bg-white/90 backdrop-blur-xl border border-slate-100 p-7 shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_22px_60px_rgba(15,23,42,0.10)] overflow-hidden"
              >
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#88B69A]/40 to-transparent" />

               <div className="absolute -bottom-2 -right-2 opacity-[0.17] group-hover:opacity-[0.12] transition duration-500">
  <img
    src="/logo-aeromed.jpg"
    alt=""
    className="w-28 h-28 object-contain grayscale blur-[0.2px] transition duration-500 group-hover:scale-105"
  />
</div>

                <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-[#88B69A]/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                      {specialty.name}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-500 max-w-[90%]">
                      {specialty.description}
                    </p>
                  </div>

                  <div className="shrink-0 rounded-full bg-[#0596DE]/10 px-3 py-1.5 text-xs font-semibold text-[#057DB8] border border-[#0596DE]/10">
                    Doctolib
                  </div>
                </div>

                <div className="relative mt-8 flex items-center justify-between">
                  <div className="h-px flex-1 bg-slate-100" />

                  <div className="ml-4 text-sm font-medium text-[#5D89AD] transition-transform duration-300 group-hover:translate-x-1">
                    Accéder →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}