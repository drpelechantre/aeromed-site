import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8FAF9] text-slate-800">
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E8F1EB] via-white to-[#E8EEF6]" />

          <div className="relative max-w-7xl mx-auto px-6 py-24">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">
                Contact
              </div>

              <h1 className="text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
                Contacter la{" "}
                <span className="bg-gradient-to-r from-[#88B69A] to-[#6A95BC] bg-clip-text text-transparent">
                  MSP Aéromed
                </span>
              </h1>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Pour toute demande administrative ou information générale, vous
                pouvez utiliser le formulaire ci-dessous ou contacter directement
                la maison de santé.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
            
            <div className="bg-white rounded-[36px] p-8 md:p-10 border border-slate-100 shadow-sm">
              <div className="mb-8 rounded-[28px] border border-red-100 bg-red-50 p-6">
                <div className="text-red-700 font-semibold text-lg">
                  Important
                </div>
                <p className="mt-2 text-red-700 leading-relaxed">
                  Ce formulaire ne permet pas de demander un avis médical, une
                  prise en charge médicale, une ordonnance, un certificat ou une
                  réponse urgente.
                </p>
                <p className="mt-2 text-sm text-red-600">
                  En cas d’urgence, contactez le 15 ou le 112.
                </p>
              </div>

              <form
                action="mailto:contact@msp-aeromed.fr"
                method="post"
                encType="text/plain"
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="Nom"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8FAF9] px-4 py-3 outline-none focus:border-[#88B69A] focus:ring-4 focus:ring-[#88B69A]/15 transition"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Adresse e-mail
                  </label>
                  <input
                    type="email"
                    name="Email"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8FAF9] px-4 py-3 outline-none focus:border-[#88B69A] focus:ring-4 focus:ring-[#88B69A]/15 transition"
                    placeholder="votre.email@exemple.fr"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Objet
                  </label>
                  <input
                    type="text"
                    name="Objet"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8FAF9] px-4 py-3 outline-none focus:border-[#88B69A] focus:ring-4 focus:ring-[#88B69A]/15 transition"
                    placeholder="Motif de votre message"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="Message"
                    rows={6}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8FAF9] px-4 py-3 outline-none focus:border-[#88B69A] focus:ring-4 focus:ring-[#88B69A]/15 transition resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto bg-slate-900 text-white px-7 py-3 rounded-2xl hover:bg-slate-800 transition shadow-md"
                >
                  Envoyer le message
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm hover:shadow-lg transition">
                <div className="text-3xl mb-4">📍</div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  Adresse
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  MSP Aéromed
                  <br />
                  2 rue Jean Séguéla
                  <br />
                  31300 Toulouse
                </p>
              </div>

              <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm hover:shadow-lg transition">
                <div className="text-3xl mb-4">☎️</div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  Téléphone
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  05 61 30 38 88
                </p>
                <p className="mt-3 text-sm text-slate-500">
                  Numéro provisoire à confirmer.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#E8F1EB] to-[#E8EEF6] rounded-[32px] p-8 border border-white shadow-inner">
                <div className="text-3xl mb-4">✉️</div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  Adresse e-mail
                </h2>
                <p className="mt-4 text-slate-600">
                  contact@msp-aeromed.fr
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}