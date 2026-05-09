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
  ];

  const teamMembers = [
    {
      name: 'Dr Anne BOUCAULT',
      role: 'Médecine générale',
      gender: 'female',
    },
    {
      name: 'Mme Clémence CHAPUIS',
      role: 'Médecine générale',
      gender: 'female',
    },
    {
      name: 'Dr Simon MATHE',
      role: 'Médecine générale',
      gender: 'male',
    },
    {
      name: 'Dr Pierre-Etienne LECHANTRE',
      role: 'Médecine générale',
      gender: 'male',
    },
    {
      name: 'Dr Valérie MULLER',
      role: 'Médecine générale',
      gender: 'female',
    },
    {
      name: 'Dr Nathalie FAVRE',
      role: 'Gynécologie',
      gender: 'female',
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
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#A7C8AE] to-[#6D96BD] shadow-sm" />
            <div>
              <div className="font-semibold text-lg tracking-tight">Aéromed</div>
              <div className="text-xs text-slate-500 -mt-1">Maison de Santé Pluriprofessionnelle</div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-sm text-slate-600">
            <a href="#rdv" className="hover:text-slate-900 transition">Rendez-vous</a>
            <a href="#equipe" className="hover:text-slate-900 transition">Équipe</a>
            <a href="#projets" className="hover:text-slate-900 transition">Projets</a>
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

      <section id="rdv" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">Rendez-vous</div>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900">Choisir une spécialité</h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Retrouvez ici les liens vers les agendas Doctolib des différents professionnels de la Maison de Santé Aéromed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {specialties.map((specialty) => (
              <a
                key={specialty.name}
                href={specialty.doctolibUrl}
                target="_blank"
                rel="noreferrer"
                className="group bg-[#F8FAF9] rounded-[26px] p-6 border border-slate-100 hover:bg-white hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold text-slate-900">{specialty.name}</div>
                    <div className="mt-2 text-sm text-slate-500">Voir les disponibilités sur Doctolib</div>
                  </div>
                  <div className="shrink-0 rounded-xl bg-[#0596DE] px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
                    Doctolib
                  </div>
                </div>
                <div className="mt-5 text-sm font-medium text-[#5D89AD] group-hover:translate-x-1 transition">Accéder à l’agenda →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="equipe" className="py-24 bg-gradient-to-b from-white to-[#F4F7F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">
              Équipe pluridisciplinaire
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
              Une équipe coordonnée autour du patient
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-[30px] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#DCE8DF] to-[#DCE5EF] flex items-center justify-center shadow-inner text-3xl">
                    {member.gender === 'female' ? '👩‍⚕️' : '👨‍⚕️'}
                  </div>

                  <div>
                    <div className="text-xl font-semibold text-slate-900 leading-tight">
                      {member.name}
                    </div>
                    <div className="mt-2 text-sm text-[#5D89AD] font-medium">
                      {member.role}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 text-sm text-slate-500 leading-relaxed">
                  Exerce au sein de la MSP Aéromed dans une dynamique de soins coordonnés et de collaboration pluriprofessionnelle.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projets" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">Projet de santé</div>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 leading-tight">Une maison de santé tournée vers le territoire.</h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              La MSP Aéromed développe des projets pluriprofessionnels en lien avec les besoins des patients, les acteurs locaux et la CPTS Toulouse Ouest.
            </p>
            <a href="#" className="inline-flex mt-8 bg-white text-[#5D89AD] border border-slate-200 px-6 py-3 rounded-2xl hover:shadow-md transition">
              Découvrir la CPTS Toulouse Ouest →
            </a>
          </div>
          <div className="grid gap-5">
            {projects.map((project) => (
              <div key={project.title} className="bg-white rounded-[28px] p-7 border border-slate-100 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{project.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
          <div className="h-[420px] rounded-[36px] bg-gradient-to-br from-[#DDEAE0] to-[#DDE6F2] shadow-inner border border-white flex items-center justify-center text-slate-500 text-lg">
            Carte / Photo de la MSP
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
            <div className="text-slate-500 mt-1 text-sm">Adresse : à compléter</div>
          </div>
          <div className="text-sm text-slate-500 md:text-right">
            © 2026 Aéromed<br />Maison de Santé Pluriprofessionnelle
          </div>
        </div>
      </footer>
    </div>
  );
}
