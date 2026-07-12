import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

type JobCardProps = {
  title: string;
  profession: string;
  contract?: string;
  location?: string;
  publishedAt?: string;
  status?: "Ouvert" | "Pourvu" | "Clôturé";
  description: string;
  href: string;
};

export default function JobCard({
  title,
  profession,
  contract,
  location,
  publishedAt,
  status = "Ouvert",
  description,
  href,
}: JobCardProps) {
  const badgeVariant =
    status === "Ouvert"
      ? "success"
      : status === "Pourvu"
      ? "info"
      : "danger";

  return (
    <Card hover className="h-full flex flex-col">

      <div className="flex items-start justify-between gap-4">

        <div>
          <div className="text-sm text-slate-500">
            {profession}
          </div>

          <h3 className="mt-2 text-2xl font-semibold text-slate-900">
            {title}
          </h3>
        </div>

        <Badge variant={badgeVariant}>
          {status}
        </Badge>

      </div>

      <div className="mt-5 flex flex-wrap gap-2 text-sm text-slate-500">

        {contract && <span>{contract}</span>}

        {location && (
          <>
            <span>•</span>
            <span>{location}</span>
          </>
        )}

        {publishedAt && (
          <>
            <span>•</span>
            <span>{publishedAt}</span>
          </>
        )}

      </div>

      <p className="mt-6 flex-1 leading-relaxed text-slate-600">
        {description}
      </p>

      <div className="mt-8">
        <Button href={href}>
          Voir l'offre
        </Button>
      </div>

    </Card>
  );
}