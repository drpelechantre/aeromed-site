import SectionTitle from '@/components/sections/SectionTitle'

type MapSectionProps = {
  address: string
  city?: string
  mapUrl?: string
  transport?: string[]
  features?: string[]
}

export default function MapSection({
  address,
  city,
  mapUrl,
  transport = [],
  features = [],
}: MapSectionProps) {
  return (
    <>
      <SectionTitle
        eyebrow="Accès"
        title="Nous trouver facilement"
        description="La MSP Aéromed est située à Toulouse Saint-Martin-du-Touch, dans un environnement accessible aux patients et aux professionnels."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-2">

        <div>
          <div className="rounded-[36px] border border-slate-100 bg-white p-8 shadow-sm">

            <h3 className="text-2xl font-semibold text-slate-900">
              Adresse
            </h3>

            <p className="mt-4 text-slate-600">
              {address}
              {city && (
                <>
                  <br />
                  {city}
                </>
              )}
            </p>


            {features.length > 0 && (
              <div className="mt-8">
                <h4 className="font-semibold text-slate-900">
                  Informations pratiques
                </h4>

                <ul className="mt-4 space-y-2 text-slate-600">
                  {features.map((feature) => (
                    <li key={feature}>
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}


            {transport.length > 0 && (
              <div className="mt-8">
                <h4 className="font-semibold text-slate-900">
                  Transports
                </h4>

                <ul className="mt-4 space-y-2 text-slate-600">
                  {transport.map((item) => (
                    <li key={item}>
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </div>


        <div className="overflow-hidden rounded-[36px] border border-white bg-gradient-to-br from-[#DDEAE0] to-[#DDE6F2] shadow-inner">

          {mapUrl ? (
            <iframe
              src={mapUrl}
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              title="Localisation de la MSP"
            />
          ) : (
            <div className="flex min-h-[420px] items-center justify-center text-slate-500">
              Carte de localisation
            </div>
          )}

        </div>

      </div>
    </>
  )
}