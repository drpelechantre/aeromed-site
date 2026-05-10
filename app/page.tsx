import ConsultationGuide from "./components/ConsultationGuide";
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
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
  src="/logo-aeromed.jpg"
  alt="Logo Aéromed"
  className="w-12 h-12 object-contain"
/>
            <div>
              <div className="font-semibold text-lg tracking-tight">Aéromed</div>
              <div className="text-xs text-slate-500 -mt-1">Maison de Santé Pluriprofessionnelle</div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-sm text-slate-600">
            <a href="/rendez-vous/" className="hover:text-slate-900 transition">Rendez-vous</a>
            <a href="/equipe/" className="hover:text-slate-900 transition">Équipe</a>
            <a href="/projets/" className="hover:text-slate-900 transition">Projets</a>
            <a href="#recherche" className="hover:text-slate-900 transition">Recherche</a>
            <a href="#recrutement" className="hover:text-slate-900 transition">Recrutement</a>
            <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
          </nav>

          <a href="#rdv" className="bg-slate-900 text-white px-5 py-2.5 rounded-2xl text-sm hover:bg-slate-800 transition shadow-sm">
            Prendre rendez-vous
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F1EB] via-white to-[#E8EEF6]" />
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
            <div className="relative bg-white/70 backdrop-blur-xl border border-white shadow-2xl rounded-[36px] p-8">
              <div className="grid grid-cols-2 gap-4">
                {specialties.slice(0, 8).map((item) => (
                  <div key={item.name} className="bg-white rounded-2xl px-4 py-5 shadow-sm border border-slate-100 text-sm font-medium text-slate-700">
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
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

      <footer id="contact" className="border-t border-slate-100 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-semibold text-lg">MSP Aéromed</div>
            <div className="text-slate-500 mt-1 text-sm">Toulouse • Saint-Martin-du-Touch</div>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Secrétariat MSP</div>
            <div className="text-slate-500 mt-2 text-sm">Téléphone : 05 XX XX XX XX</div>
            <div className="text-slate-500 mt-1 text-sm">Adresse : 2 rue Jean Séguéla, 31300 Toulouse</div>
          </div>
          <div className="text-sm text-slate-500 md:text-right">
            © 2026 Aéromed<br />Maison de Santé Pluriprofessionnelle
          </div>
        </div>
      </footer>
    </div>
  );
}
