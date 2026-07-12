import { RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

type RichTextSectionProps = {
  content: SerializedEditorState
  width?: 'narrow' | 'normal' | 'wide'
}

const widthClasses = {
  narrow: 'max-w-3xl',
  normal: 'max-w-5xl',
  wide: 'max-w-7xl',
}

export default function RichTextSection({
  content,
  width = 'normal',
}: RichTextSectionProps) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div
        className={`mx-auto px-6 ${widthClasses[width]}`}
      >
        <div className="prose prose-slate max-w-none prose-headings:tracking-tight prose-a:text-[#5D89AD]">
          <RichText data={content} />
        </div>
      </div>
    </section>
  )
}