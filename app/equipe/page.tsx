import Header from "../components/Header";
import Footer from "../components/Footer";
import { teamMembers } from "../data/teamMembers";
export default function EquipePage() {
  return (
    <main className="min-h-screen bg-[#F8FAF9] text-slate-800">
      <Header />

      <section className="bg-gradient-to-br from-[#E8F1EB] via-white to-[#E8EEF6] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">
              Équipe
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-slate-900">
              Une équipe coordonnée autour du patient
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              La Maison de Santé Aéromed réunit des professionnels de santé aux
              expertises complémentaires, dans une dynamique de collaboration,
              de coordination et de qualité des soins.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <a
                key={member.name}
                href={`/equipe/${member.slug}`}
                className="block group bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition duration-300 overflow-hidden"
              >
                <div className="flex items-start gap-6">
                  <div className="relative w-28 h-28 shrink-0 rounded-[32px] bg-gradient-to-br from-[#DCE8DF] to-[#DCE5EF] flex items-center justify-center shadow-inner overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-[32px] transition duration-700 ease-out group-hover:scale-125 group-hover:rotate-1"
                      />
                    ) : (
                      <div className="text-6xl opacity-90">
                        {member.gender === "female" ? "👩" : "👨"}
                      </div>
                    )}

                    <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-lg flex items-center justify-center text-2xl">
                      {member.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="text-2xl font-semibold text-slate-900 leading-tight">
                      {member.name}
                    </div>

                    <div className="mt-3 inline-flex items-center rounded-2xl bg-[#EDF4EF] px-4 py-2 text-sm font-medium text-[#5C8B70]">
                      {member.role}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 text-sm text-slate-500 leading-relaxed">
                  Exerce au sein de la MSP Aéromed dans une dynamique de soins
                  coordonnés et de collaboration pluriprofessionnelle.
                </div>

                <div className="mt-5 text-sm font-medium text-[#5D89AD] group-hover:translate-x-1 transition">
                  Voir le profil →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
	  <Footer />
    </main>
  );
}