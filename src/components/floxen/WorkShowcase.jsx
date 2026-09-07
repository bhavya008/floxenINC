import { WORK_PROJECTS } from '@/data/workProjects';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './Revel';

export default function WorkShowcase() {
  return (
    <section id="work" className="bg-[#121212] py-24 md:py-32">
      <div className="mx-auto px-[8vw]">
        <Reveal
          as="p"
          className="text-[13px] font-medium uppercase tracking-[0.18em] text-white/65"
        >
          Selected work
        </Reveal>
        <Reveal
          as="h2"
          className="mt-6 font-display text-white"
          style={{
            fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
            letterSpacing: '-0.05em',
            lineHeight: 0.95,
            maxWidth: 'none',
          }}
        >
          Premium digital work.
        </Reveal>
        <Reveal as="p" className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
          A collection of recent projects built for ambitious brands that need clarity, trust, and a
          stronger online presence.
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {WORK_PROJECTS.map((project, index) => (
            <Reveal key={project.slug} delay={index * 90}>
              <article className="group h-full overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-[0_20px_45px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1">
                <Link to={`/work/${project.slug}`} className="block h-full">
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#f7ce2e]">
                        {project.category}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-white/70" />
                    </div>

                    <h3
                      className="mt-6 font-display text-3xl text-white"
                      style={{ letterSpacing: '-0.05em' }}
                    >
                      {project.title}
                    </h3>

                    <p className="mt-4 text-base leading-7 text-white/72">{project.short}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-transparent px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
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
