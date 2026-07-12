import Link from 'next/link'

type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({
  items,
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Fil d’Ariane"
      className="text-sm text-slate-500"
    >
      <ol className="flex flex-wrap items-center gap-2">

        <li>
          <Link
            href="/"
            className="transition hover:text-slate-900"
          >
            Accueil
          </Link>
        </li>

        {items.map((item, index) => (
          <li
            key={`${item.label}-${index}`}
            className="flex items-center gap-2"
          >

            <span className="text-slate-300">
              /
            </span>

            {item.href ? (
              <Link
                href={item.href}
                className="transition hover:text-slate-900"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-700">
                {item.label}
              </span>
            )}

          </li>
        ))}

      </ol>
    </nav>
  )
}