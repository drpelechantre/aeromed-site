'use client'

import { useState } from 'react'

type ContactFormProps = {
  title?: string
  description?: string
}

export default function ContactForm({
  title = 'Nous contacter',
  description,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    // Future connexion API / Payload
    setSubmitted(true)
  }


  if (submitted) {
    return (
      <div className="rounded-[32px] border border-emerald-100 bg-emerald-50 p-8 text-center text-emerald-900">
        <div className="text-3xl">
          ✅
        </div>

        <h3 className="mt-4 text-xl font-semibold">
          Message envoyé
        </h3>

        <p className="mt-3">
          Nous reviendrons vers vous dans les meilleurs délais.
        </p>
      </div>
    )
  }


  return (
    <div className="rounded-[36px] border border-slate-100 bg-white p-8 shadow-sm">

      <h2 className="text-3xl font-semibold text-slate-900">
        {title}
      </h2>


      {description && (
        <p className="mt-4 text-slate-600">
          {description}
        </p>
      )}


      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >

        <input
          type="text"
          placeholder="Nom"
          className="w-full rounded-2xl border border-slate-200 px-5 py-3 outline-none focus:border-slate-400"
        />


        <input
          type="email"
          placeholder="Adresse e-mail"
          className="w-full rounded-2xl border border-slate-200 px-5 py-3 outline-none focus:border-slate-400"
        />


        <select
          className="w-full rounded-2xl border border-slate-200 px-5 py-3 text-slate-600 outline-none focus:border-slate-400"
        >
          <option>
            Sujet
          </option>

          <option>
            Recrutement
          </option>

          <option>
            Partenariat
          </option>

          <option>
            Étudiant
          </option>

          <option>
            Autre
          </option>
        </select>


        <textarea
          placeholder="Votre message"
          rows={5}
          className="w-full rounded-2xl border border-slate-200 px-5 py-3 outline-none focus:border-slate-400"
        />


        <button
          type="submit"
          className="rounded-2xl bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-800"
        >
          Envoyer
        </button>

      </form>

    </div>
  )
}