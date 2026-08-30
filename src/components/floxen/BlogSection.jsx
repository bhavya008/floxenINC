import { BLOG_POSTS } from '@/data/blogs';
import { ArrowRight, CalendarDays, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../floxen/Revel';

export default function BlogSection() {
  return (
    <section id="blog" className="bg-[#f5f3ef] py-24 md:py-32">
      <div className="mx-auto px-[8vw]">
        <Reveal
          as="p"
          className="text-[13px] font-medium uppercase tracking-[0.18em] text-[#575757]"
        >
          Journal
        </Reveal>
        <Reveal
          as="h2"
          className="mt-4 font-display floxen-ink"
          style={{
            fontSize: 'clamp(2.25rem, 5vw, 4rem)',
            letterSpacing: '-0.04em',
            maxWidth: '12ch',
          }}
        >
          Insights for growing brands.
        </Reveal>
        <Reveal
          as="p"
          className="mt-5 max-w-xl text-[#575757]"
          style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
        >
          A few ideas, learnings, and practical notes from the work we do with service businesses.
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {BLOG_POSTS.map((post, index) => (
            <Reveal key={post.slug} delay={index * 80}>
              <article className="group h-full overflow-hidden rounded-[28px] border border-[#121212]/10 bg-white shadow-[0_18px_40px_rgba(18,18,18,0.04)] transition-transform duration-300 hover:-translate-y-1">
                <Link to={`/blog/${post.slug}`} className="block h-full">
                  <div className="overflow-hidden">
                    <img
                      src={post.cover}
                      alt={post.title}
                      className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[#575757]">
                      <span className="rounded-full bg-[#F7CE2E] px-2.5 py-1 text-[#121212]">
                        {post.category}
                      </span>
                    </div>

                    <h3
                      className="mt-5 font-display text-[#121212]"
                      style={{ fontSize: '1.5rem', letterSpacing: '-0.04em' }}
                    >
                      {post.title}
                    </h3>

                    <p className="mt-3 text-[0.98rem] leading-7 text-[#575757]">{post.excerpt}</p>

                    <div className="mt-6 flex flex-wrap items-center gap-4 text-[12px] text-[#575757]">
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Clock3 className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <div className="mt-7 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.12em] text-[#121212]">
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
