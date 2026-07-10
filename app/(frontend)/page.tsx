import ConsultationGuide from "./components/ConsultationGuide";
import Footer from "./components/Footer";
export default function Page() {
  const specialties = [
    {
      name: 'Médecine générale',
      doctolibUrl:
        'https://www.doctolib.fr/cabinet-medical/colomiers/centre-medical-du-07',
    },
    {
      name: 'Cardiologie',
      doctolibUrl: '#',
    },
    {
      name: 'Ophtalmologie',
      doctolibUrl: '#',
    },
    {
      name: 'Gynécologie',
      doctolibUrl: '#',
    },
    {
      name: 'Dentiste',
      doctolibUrl: '#',
    },
	 {
      name: 'Prothésiste dentaire',
      doctolibUrl: '#',
    },
    {
      name: 'Kinésithérapie',
      doctolibUrl: '#',
    },
    {
      name: 'Podologie',
      doctolibUrl: '#',
    },
    {
      name: 'Diététique',
      doctolibUrl: '#',
    },
    {
      name: 'Psychomotricité',
      doctolibUrl: '#',
    },
	  {
      name: 'Médecine du sport',
      doctolibUrl: '#',
    },
  ];



  const projects = [
    {
      title: 'Soins coordonnés',
      text: 'Développer des parcours partagés entre professionnels pour améliorer la continuité et la lisibilité des prises en charge.',
    },
    {
      title: 'Prévention & santé publique',
      text: 'Construire des actions de prévention adaptées aux besoins du quartier et de l’ouest toulousain.',
    },
    {
      title: 'Recherche clinique',
      text: 'Participer à une dynamique de réflexion, d’évaluation et d’amélioration continue des pratiques en soins primaires.',
    },
    {
      title: 'Pédagogie',
      text: 'Accueillir et accompagner les étudiants en santé dans un environnement pluriprofessionnel exigeant et bienveillant.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-slate-800 font-sans">


      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F1EB] via-white to-[#E8EEF6]" />
	<div className="absolute top-[-120px] right-[-120px] w-[520px] h-[520px] rounded-full bg-[#88B69A]/30 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm text-slate-600 shadow-sm border border-white mb-8">
              Toulouse • Saint-Martin-du-Touch
            </div>
            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-slate-900">
              Une médecine moderne,
              <span className="block bg-gradient-to-r from-[#88B69A] to-[#6A95BC] bg-clip-text text-transparent">
                coordonnée et humaine.
              </span>
            </h1>
            <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-xl">
              Aéromed réunit des professionnels de santé complémentaires dans un environnement moderne, pensé pour offrir un parcours de soin fluide, accessible et centré sur le patient.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#rdv" className="bg-slate-900 text-white px-6 py-3 rounded-2xl hover:bg-slate-800 transition shadow-md">Accéder aux rendez-vous</a>
              <a href="#projets" className="bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-2xl hover:bg-slate-50 transition shadow-sm">Découvrir la MSP</a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#B6D2BE]/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#88AFCF]/30 rounded-full blur-3xl" />
           <div className="relative bg-white/70 backdrop-blur-xl border border-white shadow-2xl rounded-[36px] p-4">
 <div className="relative bg-white/70 backdrop-blur-xl border border-white shadow-2xl rounded-[36px] p-4">
  
  <div className="grid grid-cols-2 gap-4">
    
    <a
      href="/accueil.jpg"
      target="_blank"
      className="col-span-2 overflow-hidden rounded-[28px] h-72 group"
    >
      <img
        src="/accueil.jpg"
        alt="Maison de Santé Aéromed"
        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
      />
    </a>

    <a
      href="/salledattente.jpg"
      target="_blank"
      className="overflow-hidden rounded-[24px] h-40 group"
    >
      <img
        src="/salledattente.jpg"
        alt="Salle d’attente"
        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
      />
    </a>

    <a
      href="/entree.png"
      target="_blank"
      className="overflow-hidden rounded-[24px] h-40 group"
    >
      <img
        src="/entree.png"
        alt="Cabinet médical"
        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
      />
    </a>

  </div>

  <div className="mt-4 bg-white/85 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-sm border border-white/70">
    <div className="text-sm font-semibold text-slate-900">
      Un lieu de soins moderne et accueillant
    </div>

    <div className="text-xs text-slate-500 mt-1">
      Pensé pour le confort des patients et le travail coordonné.
    </div>
  </div>

</div>
</div>
          </div>
        </div>
      </section>
	  
	  
	  <section className="py-24 bg-white">
	  
  <div className="max-w-7xl mx-auto px-6">
    <div className="max-w-3xl mb-12">
      <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">
        Spécialités
      </div>

      <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
        Une équipe pluriprofessionnelle réunie en un même lieu
      </h2>

      <p className="mt-5 text-lg text-slate-600 leading-relaxed">
        La MSP Aéromed regroupe plusieurs disciplines complémentaires pour faciliter
        l’orientation, le suivi et la coordination des soins.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {[
        { icon: "🩺", name: "Médecine générale", text: "Suivi médical, prévention, soins courants et coordination du parcours." },
        { icon: "🌸", name: "Gynécologie", text: "Suivi gynécologique, prévention, contraception et accompagnement." },
        { icon: "❤️", name: "Cardiologie", text: "Évaluation, suivi et prévention des pathologies cardiovasculaires." },
        { icon: "👁️", name: "Ophtalmologie", text: "Bilan visuel, dépistage et suivi des pathologies oculaires." },
        { icon: "🦷", name: "Dentiste", text: "Soins dentaires, prévention bucco-dentaire et accompagnement du sourire." },
		{ icon: "😁", name: "Prothésiste dentaire", text: "Conception et réalisation de dispositifs prothétiques sur mesure en lien avec les soins dentaires.",},
        { icon: "🦵", name: "Kinésithérapie", text: "Rééducation, récupération fonctionnelle et accompagnement du mouvement." },
        { icon: "🦶", name: "Podologie", text: "Soins du pied, bilans podologiques et prévention des troubles d’appui." },
        { icon: "🥗", name: "Diététique", text: "Accompagnement nutritionnel personnalisé et conseils alimentaires." },
        { icon: "🧩", name: "Psychomotricité", text: "Accompagnement du développement, du mouvement et des fonctions psychocorporelles." },
      ].map((specialty) => (
        <div
          key={specialty.name}
          className="group relative overflow-hidden rounded-[30px] bg-[#F8FAF9] border border-slate-100 p-7 shadow-sm hover:bg-white hover:shadow-xl transition duration-300"
        >
          <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-br from-[#B6D2BE]/40 to-[#88AFCF]/30 blur-2xl group-hover:scale-125 transition duration-500" />

          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition duration-300">
              {specialty.icon}
            </div>

            <h3 className="text-xl font-semibold text-slate-900">
              {specialty.name}
            </h3>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {specialty.text}
            </p>


          </div>
        </div>
      ))}
    </div>
  </div>
</section>
	  
	  <ConsultationGuide />

      <section id="recherche" className="py-24 bg-[#F4F7F6]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-[36px] p-10 border border-slate-100 shadow-sm">
            <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">Recherche</div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Participer à l’évolution des soins primaires</h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              Aéromed souhaite s’inscrire dans une démarche d’évaluation, d’innovation et de recherche en soins ambulatoires, en lien avec les enjeux du territoire.
            </p>
          </div>
          <div className="bg-white rounded-[36px] p-10 border border-slate-100 shadow-sm">
            <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">Pédagogie</div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Former les professionnels de demain</h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              La maison de santé accueille des étudiants en santé dans un cadre pluridisciplinaire, propice à la transmission, à l’autonomie progressive et à la découverte du travail coordonné.
            </p>
          </div>
        </div>
      </section>

      <section id="acces" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">Accès</div>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 leading-tight">Située au cœur de Saint-Martin-du-Touch.</h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              La MSP Aéromed accueille les patients dans un environnement neuf, moderne et facilement accessible depuis Toulouse et l’ouest toulousain.
            </p>
            <div className="mt-8 space-y-4 text-slate-700">
              <div>• Accès PMR</div>
              <div>• Parking à proximité</div>
              <div>• Prise de rendez-vous en ligne</div>
              <div>• Coordination interprofessionnelle</div>
            </div>
          </div>
          <div className="h-[420px] rounded-[36px] overflow-hidden shadow-xl border border-white bg-white">
  <iframe
    title="Carte MSP Aéromed"
    src="https://www.google.com/maps?q=2%20rue%20Jean%20S%C3%A9gu%C3%A9la%2031300%20Toulouse&output=embed"
    className="w-full h-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
        </div>
      </section>

      <section id="recrutement" className="py-24 px-6">
        <div className="max-w-6xl mx-auto rounded-[40px] bg-gradient-to-r from-[#89B49A] to-[#6D96BD] p-14 text-white shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-3xl">
            <div className="text-sm uppercase tracking-[0.25em] text-white/70 mb-4">Recrutement</div>
            <h2 className="text-4xl font-semibold tracking-tight leading-tight">Rejoindre une MSP moderne, dynamique et pluriprofessionnelle.</h2>
            <p className="mt-6 text-lg text-white/85 leading-relaxed">
              Aéromed accueille les professionnels de santé souhaitant s’inscrire dans un projet collectif exigeant, humain et tourné vers l’avenir des soins primaires.
            </p>
            <a href="#contact" className="inline-flex mt-10 bg-white text-slate-900 px-6 py-3 rounded-2xl font-medium hover:bg-slate-100 transition shadow-lg">
              Nous contacter
            </a>
          </div>
        </div>
      </section>

     <Footer />
    </div>
  );
}
