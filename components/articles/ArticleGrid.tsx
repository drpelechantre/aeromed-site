import ArticleCard from "./ArticleCard";

type Article = {
  id?: string | number;

  title: string;

  excerpt?: string | null;

  image?: string | null;

  publishedAt?: string | null;

  category?: string | null;

  href?: string;
};


type ArticleGridProps = {
  articles: Article[];

};


export default function ArticleGrid({
  articles,
}: ArticleGridProps) {

  if (!articles || articles.length === 0) {
    return null;
  }


  return (
    <div
      className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
      "
    >

      {articles.map((article) => (

        <ArticleCard
          key={article.id ?? article.title}
          title={article.title}
          excerpt={article.excerpt}
          image={article.image}
          date={article.publishedAt}
          category={article.category}
          href={article.href}
        />

      ))}

    </div>
  );
}