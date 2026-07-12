import Link from 'next/link'

type AnnouncementLevel =
  | 'info'
  | 'success'
  | 'warning'
  | 'urgent'

type AnnouncementBannerProps = {
  title: string
  message: string
  level?: AnnouncementLevel
  href?: string
  linkLabel?: string
}

export default function AnnouncementBanner({
  title,
  message,
  level = 'info',
  href,
  linkLabel = 'En savoir plus',
}: AnnouncementBannerProps) {
  const styles = {
    info: {
      container:
        'bg-blue-50 border-blue-100 text-blue-900',
      icon: 'ℹ️',
    },

    success: {
      container:
        'bg-emerald-50 border-emerald-100 text-emerald-900',
      icon: '✅',
    },

    warning: {
      container:
        'bg-amber-50 border-amber-100 text-amber-900',
      icon: '⚠️',
    },

    urgent: {
      container:
        'bg-red-50 border-red-100 text-red-900',
      icon: '🚨',
    },
  }

  const currentStyle = styles[level]

  return (
    <div
      className={`rounded-3xl border p-5 ${currentStyle.container}`}
    >
      <div className="flex gap-4">
        <div className="text-xl">
          {currentStyle.icon}
        </div>

        <div className="flex-1">
          <h3 className="font-semibold">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed opacity-80">
            {message}
          </p>

          {href && (
            <Link
              href={href}
              className="mt-3 inline-flex text-sm font-medium underline underline-offset-4"
            >
              {linkLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}