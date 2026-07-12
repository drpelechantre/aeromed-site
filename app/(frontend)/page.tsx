import { getPage } from '@/lib/getPage'
import PageRenderer from '@/components/renderers/PageRenderer'


export default async function Home() {

  const page = await getPage('/')


  if (!page) {
    return (
      <div>
        Page introuvable
      </div>
    )
  }


  return (
    <PageRenderer
      blocks={page.layout}
    />
  )
}