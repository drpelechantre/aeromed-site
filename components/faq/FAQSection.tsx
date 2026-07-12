'use client'

import { useState } from 'react'
import SectionTitle from '@/components/sections/SectionTitle'

type FAQItem = {
  question: string
  answer: string
}

type FAQSectionProps = {
  items: FAQItem[]
  eyebrow?: string
  title?: string
  description?: string
}

export default function FAQSection({
  items,
  eyebrow = 'Questions fréquentes',
  title = 'Tout savoir sur la MSP',
  description = 'Retrouvez les réponses aux questions les plus fréquentes.',
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div className="mt-10 space-y-4">
        {items.map((item, index) => {
          const isOpen = openIndex === index

          return (
            <div
              key={item.question}
              className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {item.question}
                </span>

                <span className="text-2xl text-slate-400">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen && (
                <div className="px-7 pb-7 text-slate-600 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}