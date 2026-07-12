import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

type DocumentCardProps = {
  title: string
  description?: string
  category?: string
  fileUrl: string
  fileType?: string
}

export default function DocumentCard({
  title,
  description,
  category,
  fileUrl,
  fileType = 'PDF',
}: DocumentCardProps) {
  return (
    <Card hover className="flex h-full flex-col">

      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E8F1EB] to-[#E8EEF6] text-2xl">
          📄
        </div>

        <div>
          {category && (
            <div className="text-sm font-medium text-[#5D89AD]">
              {category}
            </div>
          )}

          <h3 className="mt-1 text-xl font-semibold text-slate-900">
            {title}
          </h3>
        </div>
      </div>


      {description && (
        <p className="mt-5 flex-1 leading-relaxed text-slate-600">
          {description}
        </p>
      )}


      <div className="mt-7 flex items-center justify-between gap-4">

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {fileType}
        </span>

        <Button
          href={fileUrl}
          external
          variant="secondary"
        >
          Télécharger
        </Button>

      </div>

    </Card>
  )
}