type MediaEmbedProps = {
  url: string
  title?: string
  aspectRatio?: 'video' | 'square'
}

export default function MediaEmbed({
  url,
  title = 'Contenu vidéo',
  aspectRatio = 'video',
}: MediaEmbedProps) {
  return (
    <div
      className={`
        overflow-hidden rounded-[36px]
        border border-slate-100
        bg-white shadow-sm
        ${
          aspectRatio === 'video'
            ? 'aspect-video'
            : 'aspect-square'
        }
      `}
    >
      <iframe
        src={url}
        title={title}
        className="h-full w-full"
        loading="lazy"
        allowFullScreen
      />
    </div>
  )
}