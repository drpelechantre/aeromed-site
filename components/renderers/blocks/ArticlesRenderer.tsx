import ArticlesSection from "@/components/articles/ArticlesSection";
import { getPayload } from "payload";
import config from "@payload-config";

type ArticlesBlockData = {
  title?: string | null;
  description?: string | null;
  limit?: number | null;

  category?:
    | {
        id: string | number;
      }
    | string
    | number
    | null;

  featuredOnly?: boolean | null;

  buttonLabel?: string | null;
  buttonUrl?: string | null;
};

type Props = {
  block: ArticlesBlockData;
};


export default async function ArticlesRenderer({
  block,
}: Props) {

  const payload = await getPayload({
    config,
  });


  const where: any = {
    status: {
      equals: "published",
    },
  };


  if (block.featuredOnly) {
    where.featured = {
      equals: true,
    };
  }


  if (block.category) {

    const categoryId =
      typeof block.category === "object"
        ? block.category.id
        : block.category;


    where.categories = {
      contains: categoryId,
    };
  }


  const articles = await payload.find({
    collection: "articles",
    limit: block.limit || 3,
    where,
    sort: "-publishedAt",
  });


  const formattedArticles =
    articles.docs.map((article) => {

      const category =
        Array.isArray(article.categories) &&
        article.categories.length > 0 &&
        typeof article.categories[0] === "object"
          ? article.categories[0].name
          : null;


      return {

        id: article.id,

        title: article.title,

        excerpt: article.excerpt,

        publishedAt: article.publishedAt,

        href:
          `/actualites/${article.slug}`,

        category,

        image:
          typeof article.image === "object" &&
          article.image?.url
            ? article.image.url
            : null,

      };
    });



  return (
    <ArticlesSection
      articles={formattedArticles}
      title={block.title || undefined}
      description={block.description || undefined}
      buttonLabel={block.buttonLabel || undefined}
      buttonUrl={block.buttonUrl || undefined}
    />
  );
}