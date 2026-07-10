export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
       <a
  href="/"
  className="flex items-center gap-3 hover:opacity-90 transition"
>   <img
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
        </div>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-slate-600">
          <a href="/" className="hover:text-slate-900 transition">
            Accueil
          </a>

          <a href="/equipe" className="hover:text-slate-900 transition">
            Équipe
          </a>

          <a href="/rendez-vous" className="hover:text-slate-900 transition">
            Rendez-vous
          </a>

          <a href="/projets" className="hover:text-slate-900 transition">
            Projets
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
  );
}