import HeroPage from '@/components/sections/HeroPage'

type HeroBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  buttonLabel?: string | null
  buttonUrl?: string | null
}

type HeroRendererProps = {
  block: HeroBlockData
}

export default function HeroRenderer({
  block,
}: HeroRendererProps) {
  return (
    <HeroPage
      badge={block.eyebrow || undefined}
      title={block.title || ''}
      description={block.description || undefined}
      primaryButton={
        block.buttonLabel
          ? {
              label: block.buttonLabel,
              href: block.buttonUrl || '#',
            }
          : undefined
      }
    />
  )
}