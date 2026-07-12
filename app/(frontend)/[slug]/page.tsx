import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'

import PageRenderer from '@/components/renderers/PageRenderer'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params

  const payload = await getPayload({
    config: configPromise,
  })

  const result = await payload.find({
    collection: 'pages' as any,
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 2,
    limit: 1,
  })

  const page = result.docs[0]

  if (!page) {
    notFound()
  }

  return (
    <PageRenderer
      blocks={page.layout}
    /> )
}