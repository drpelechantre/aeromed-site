import Link from "next/link";

type ArticleCardProps = {
  title: string;
  excerpt?: string | null;
  image?: string | null;
  date?: string | null;
  href?: string;
  category?: string | null;
};

export default function ArticleCard({
  title,
  excerpt,
  image,
  date,
  href = "#",
  category,
}: ArticleCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-[30px]
        border
        border-slate-200/70
        bg-white
        shadow-[0_10px_35px_rgba(15,23,42,0.06)]
        transition-all
        duration-300
        hover:-translate-y-1.5
        hover:shadow-[0_22px_55px_rgba(15,23,42,0.12)]
      "
    >

      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">

        {image ? (
          <img
            src={image}
            alt=""
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        ) : (
          <div className="
            flex
            h-full
            items-center
            justify-center
            text-slate-400
          ">
            📰
          </div>
        )}

      </div>


      <div className="p-6">

        {category && (
          <div
            className="
              mb-3
              inline-flex
              rounded-full
              bg-[#E8F1EB]
              px-3
              py-1
              text-xs
              font-semibold
              text-[#5D89AD]
            "
          >
            {category}
          </div>
        )}


        <h3
          className="
            text-xl
            font-semibold
            leading-tight
            text-slate-900
          "
        >
          {title}
        </h3>


        {date && (
          <div className="mt-3 text-sm text-slate-400">
            {new Date(date).toLocaleDateString("fr-FR")}
          </div>
        )}


        {excerpt && (
          <p className="
            mt-4
            text-sm
            leading-relaxed
            text-slate-600
          ">
            {excerpt}
          </p>
        )}


        <Link
          href={href}
          className="
            mt-5
            inline-flex
            text-sm
            font-medium
            text-[#5D89AD]
            transition
            group-hover:translate-x-1
          "
        >
          Lire l'article →
        </Link>

      </div>

    </article>
  );
}