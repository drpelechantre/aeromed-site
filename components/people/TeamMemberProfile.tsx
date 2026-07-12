import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

type TeamMemberProfileProps = {
  name: string
  profession: string
  specialty?: string
  photo?: string
  badge?: string

  introduction?: string

  activities?: string[]

  formations?: string[]

  appointmentHref?: string
}

export default function TeamMemberProfile({
  name,
  profession,
  specialty,
  photo,
  badge,
  introduction,
  activities = [],
  formations = [],
  appointmentHref,
}: TeamMemberProfileProps) {
  return (
    <div className="grid gap-12 lg:grid-cols-[320px_1fr]">

      {/* Colonne identité */}

      <div>
        <div className="overflow-hidden rounded-[36px] border border-slate-100 bg-white shadow-sm">

          <div className="aspect-[4/5] bg-gradient-to-br from-[#E8F1EB] to-[#E8EEF6]">

            {photo ? (
              <img
                src={photo}
                alt={`Portrait de ${name}`}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-7xl">
                👤
              </div>
            )}

          </div>


          <div className="p-6">

            {badge && (
              <Badge variant="info">
                {badge}
              </Badge>
            )}

            <h1 className="mt-4 text-3xl font-semibold text-slate-900">
              {name}
            </h1>

            <p className="mt-2 text-[#5D89AD]">
              {profession}
            </p>

            {specialty && (
              <p className="mt-2 text-sm text-slate-500">
                {specialty}
              </p>
            )}

            {appointmentHref && (
              <div className="mt-6">
                <Button href={appointmentHref}>
                  Prendre rendez-vous
                </Button>
              </div>
            )}

          </div>

        </div>
      </div>


      {/* Contenu */}

      <div className="space-y-10">

        {introduction && (
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              Présentation
            </h2>

            <p className="mt-4 leading-relaxed text-slate-600">
              {introduction}
            </p>
          </section>
        )}


        {activities.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              Activités spécifiques
            </h2>

            <ul className="mt-4 space-y-2 text-slate-600">
              {activities.map((activity) => (
                <li key={activity}>
                  • {activity}
                </li>
              ))}
            </ul>
          </section>
        )}


        {formations.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              Formations
            </h2>

            <ul className="mt-4 space-y-2 text-slate-600">
              {formations.map((formation) => (
                <li key={formation}>
                  • {formation}
                </li>
              ))}
            </ul>
          </section>
        )}

      </div>

    </div>
  )
}