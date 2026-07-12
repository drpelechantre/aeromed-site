import ProtocolCard from '@/components/protocols/ProtocolCard'

type Protocol = {
  id?: string | number
  title: string
  description: string
  icon?: string
  category?: string
  status?: 'Actif' | 'En développement' | 'Archivé'
  coordinators?: string[]
  href?: string
}

type ProtocolGridProps = {
  protocols: Protocol[]
  emptyMessage?: string
}

export default function ProtocolGrid({
  protocols,
  emptyMessage = 'Aucun protocole disponible actuellement.',
}: ProtocolGridProps) {
  if (protocols.length === 0) {
    return (
      <div className="rounded-[28px] border border-dashed border-slate-200 bg-white p-10 text-center text-slate-500">
        {emptyMessage}
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {protocols.map((protocol) => (
        <ProtocolCard
          key={protocol.id ?? protocol.title}
          title={protocol.title}
          description={protocol.description}
          icon={protocol.icon}
          category={protocol.category}
          status={protocol.status}
          coordinators={protocol.coordinators}
          href={protocol.href}
        />
      ))}
    </div>
  )
}