import config from '@payload-config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'

import { importMap } from '../importMap'

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[] | undefined
  }>
}

function cleanSearchParams(
  searchParams: Args['searchParams'],
): Promise<Record<string, string | string[]>> {
  return searchParams.then((values) => {
    const cleaned: Record<string, string | string[]> = {}

    for (const [key, value] of Object.entries(values)) {
      if (value !== undefined) {
        cleaned[key] = value
      }
    }

    return cleaned
  })
}

export const generateMetadata = ({
  params,
  searchParams,
}: Args) =>
  generatePageMetadata({
    config,
    params,
    searchParams: cleanSearchParams(searchParams),
  })

export default function Page({
  params,
  searchParams,
}: Args) {
  return RootPage({
    config,
    importMap,
    params,
    searchParams: cleanSearchParams(searchParams),
  })
}