import 'server-only'

type GetProfessionalsOptions = {
  limit?: number
  specialty?: string | number
}

export async function getProfessionals({
  limit = 6,
  specialty,
}: GetProfessionalsOptions = {}) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SERVER_URL ||
    'http://localhost:3000'

  const params = new URLSearchParams()

  params.set('where[visible][equals]', 'true')
  params.set('sort', 'order')
  params.set('limit', String(limit))

  if (specialty) {
    params.set(
      'where[specialty][equals]',
      String(specialty)
    )
  }

  const response = await fetch(
    `${baseUrl}/api/professionals?${params.toString()}`,
    {
      cache: 'no-store',
    }
  )

  if (!response.ok) {
    const error = await response.text()

    throw new Error(
      `Erreur professionnels ${response.status}: ${error}`
    )
  }

  const data = await response.json()

  return data.docs || []
}