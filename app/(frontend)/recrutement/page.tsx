import Header from "../components/Header";
import Footer from "../components/Footer";

const jobs = [
  {
    title: "Secrétaire de Maison de Santé Pluriprofessionnelle",
    type: "Poste à pourvoir",
    contract: "CDI ou CDD à discuter",
    time: "Temps partiel ou temps plein selon profil",
    location: "Toulouse • Saint-Martin-du-Touch",
    description:
      "La MSP Aéromed recherche une secrétaire médicale souhaitant rejoindre une équipe pluriprofessionnelle dynamique, dans un environnement moderne, humain et coordonné.",
    missions: [
      "Accueil physique et téléphonique des patients",
      "Gestion des rendez-vous et des agendas professionnels",
      "Orientation des demandes selon le degré d’urgence",
      "Lien avec les professionnels de santé de la MSP",
      "Participation à la fluidité du parcours patient",
    ],
    profile: [
      "Expérience en secrétariat médical appréciée",
      "Aisance relationnelle et sens de l’accueil",
      "Organisation, fiabilité et discrétion",
      "Envie de travailler dans une équipe pluriprofessionnelle",
    ],
  },
];

export default function RecrutementPage() {
  return (
    <div className="min-h-screen bg-[#F8FAF9] text-slate-800 font-sans">
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E8F1EB] via-white to-[#E8EEF6]" />
          <div className="relative max-w-7xl mx-auto px-6 py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm text-slate-600 shadow-sm border border-white mb-8">
                Recrutement • MSP Aéromed
              </div>

              <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-slate-900">
                Rejoindre une MSP
                <span className="block bg-gradient-to-r from-[#88B69A] to-[#6A95BC] bg-clip-text text-transparent">
                  moderne et humaine.
                </span>
              </h1>

              <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-2xl">
                La Maison de Santé Aéromed accueille des professionnels motivés
                par le travail en équipe, la coordination des soins et une
                approche bienveillante du parcours patient.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">
                Offres en cours
              </div>
              <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
                Nos annonces
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                Retrouvez ici les postes actuellement ouverts au sein de la MSP.
              </p>
            </div>

            <div className="grid gap-8">
              {jobs.map((job) => (
                <article
                  key={job.title}
                  className="group bg-white rounded-[36px] p-8 lg:p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                    <div className="max-w-3xl">
                      <div className="flex flex-wrap gap-3 mb-5">
                        <span className="bg-[#E8F1EB] text-[#5D8F6C] px-4 py-2 rounded-full text-sm font-medium">
                          {job.type}
                        </span>
                        <span className="bg-[#E8EEF6] text-[#5D89AD] px-4 py-2 rounded-full text-sm font-medium">
                          {job.contract}
                        </span>
                      </div>

                      <h3 className="text-3xl font-semibold tracking-tight text-slate-900">
                        {job.title}
                      </h3>

                      <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
                        <span>{job.time}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </div>

                      <p className="mt-6 text-slate-600 leading-relaxed text-lg">
                        {job.description}
                      </p>
                    </div>

                    <a
                      href="mailto:contact@aeromed.fr?subject=Candidature%20-%20Secrétaire%20MSP"
                      className="shrink-0 inline-flex items-center justify-center bg-slate-900 text-white px-6 py-3 rounded-2xl hover:bg-slate-800 transition shadow-md"
                    >
                      Candidater
                    </a>
                  </div>

                  <div className="mt-10 grid md:grid-cols-2 gap-6">
                    <div className="bg-[#F8FAF9] rounded-[28px] p-6 border border-slate-100">
                      <h4 className="font-semibold text-slate-900 mb-4">
                        Missions principales
                      </h4>
                      <ul className="space-y-3 text-slate-600">
                        {job.missions.map((mission) => (
                          <li key={mission}>• {mission}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#F8FAF9] rounded-[28px] p-6 border border-slate-100">
                      <h4 className="font-semibold text-slate-900 mb-4">
                        Profil recherché
                      </h4>
                      <ul className="space-y-3 text-slate-600">
                        {job.profile.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}