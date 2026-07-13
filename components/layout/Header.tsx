import Link from 'next/link'

type NavigationItem = {
  id?: string | null
  label: string
  url: string
  openInNewTab?: boolean | null
}

type SiteSettings = {
  siteName?: string | null
  subtitle?: string | null
  navigationItems?: NavigationItem[] | null
  ctaLabel?: string | null
  ctaUrl?: string | null
}

type HeaderProps = {
  settings?: SiteSettings | null
}

const defaultNavigationItems: NavigationItem[] = [
  { label: 'Rendez-vous', url: '/rendez-vous' },
  { label: 'Équipe', url: '/equipe' },
  { label: 'Projets', url: '/projets' },
  { label: 'Recherche', url: '/recherche' },
  { label: 'Recrutement', url: '/recrutement' },
  { label: 'Contact', url: '/contact' },
]

export default function Header({ settings }: HeaderProps) {
  const siteName = settings?.siteName || 'Aéromed'
  const subtitle =
    settings?.subtitle || 'Maison de Santé Pluriprofessionnelle'

  const navigationItems =
    settings?.navigationItems?.length
      ? settings.navigationItems
      : defaultNavigationItems

  const ctaLabel = settings?.ctaLabel || 'Prendre rendez-vous'
  const ctaUrl = settings?.ctaUrl || '/rendez-vous'

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-4">
         <img
  src="/logo-aeromed.png"
  alt="Logo Aéromed"
  className="w-20 h-20 object-contain transition-transform duration-300 hover:scale-105"
/>
          <div>
            <div className="text-lg font-semibold tracking-tight text-slate-900">
              {siteName}
            </div>

            <div className="-mt-1 text-sm text-slate-500">
              {subtitle}
            </div>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-7 text-sm text-slate-600 lg:flex"
          aria-label="Navigation principale"
        >
          {navigationItems.map((item) => {
            const isExternal =
              item.url.startsWith('http://') ||
              item.url.startsWith('https://')

            if (isExternal || item.openInNewTab) {
              return (
                <a
                  key={item.id || `${item.label}-${item.url}`}
                  href={item.url}
                  target={item.openInNewTab ? '_blank' : undefined}
                  rel={item.openInNewTab ? 'noreferrer' : undefined}
                  className="transition hover:text-slate-900"
                >
                  {item.label}
                </a>
              )
            }

            return (
              <Link
                key={item.id || `${item.label}-${item.url}`}
                href={item.url}
                className="transition hover:text-slate-900"
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <Link
          href={ctaUrl}
          className="rounded-2xl bg-slate-900 px-5 py-2.5 text-sm text-white shadow-sm transition hover:bg-slate-800"
        >
          {ctaLabel}
        </Link>
      </div>
    </header>
  )
}