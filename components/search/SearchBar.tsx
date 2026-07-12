'use client'

import { useState } from 'react'

type SearchBarProps = {
  placeholder?: string
  onSearch: (value: string) => void
}

export default function SearchBar({
  placeholder = 'Rechercher...',
  onSearch,
}: SearchBarProps) {
  const [value, setValue] = useState('')


  function handleSubmit(
    event: React.FormEvent
  ) {
    event.preventDefault()

    onSearch(value)
  }


  return (
    <form
      onSubmit={handleSubmit}
      className="relative"
    >

      <div className="flex items-center rounded-3xl border border-slate-200 bg-white px-5 py-3 shadow-sm">

        <span className="mr-3 text-xl">
          🔎
        </span>


        <input
          value={value}
          onChange={(event) =>
            setValue(event.target.value)
          }
          placeholder={placeholder}
          className="w-full bg-transparent text-slate-700 outline-none placeholder:text-slate-400"
        />


        <button
          type="submit"
          className="ml-4 rounded-2xl bg-slate-900 px-4 py-2 text-sm text-white transition hover:bg-slate-800"
        >
          Rechercher
        </button>

      </div>

    </form>
  )
}