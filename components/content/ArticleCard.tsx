import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

type ArticleCardProps = {
  title: string;
  excerpt: string;
  href: string;
  date?: string;
  category?: string;
  image?: string;
};

export default function ArticleCard({
  title,
  excerpt,
  href,
  date,
  category,
  image,
}: ArticleCardProps) {
  return (
    <Card hover className="overflow-hidden p-0">

      {image && (
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover"
        />
      )}

      <div className="p-7">

        {(category || date) && (
          <div className="mb-5 flex items-center gap-3">

            {category && (
              <Badge variant="info">
                {category}
              </Badge>
            )}

            {date && (
              <span className="text-sm text-slate-400">
                {date}
              </span>
            )}

          </div>
        )}

        <h3 className="text-2xl font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-4 leading-relaxed text-slate-600">
          {excerpt}
        </p>

        <Link
          href={href}
          className="mt-7 inline-flex text-[#5D89AD] font-medium hover:translate-x-1 transition"
        >
          Lire la suite →
        </Link>

      </div>

    </Card>
  );
}