"use client";

import { useState } from "react";

const reasons = [
  {
    label: "Problème médical général",
    icon: "🩺",
    description: "Fièvre, douleur, fatigue, suivi chronique, renouvellement...",
    specialists: ["Médecine générale"],
  },
  {
    label: "Santé de la femme",
    icon: "🌸",
    description: "Suivi gynécologique, contraception, frottis, douleurs pelviennes...",
    specialists: ["Gynécologie", "Médecine générale"],
  },
  {
    label: "Cœur / tension / essoufflement",
    icon: "❤️",
    description: "Hypertension, palpitations, douleurs thoraciques, suivi cardiologique...",
    specialists: ["Cardiologie", "Médecine générale"],
  },
  {
    label: "Vision / yeux",
    icon: "👁️",
    description: "Baisse de vision, contrôle, gêne oculaire...",
    specialists: ["Ophtalmologie"],
  },
  {
    label: "Dents / bouche",
    icon: "🦷",
    description: "Douleur dentaire, contrôle, soins dentaires...",
    specialists: ["Dentiste"],
  },
  {
    label: "Douleurs / rééducation",
    icon: "🏃",
    description: "Douleurs articulaires, musculaires, rééducation après blessure...",
    specialists: ["Kinésithérapie", "Médecine générale"],
  },
  {
    label: "Pieds / marche",
    icon: "🦶",
    description: "Douleurs du pied, semelles, trouble de la marche...",
    specialists: ["Podologie", "Médecine générale"],
  },
  {
    label: "Nutrition / poids",
    icon: "🥗",
    description: "Accompagnement alimentaire, diabète, surpoids, équilibre nutritionnel...",
    specialists: ["Diététique", "Médecine générale"],
  },
  {
    label: "Développement / motricité",
    icon: "🧩",
    description: "Troubles du développement, coordination, graphisme, motricité...",
    specialists: ["Psychomotricité", "Médecine générale"],
  },
  {
    label: "Sommeil / ronflement",
    icon: "😴",
    description: "Ronflement, fatigue, suspicion d’apnée du sommeil...",
    specialists: ["Médecine générale"],
  },
];

export default function ConsultationGuide() {
  const [selected, setSelected] = useState(reasons[0]);

  return (
    <section className="py-24 bg-[#F4F7F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">
            Orientation
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
            Qui consulter ?
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Sélectionnez un motif de consultation pour identifier les professionnels
            susceptibles de vous accompagner au sein de la MSP Aéromed.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason) => {
              const active = selected.label === reason.label;

              return (
                <button
                  key={reason.label}
                  onClick={() => setSelected(reason)}
                  className={`group text-left rounded-[26px] p-5 border transition duration-300 ${
                    active
                      ? "bg-white border-[#8DBCA0] shadow-xl scale-[1.02]"
                      : "bg-white/70 border-white hover:bg-white hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`text-2xl rounded-2xl w-12 h-12 flex items-center justify-center transition ${
                        active
                          ? "bg-[#E4F1E8]"
                          : "bg-slate-100 group-hover:bg-[#E4F1E8]"
                      }`}
                    >
                      {reason.icon}
                    </div>

                    <div>
                      <div className="font-semibold text-slate-900">
                        {reason.label}
                      </div>
                      <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="sticky top-28">
            <div className="relative overflow-hidden rounded-[36px] bg-white border border-slate-100 shadow-2xl p-8">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#A8CDB5]/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#8FAFD0]/30 rounded-full blur-3xl" />

              <div className="relative">
                <div className="text-5xl mb-5">{selected.icon}</div>

                <div className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-3">
                  Orientation proposée
                </div>

                <h3 className="text-2xl font-semibold text-slate-900">
                  {selected.label}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {selected.description}
                </p>

                <div className="mt-8 space-y-3">
                  {selected.specialists.map((specialist) => (
                    <div
                      key={specialist}
                      className="flex items-center justify-between gap-4 rounded-2xl bg-[#F8FAF9] border border-slate-100 px-5 py-4"
                    >
                      <div>
                        <div className="font-semibold text-slate-900">
                          {specialist}
                        </div>
                        <div className="text-sm text-slate-500">
                          Professionnel recommandé
                        </div>
                      </div>

                      <a
                        href="/rendez-vous"
                        className="shrink-0 rounded-xl bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800 transition"
                      >
                        RDV
                      </a>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-[#EEF5F2] border border-[#DDEBE4] p-4 text-sm text-slate-600 leading-relaxed">
                  En cas d’urgence ou de symptôme grave, contactez le 15 ou le 112.
                  Cette orientation ne remplace pas un avis médical.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}