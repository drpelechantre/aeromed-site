import config from '@payload-config'
import { getPayload } from 'payload'

export async function getSiteSettings() {
  try {
    const payload = await getPayload({ config })

    return await payload.findGlobal({
      slug: 'site-settings',
      depth: 1,
    })
  } catch (error) {
    console.error(
      'Impossible de récupérer les paramètres du site depuis Payload :',
      error,
    )

    return null
  }
}