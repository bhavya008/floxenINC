import { BLOG_POSTS } from '@/data/blogs';
import { ArrowLeft, CalendarDays, Clock3 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f3ef] px-6">
        <div className="max-w-lg rounded-[28px] border border-[#121212]/10 bg-white p-10 text-center shadow-[0_18px_40px_rgba(18,18,18,0.04)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#575757]">Blog</p>
          <h1 className="mt-4 font-display text-3xl text-[#121212]">Article not found</h1>
          <p className="mt-3 text-[#575757]">This post has not been created yet.</p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#121212] px-6 py-3 text-sm font-medium uppercase tracking-[0.1em] text-white"
          >
            Back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-[#121212]">
      <div className="mx-auto max-w-5xl px-[8vw] py-28 md:py-32">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-[#575757] transition-opacity hover:opacity-70"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="mt-10 overflow-hidden rounded-[32px] border border-[#121212]/10 bg-[#f5f3ef]">
          <img
            src={post.cover}
            alt={post.title}
            className="h-[320px] w-full object-cover md:h-[420px]"
          />
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[#575757]">
            <span className="rounded-full bg-[#F7CE2E] px-2.5 py-1 text-[#121212]">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-3.5 w-3.5" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1
            className="mt-6 font-display text-[#121212]"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.4rem)', letterSpacing: '-0.05em' }}
          >
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#121212]/15 bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#575757]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[#121212]/10 bg-white p-4 text-sm text-[#575757]">
            Written by {post.author}
          </div>

          <article className="mt-10 space-y-6 text-[1.05rem] leading-8 text-[#2a2a2a]">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
}
