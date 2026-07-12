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
  phone?: string | null
  email?: string | null
  address?: string | null
  city?: string | null
  footerText?: string | null
  copyright?: string | null
}

type FooterProps = {
  settings?: SiteSettings | null
}

const defaultNavigationItems: NavigationItem[] = [
  { label: 'Accueil', url: '/' },
  { label: 'Équipe', url: '/equipe' },
  { label: 'Rendez-vous', url: '/rendez-vous' },
  { label: 'Contact', url: '/contact' },
]

export default function Footer({ settings }: FooterProps) {
  const siteName = settings?.siteName || 'MSP Aéromed'

  const subtitle =
    settings?.subtitle || 'Maison de Santé Pluriprofessionnelle'

  const footerText =
    settings?.footerText ||
    'Une maison de santé moderne, coordonnée et humaine au cœur de Saint-Martin-du-Touch, à Toulouse.'

  const copyright =
    settings?.copyright ||
    `© ${new Date().getFullYear()} Aéromed — Maison de Santé Pluriprofessionnelle`

  const navigationItems =
    settings?.navigationItems?.length
      ? settings.navigationItems
      : defaultNavigationItems

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#F8FAF9] px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="absolute -left-20 top-1/3 h-56 w-56 rounded-full bg-[#B6D2BE]/20 blur-3xl" />
      <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#88AFCF]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl rounded-[36px] border border-slate-200/70 bg-white/90 px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.7fr_0.9fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <img
                src="/logo-aeromed.jpg"
                alt={`Logo ${siteName}`}
                className="h-14 w-14 object-contain"
              />

              <div>
                <div className="text-xl font-semibold tracking-tight text-slate-900">
                  {siteName}
                </div>

                <div className="mt-1 text-sm text-slate-500">
                  {subtitle}
                </div>
              </div>
            </Link>

            <p className="mt-7 max-w-lg text-sm leading-7 text-slate-500">
              {footerText}
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">
              Navigation
            </div>

            <nav
              className="mt-5 flex flex-col items-start gap-3"
              aria-label="Navigation du pied de page"
            >
              {navigationItems.slice(0, 6).map((item) => {
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
                      className="text-sm text-slate-500 transition hover:text-slate-900"
                    >
                      {item.label}
                    </a>
                  )
                }

                return (
                  <Link
                    key={item.id || `${item.label}-${item.url}`}
                    href={item.url}
                    className="text-sm text-slate-500 transition hover:text-slate-900"
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">
              Contact
            </div>

            <div className="mt-5 space-y-3 text-sm leading-6 text-slate-500">
              {settings?.address && (
                <div className="whitespace-pre-line">
                  {settings.address}
                </div>
              )}

              {settings?.city && (
                <div>{settings.city}</div>
              )}

              {settings?.phone && (
                <div>
                  <a
                    href={`tel:${settings.phone.replace(/\s/g, '')}`}
                    className="transition hover:text-slate-900"
                  >
                    {settings.phone}
                  </a>
                </div>
              )}

              {settings?.email && (
                <div>
                  <a
                    href={`mailto:${settings.email}`}
                    className="break-all transition hover:text-slate-900"
                  >
                    {settings.email}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-slate-100 pt-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>{copyright}</div>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/mentions-legales"
              className="transition hover:text-slate-700"
            >
              Mentions légales
            </Link>

            <Link
              href="/confidentialite"
              className="transition hover:text-slate-700"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}