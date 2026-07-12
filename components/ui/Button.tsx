import Link from 'next/link'
import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary' | 'ghost'
  external?: boolean
  className?: string
}

export default function Button({
  children,
  href,
  variant = 'primary',
  external = false,
  className = '',
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium transition duration-300'

  const variantClasses = {
    primary:
      'bg-slate-900 text-white shadow-md hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg',
    secondary:
      'border border-slate-200 bg-white text-slate-700 shadow-sm hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md',
    ghost:
      'text-[#5D89AD] hover:bg-white/70 hover:text-slate-900',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}