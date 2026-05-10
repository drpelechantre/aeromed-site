import { teamMembers } from "../../data/teamMembers";

export default async function MemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const member = teamMembers.find((item) => item.slug === slug);

  if (!member) {
    return (
      <main className="min-h-screen bg-[#F8FAF9] flex items-center justify-center">
        <div className="text-slate-600">Professionnel non trouvé.</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FAF9] text-slate-800">
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
              <div className="text-xs text-slate-500 -mt-1">
                Maison de Santé Pluriprofessionnelle
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-sm text-slate-600">
            <a href="/rendez-vous" className="hover:text-slate-900 transition">Rendez-vous</a>
            <a href="/equipe" className="hover:text-slate-900 transition">Équipe</a>
            <a href="/projets" className="hover:text-slate-900 transition">Projets</a>
            <a href="/recherche" className="hover:text-slate-900 transition">Recherche</a>
            <a href="/recrutement" className="hover:text-slate-900 transition">Recrutement</a>
            <a href="/contact" className="hover:text-slate-900 transition">Contact</a>
          </nav>

          <a
            href="/rendez-vous"
            className="bg-slate-900 text-white px-5 py-2.5 rounded-2xl text-sm hover:bg-slate-800 transition shadow-sm"
          >
            Prendre rendez-vous
          </a>
        </div>
      </header>

      <section className="px-6 py-24 bg-gradient-to-br from-[#E8F1EB] via-white to-[#E8EEF6]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[320px_1fr] gap-12 items-start">
          <div className="bg-white/80 backdrop-blur rounded-[36px] p-8 border border-white shadow-xl">
            <div className="relative w-48 h-48 mx-auto rounded-[36px] bg-gradient-to-br from-[#DCE8DF] to-[#DCE5EF] flex items-center justify-center overflow-hidden shadow-inner">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-7xl">
                  {member.gender === "female" ? "👩" : "👨"}
                </div>
              )}
            </div>

            <div className="mt-6 text-center">
              <div className="text-3xl mb-3">{member.icon}</div>
              <h1 className="text-2xl font-semibold text-slate-900">
                {member.name}
              </h1>

              <div className="mt-3 inline-flex rounded-2xl bg-[#EDF4EF] px-4 py-2 text-sm font-medium text-[#5C8B70]">
                {member.role}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[36px] p-10 border border-slate-100 shadow-sm">
            <a href="/equipe" className="text-[#5D89AD] font-medium">
              ← Retour à l’équipe
            </a>

            <div className="mt-10">
              <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">
                Profil
              </div>

              <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
                Parcours et activité
              </h2>

           <p className="mt-6 text-lg text-slate-600 leading-relaxed">
  {member.description}
</p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="rounded-[28px] bg-[#F8FAF9] p-6 border border-slate-100">
                <h3 className="text-lg font-semibold text-slate-900">
                 Parcours
                </h3>
               <ul className="mt-4 space-y-3 text-slate-600">
  {member.parcours?.map((item) => (
    <li key={item}>• {item}</li>
  ))}
</ul>
              </div>

              <div className="rounded-[28px] bg-[#F8FAF9] p-6 border border-slate-100">
                <h3 className="text-lg font-semibold text-slate-900">
                  Maison de santé
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Participation à un exercice coordonné au sein d’une équipe
                  pluriprofessionnelle.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-100">
              <a
                href="/rendez-vous"
                className="inline-flex bg-slate-900 text-white px-6 py-3 rounded-2xl hover:bg-slate-800 transition shadow-md"
              >
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}