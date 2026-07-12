import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import RichTextSection from '@/components/sections/RichTextSection'

type RichTextBlock = {
  content?: SerializedEditorState | null
  width?: 'narrow' | 'normal' | 'wide' | null
}

type Props = {
  block: RichTextBlock
}

export default function RichTextRenderer({
  block,
}: Props) {
  if (!block.content) {
    return null
  }

  return (
    <RichTextSection
      content={block.content}
      width={block.width || 'normal'}
    />
  )
}