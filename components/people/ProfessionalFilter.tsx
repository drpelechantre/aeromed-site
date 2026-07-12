'use client'

type FilterOption = {
  label: string
  value: string
}

type ProfessionalFilterProps = {
  options: FilterOption[]
  value: string
  onChange: (value: string) => void
}

export default function ProfessionalFilter({
  options,
  value,
  onChange,
}: ProfessionalFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => {
        const active = value === option.value

        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`
              rounded-full px-5 py-2.5 text-sm font-medium transition
              ${
                active
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }
            `}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}