import Header from "../components/Header";
import Footer from "../components/Footer";
export default function PedagogiePage() {
  const studentTypes = [
    {
      title: "Internes de médecine générale",
      text: "Accueil d’internes en stage ambulatoire, avec une supervision progressive et adaptée à leur niveau d’autonomie.",
      icon: "🩺",
    },
    {
      title: "Étudiants en santé",
      text: "Découverte du soin primaire, de la relation patient et du travail coordonné en maison de santé.",
      icon: "🎓",
    },
    {
      title: "Étudiants paramédicaux",
      text: "Accueil possible d’étudiants issus des filières paramédicales, dans une logique pluriprofessionnelle.",
      icon: "🤝",
    },
  ];

  const commitments = [
    "Transmission clinique au plus près du terrain",
    "Apprentissage de l’autonomie progressive",
    "Découverte du travail coordonné en MSP",
    "Sensibilisation à la prévention et aux soins primaires",
  ];

  const partners = [
    "Département Universitaire de Médecine Générale de Toulouse",
    "Université Toulouse III – Paul Sabatier",
    "Instituts de formation paramédicale",
    "Professionnels de santé du territoire",
  ];

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-slate-800 font-sans">
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E8F1EB] via-white to-[#E8EEF6]" />
          <div className="absolute -top-24 -left-20 w-72 h-72 bg-[#B6D2BE]/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#88AFCF]/25 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-28">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm text-slate-600 shadow-sm border border-white mb-8">
                Formation • Transmission • Soins primaires
              </div>

              <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-slate-900">
                Former les professionnels
                <span className="block bg-gradient-to-r from-[#88B69A] to-[#6A95BC] bg-clip-text text-transparent">
                  de demain.
                </span>
              </h1>

              <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-2xl">
                La MSP Aéromed s’inscrit dans une dynamique de transmission et
                d’accompagnement des étudiants en santé, au contact d’une pratique
                clinique moderne, coordonnée et pluriprofessionnelle.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">
                Accueil des étudiants
              </div>
              <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
                Un environnement de stage exigeant et bienveillant.
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                Plusieurs professionnels de la maison de santé participent à la
                formation initiale, avec une attention portée à la qualité de
                l’encadrement, à la progression de l’étudiant et à la découverte du
                travail en équipe.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {studentTypes.map((item) => (
                <div
                  key={item.title}
                  className="group bg-[#F8FAF9] rounded-[32px] p-8 border border-slate-100 shadow-sm hover:bg-white hover:shadow-xl transition duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-2xl group-hover:scale-110 transition duration-300">
                    {item.icon}
                  </div>
                  <h3 className="mt-7 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white rounded-[36px] p-10 border border-slate-100 shadow-sm">
              <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">
                Maîtres de stage
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                Des professionnels engagés dans la pédagogie.
              </h2>
              <p className="mt-6 text-slate-600 leading-relaxed">
                La MSP compte des maîtres de stage universitaires, impliqués dans
                l’accompagnement des internes de médecine générale et la transmission
                d’une pratique de soins primaires rigoureuse, humaine et ancrée dans
                le territoire.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#E8F1EB] to-[#E8EEF6] rounded-[36px] p-10 border border-white shadow-inner">
              <div className="text-sm uppercase tracking-[0.25em] text-slate-500 mb-6">
                Nos engagements
              </div>
              <div className="space-y-4">
                {commitments.map((commitment) => (
                  <div
                    key={commitment}
                    className="bg-white/80 backdrop-blur rounded-2xl px-5 py-4 border border-white shadow-sm text-slate-700"
                  >
                    {commitment}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#F4F7F6]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">
                Partenaires
              </div>
              <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
                Une formation ouverte sur le territoire universitaire et soignant.
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                L’accueil des étudiants s’inscrit dans un réseau de formation, en
                lien avec les structures universitaires, les instituts de formation
                et les professionnels de santé partenaires.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="bg-white rounded-[28px] p-7 border border-slate-100 shadow-sm hover:shadow-lg transition"
                >
                  <div className="text-sm text-slate-400 mb-3">Partenaire</div>
                  <div className="font-semibold text-slate-900 leading-snug">
                    {partner}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto rounded-[40px] bg-gradient-to-r from-[#89B49A] to-[#6D96BD] p-12 lg:p-14 text-white shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative max-w-3xl">
              <div className="text-sm uppercase tracking-[0.25em] text-white/70 mb-4">
                Transmission
              </div>
              <h2 className="text-4xl font-semibold tracking-tight leading-tight">
                Apprendre la médecine de terrain, au sein d’une équipe coordonnée.
              </h2>
              <p className="mt-6 text-lg text-white/85 leading-relaxed">
                Les stages à la MSP permettent de découvrir une pratique clinique
                concrète, pluriprofessionnelle et tournée vers la qualité du parcours
                patient.
              </p>
              <a
                href="/contact/"
                className="inline-flex mt-10 bg-white text-slate-900 px-6 py-3 rounded-2xl font-medium hover:bg-slate-100 transition shadow-lg"
              >
                Contacter la MSP
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}