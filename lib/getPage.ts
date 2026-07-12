import 'server-only'

export async function getPage(slug: string) {

  console.log(
    'URL Payload:',
    process.env.NEXT_PUBLIC_SERVER_URL
  )

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=${slug}`,
    {
      cache: 'no-store',
    }
  )


  if (!res.ok) {
    const error = await res.text()

    throw new Error(
      `Erreur Payload ${res.status}: ${error}`
    )
  }


  const data = await res.json()

  return data.docs?.[0] || null
}