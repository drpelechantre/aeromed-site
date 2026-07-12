import SectionTitle from '@/components/sections/SectionTitle'

type GalleryImage = {
  src: string
  alt: string
  caption?: string
}

type GallerySectionProps = {
  images: GalleryImage[]
  eyebrow?: string
  title?: string
  description?: string
}

export default function GallerySection({
  images,
  eyebrow = 'La MSP',
  title = 'Un environnement pensé pour les patients et les professionnels',
  description,
}: GallerySectionProps) {
  return (
    <>
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <figure
            key={image.src}
            className="group overflow-hidden rounded-[32px] border border-slate-100 bg-white shadow-sm"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {image.caption && (
              <figcaption className="p-5 text-sm text-slate-600">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </>
  )
}