import type { ReactNode } from 'react'

type PageSectionProps = {
  children: ReactNode
  className?: string
  id?: string
}

export default function PageSection({
  children,
  className = '',
  id,
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={`py-20 sm:py-24 ${className}`}
    >
      {children}
    </section>
  )
}