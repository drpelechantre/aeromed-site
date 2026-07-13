import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";
import Link from "next/link";
import { RichText } from "@payloadcms/richtext-lexical/react";


type Props = {
  params: Promise<{
    slug: string;
  }>;
};


function formatProfession(value?: string | null) {
  const labels: Record<string, string> = {
    "medecin-generaliste": "Médecin généraliste",
    gynecologue: "Gynécologue",
    cardiologue: "Cardiologue",
    ophtalmologue: "Ophtalmologue",
    dentiste: "Chirurgien-dentiste",
    kinesitherapeute: "Kinésithérapeute",
    podologue: "Pédicure-podologue",
    dieteticien: "Diététicien(ne)",
    psychomotricien: "Psychomotricien(ne)",
    secretariat: "Secrétariat",
    autre: "Professionnel de santé",
  };

  return value
    ? labels[value] ?? value
    : null;
}

export default async function ArticlePage({
  params,
}: Props) {


  const { slug } = await params;


  const payload = await getPayload({
    config,
  });



  const result = await payload.find({
    collection: "articles",

    where: {
      slug: {
        equals: slug,
      },

      status: {
        equals: "published",
      },
    },

    limit: 1,

    depth: 2,
  });



  const article = result.docs[0];


  if (!article) {
    notFound();
  }



  const categories =
    Array.isArray(article.categories)
      ? article.categories.filter(
          (category) =>
            typeof category === "object"
        )
      : [];



  const author =
    typeof article.author === "object"
      ? article.author
      : null;



  return (

    <main className="bg-slate-50/40 py-20">


      <article className="mx-auto max-w-5xl px-6">


        {/* HERO IMAGE */}

        {typeof article.image === "object" &&
          article.image?.url && (

          <div
            className="
              mb-12
              overflow-hidden
              rounded-[40px]
              shadow-[0_20px_60px_rgba(15,23,42,0.12)]
            "
          >

            <img
              src={article.image.url}
              alt={
                article.image.alt ||
                article.title
              }
              className="
                h-[420px]
                w-full
                object-cover
              "
            />

          </div>

        )}



        {/* CATEGORIES */}

        {categories.length > 0 && (

          <div className="mb-6 flex flex-wrap gap-3">

            {categories.map((category) => (

              <span
                key={category.id}
                className="
                  rounded-full
                  bg-[#E8F1EB]
                  px-4
                  py-1.5
                  text-sm
                  font-semibold
                  text-[#5D89AD]
                "
              >
                {category.name}
              </span>

            ))}

          </div>

        )}



        {/* TITLE */}

        <h1
          className="
            max-w-4xl
            text-4xl
            font-semibold
            tracking-tight
            text-slate-900
            md:text-6xl
          "
        >
          {article.title}
        </h1>



        {/* DATE */}

        {article.publishedAt && (

          <p
            className="
              mt-6
              text-sm
              text-slate-400
            "
          >

            Publié le{" "}

            {new Intl.DateTimeFormat(
              "fr-FR",
              {
                day: "numeric",
                month: "long",
                year: "numeric",
              }
            ).format(
              new Date(article.publishedAt)
            )}

          </p>

        )}




        {/* AUTHOR */}

        {author && (

          <div
            className="
              mt-8
              flex
              items-center
              gap-4
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-sm
            "
          >


            <div>

              <div
                className="
                  text-xs
                  uppercase
                  tracking-wider
                  text-slate-400
                "
              >
                Rédigé par
              </div>


              <div
                className="
                  mt-1
                  font-semibold
                  text-slate-900
                "
              >
                {author.firstName}{" "}
                {author.lastName}
              </div>



              {author.profession && (

                <div
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  {formatProfession(author.profession)}
                </div>

              )}

            </div>


          </div>

        )}



        {/* EXCERPT */}

        {article.excerpt && (

          <div
            className="
              mt-12
              rounded-[30px]
              bg-white
              p-8
              text-xl
              leading-relaxed
              text-slate-600
              shadow-sm
            "
          >

            {article.excerpt}

          </div>

        )}





        {/* CONTENT */}

        <div
          className="
            prose
            prose-slate
            mt-14
            max-w-none

            prose-headings:font-semibold
            prose-headings:text-slate-900

            prose-p:text-slate-700
            prose-p:leading-relaxed

            prose-a:text-[#5D89AD]

            prose-img:rounded-3xl
          "
        >

          <RichText
            data={article.content}
          />

        </div>





        {/* TAGS */}

        {Array.isArray(article.tags) &&
          article.tags.length > 0 && (

          <div
            className="
              mt-16
              border-t
              border-slate-200
              pt-8
            "
          >

            <div
              className="
                mb-4
                text-sm
                font-semibold
                text-slate-500
              "
            >
              Mots-clés
            </div>


            <div className="flex flex-wrap gap-3">

              {article.tags.map(
                (tag, index) => (

                <span
                  key={index}
                  className="
                    rounded-full
                    bg-slate-100
                    px-3
                    py-1
                    text-sm
                    text-slate-600
                  "
                >
                  #{tag.tag}
                </span>

              ))}

            </div>

          </div>

        )}





        {/* BACK */}

        <div
          className="
            mt-16
          "
        >

          <Link
            href="/actualites"
            className="
              inline-flex
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
            "
          >
            ← Retour aux actualités
          </Link>

        </div>



      </article>


    </main>

  );
}