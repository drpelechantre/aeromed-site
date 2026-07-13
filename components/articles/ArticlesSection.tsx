import SectionTitle from "@/components/sections/SectionTitle";
import ArticleGrid from "./ArticleGrid";

type Article = {
  id?: string | number;
  title: string;
  excerpt?: string | null;
  image?: string | null;
  publishedAt?: string | null;
  category?: string | null;
  href?: string;
};


type ArticlesSectionProps = {
  articles: Article[];

  eyebrow?: string;
  title?: string;
  description?: string;

  buttonLabel?: string;
  buttonUrl?: string;
};


export default function ArticlesSection({
  articles,

  eyebrow = "Actualités",
  title = "Les dernières nouvelles de la MSP",
  description,

  buttonLabel,
  buttonUrl,

}: ArticlesSectionProps) {


  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">


        <div className="mb-12 flex items-end justify-between gap-6">

          <div className="max-w-3xl">

            <SectionTitle
              eyebrow={eyebrow}
              title={title}
              description={description}
            />

          </div>


          {buttonLabel && buttonUrl && (

            <a
              href={buttonUrl}
              className="
                hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-5
                py-3
                text-sm
                font-medium
                text-[#5D89AD]
                shadow-sm
                transition
                hover:shadow-md
                md:inline-flex
              "
            >
              {buttonLabel}
            </a>

          )}

        </div>


        <ArticleGrid
          articles={articles}
        />


      </div>

    </section>
  );
}