import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({
  children,
  className = '',
  hover = false,
}: CardProps) {
  return (
    <div
      className={[
        'rounded-[28px] border border-slate-100 bg-white p-7 shadow-sm',
        hover
          ? 'transition duration-300 hover:-translate-y-1 hover:shadow-lg'
          : '',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}