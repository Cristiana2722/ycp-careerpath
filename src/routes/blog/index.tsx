import { createFileRoute, Link } from '@tanstack/react-router'
import { blogPosts } from '@/data/blog-posts'
import { FileText, Clock, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/blog/')({
  component: BlogIndex,
})

function BlogIndex() {
  return (
    <main className="pt-24 pb-20 min-h-screen bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider mb-2">
            Blog YCP
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Resurse & Articole
          </h1>
          <div className="w-14 h-1 bg-blue-600 rounded mb-5" />
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Articole, ghiduri și sfaturi practice scrise de consilierii YCP pentru a-ți susține
            parcursul profesional și personal.
          </p>
        </div>

        {/* Posts grid */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col sm:flex-row gap-6 bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow"
            >
              {/* Thumbnail */}
              <div className="sm:w-56 aspect-video sm:aspect-auto flex-shrink-0 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 relative flex items-center justify-center">
                <FileText className="w-10 h-10 text-blue-400/60" />
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2.5 py-1 rounded-full font-medium">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 sm:py-6 sm:pr-6 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime} lectură
                  </span>
                </div>
                <h2 className="font-bold text-slate-900 dark:text-white text-xl leading-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                  Citește articolul <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-blue-700 rounded-2xl p-8 text-center text-white">
          <h3 className="font-black text-2xl mb-2">Vrei să mergi mai departe?</h3>
          <p className="text-blue-200 mb-5">
            Articolele sunt un prim pas. Consultația personalizată este pasul care schimbă totul.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors"
          >
            Solicită Consultație Gratuită <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </main>
  )
}
