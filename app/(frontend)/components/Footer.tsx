export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-100 bg-[#F8FAF9]">
      <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-[#88B69A]/15 blur-3xl" />
      <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-[#6A95BC]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-14">
        <div className="rounded-[36px] bg-white/75 backdrop-blur-xl border border-white shadow-sm px-8 py-10">
          <div className="grid gap-10 md:grid-cols-4">
            
            <div className="md:col-span-2">
              <div className="flex items-center gap-4">
                <img
                  src="/logo-aeromed.jpg"
                  alt="Logo Aéromed"
                  className="h-14 w-14 object-contain rounded-2xl"
                />

                <div>
                  <div className="text-xl font-semibold tracking-tight text-slate-900">
                    MSP Aéromed
                  </div>
                  <div className="mt-1 text-sm text-slate-500">
                    Maison de Santé Pluriprofessionnelle
                  </div>
                </div>
              </div>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-500">
                Une maison de santé moderne, coordonnée et humaine au cœur de
                Saint-Martin-du-Touch, à Toulouse.
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">
                Navigation
              </div>

              <div className="mt-4 space-y-3 text-sm text-slate-500">
                <a href="/" className="block hover:text-[#5D89AD] transition">
                  Accueil
                </a>
                <a href="/equipe" className="block hover:text-[#5D89AD] transition">
                  Équipe
                </a>
                <a href="/rendez-vous" className="block hover:text-[#5D89AD] transition">
                  Rendez-vous
                </a>
                <a href="/contact" className="block hover:text-[#5D89AD] transition">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">
                Contact
              </div>

              <div className="mt-4 space-y-3 text-sm text-slate-500">
                <div>2 rue Jean Séguéla</div>
                <div>31300 Toulouse</div>
                <div>05 61 30 38 88</div>
                <a
                  href="mailto:contact@msp-aeromed.fr"
                  className="block hover:text-[#5D89AD] transition"
                >
                  contact@msp-aeromed.fr
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-slate-100 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
            <div>
              © 2026 Aéromed — Maison de Santé Pluriprofessionnelle
            </div>

            <div className="flex gap-4">
              <a href="/mentions-legales" className="hover:text-slate-600 transition">
                Mentions légales
              </a>
              <a href="/confidentialite" className="hover:text-slate-600 transition">
                Confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}