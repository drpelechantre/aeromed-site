import ArticleCard from '@/components/content/ArticleCard'

type Article = {
  id?: string | number
  title: string
  excerpt: string
  href: string
  date?: string
  category?: string
  image?: string
}

type ArticleGridProps = {
  articles: Article[]
  emptyMessage?: string
}

export default function ArticleGrid({
  articles,
  emptyMessage = 'Aucun article disponible pour le moment.',
}: ArticleGridProps) {
  if (articles.length === 0) {
    return (
      <div className="rounded-[28px] border border-dashed border-slate-200 bg-white p-10 text-center text-slate-500">
        {emptyMessage}
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard
          key={article.id ?? article.title}
          title={article.title}
          excerpt={article.excerpt}
          href={article.href}
          date={article.date}
          category={article.category}
          image={article.image}
        />
      ))}
    </div>
  )
}