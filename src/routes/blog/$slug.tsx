import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { blogPosts } from '@/data/blog-posts'
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react'

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug)
    if (!post) throw notFound()
    return post
  },
  component: BlogPost,
})

function BlogPost() {
  const post = Route.useLoaderData()

  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <main className="pt-24 pb-20 min-h-screen bg-white dark:bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Înapoi la Blog
        </Link>

        {/* Category */}
        <span className="inline-flex items-center gap-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          <Tag className="w-3 h-3" />
          {post.category}
        </span>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight mb-4">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-slate-400 mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {post.readTime} lectură
          </span>
        </div>

        {/* Excerpt */}
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-medium italic border-l-4 border-blue-600 pl-4">
          {post.excerpt}
        </p>

        {/* Content */}
        <div
          className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-black prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-3 prose-em:text-blue-700 dark:prose-em:text-blue-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author */}
        <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold flex-shrink-0">
            YCP
          </div>
          <div>
            <p className="font-bold text-slate-900 dark:text-white text-sm">Echipa YCP – Your Career Path</p>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mt-0.5">
              Articolele noastre sunt scrise de consilieri certificați cu experiență în orientare profesională,
              coaching și psihologie aplicată în carieră.
            </p>
          </div>
        </div>

        {/* Other posts */}
        {others.length > 0 && (
          <div className="mt-14">
            <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-5">Articole Similare</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow block"
                >
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full font-medium">
                    {p.category}
                  </span>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mt-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-slate-400 text-xs mt-1">{p.readTime} lectură</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-10 bg-blue-700 rounded-2xl p-7 text-center text-white">
          <h3 className="font-black text-xl mb-2">Ești gata să îți schimbi cariera?</h3>
          <p className="text-blue-200 text-sm mb-4">
            Prima consultație cu un consilier YCP este gratuită și fără angajament.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors text-sm"
          >
            Solicită Consultație Gratuită
          </a>
        </div>
      </div>
    </main>
  )
}
