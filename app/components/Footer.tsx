export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        <div>
          <div className="font-semibold text-lg">
            MSP Aéromed
          </div>

          <div className="text-slate-500 mt-1 text-sm">
            Toulouse • Saint-Martin-du-Touch
          </div>
        </div>

        <div>
          <div className="font-semibold text-slate-900">
            Secrétariat MSP
          </div>

          <div className="text-slate-500 mt-2 text-sm">
            Téléphone : 05 XX XX XX XX
          </div>

          <div className="text-slate-500 mt-1 text-sm">
            2 rue Jean Séguéla — Toulouse
          </div>
        </div>

        <div className="text-sm text-slate-500 md:text-right">
          © 2026 Aéromed
          <br />
          Maison de Santé Pluriprofessionnelle
        </div>
      </div>
    </footer>
  );
}