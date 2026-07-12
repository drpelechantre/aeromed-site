import HeroImageSection from '@/components/sections/HeroImageSection'

type HeroImageBlock = {
  imageUrl?: string | null
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  primaryLabel?: string | null
  primaryHref?: string | null
}

type Props = {
  block: HeroImageBlock
}

export default function HeroImageRenderer({
  block,
}: Props) {
 
 if (!block.imageUrl) {
    return null
  }

  return (
    <HeroImageSection
      image={block.imageUrl}
      eyebrow={block.eyebrow || undefined}
      title={block.title || ''}
      description={block.description || undefined}
      primaryLabel={block.primaryLabel || undefined}
      primaryHref={block.primaryHref || undefined}
    />
  )
}