import JobCard from '@/components/recruitment/JobCard'

type Job = {
  id?: string | number
  title: string
  profession: string
  contract?: string
  location?: string
  publishedAt?: string
  status?: 'Ouvert' | 'Pourvu' | 'Clôturé'
  description: string
  href: string
}

type JobGridProps = {
  jobs: Job[]
  emptyMessage?: string
}

export default function JobGrid({
  jobs,
  emptyMessage = 'Aucune offre disponible actuellement.',
}: JobGridProps) {
  if (jobs.length === 0) {
    return (
      <div className="rounded-[28px] border border-dashed border-slate-200 bg-white p-10 text-center text-slate-500">
        {emptyMessage}
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {jobs.map((job) => (
        <JobCard
          key={job.id ?? job.title}
          title={job.title}
          profession={job.profession}
          contract={job.contract}
          location={job.location}
          publishedAt={job.publishedAt}
          status={job.status}
          description={job.description}
          href={job.href}
        />
      ))}
    </div>
  )
}