import { WORK_PROJECTS } from '@/data/workProjects';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function WorkDetail() {
  const { slug } = useParams();
  const project = WORK_PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f3ef] px-6">
        <div className="max-w-lg rounded-[28px] border border-[#121212]/10 bg-white p-10 text-center shadow-[0_18px_40px_rgba(18,18,18,0.04)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#575757]">Work</p>
          <h1 className="mt-4 font-display text-3xl text-[#121212]">Project not found</h1>
          <p className="mt-3 text-[#575757]">This case study does not exist yet.</p>
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
      <div className="mx-auto max-w-6xl px-[8vw] py-20 md:py-28">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-[#575757] transition-opacity hover:opacity-70"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="mt-8 rounded-[32px] border border-[#121212]/10 bg-[#f5f3ef] p-3 md:p-5">
          <img
            src={project.cover}
            alt={project.title}
            className="h-[320px] w-full rounded-[24px] object-cover md:h-[520px]"
          />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[#575757]">
              <span className="rounded-full bg-[#F7CE2E] px-2.5 py-1 text-[#121212]">
                {project.category}
              </span>
              <span>{project.client}</span>
              <span>{project.year}</span>
              <span>{project.location}</span>
            </div>

            <h1
              className="mt-6 font-display text-[#121212]"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 5rem)', letterSpacing: '-0.06em' }}
            >
              {project.title}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#2a2a2a]">{project.short}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#121212]/15 bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#575757]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 space-y-8">
              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#575757]">
                  Overview
                </p>
                <p className="mt-4 text-[1.06rem] leading-8 text-[#2a2a2a]">{project.overview}</p>
              </div>

              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#575757]">
                  Objective
                </p>
                <p className="mt-4 text-[1.06rem] leading-8 text-[#2a2a2a]">{project.objective}</p>
              </div>

              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#575757]">
                  Challenge
                </p>
                <p className="mt-4 text-[1.06rem] leading-8 text-[#2a2a2a]">{project.challenge}</p>
              </div>

              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#575757]">
                  Solution
                </p>
                <p className="mt-4 text-[1.06rem] leading-8 text-[#2a2a2a]">{project.solution}</p>
              </div>

              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#575757]">
                  Result
                </p>
                <p className="mt-4 text-[1.06rem] leading-8 text-[#2a2a2a]">{project.result}</p>
              </div>
            </div>
          </div>

          <aside className="lg:pt-12">
            <div className="rounded-[28px] border border-[#121212]/10 bg-[#f5f3ef] p-6">
              <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#575757]">
                Project snapshot
              </p>
              <div className="mt-6 space-y-4">
                {project.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#575757]">
                      {stat.label}
                    </p>
                    <p
                      className="mt-2 font-display text-2xl text-[#121212]"
                      style={{ letterSpacing: '-0.04em' }}
                    >
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#575757]">Role</p>
                <p className="mt-2 text-sm leading-6 text-[#2a2a2a]">{project.role}</p>
              </div>

              <div className="mt-6">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#575757]">Services</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-[#121212]/15 bg-white px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#575757]"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {project.projectUrl !== '#' && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#121212] px-6 py-3 text-[12px] font-medium uppercase tracking-[0.12em] text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Visit live site
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </aside>
        </div>

        <div className="mt-14 rounded-[32px] border border-[#121212]/10 bg-[#f5f3ef] p-6 md:p-8">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#575757]">
            Our approach
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {project.approach.map((item) => (
              <div key={item.title} className="rounded-[24px] bg-white p-5 shadow-sm">
                <h3
                  className="font-display text-2xl text-[#121212]"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-7 text-[#2a2a2a]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-[32px] border border-[#121212]/10 bg-[#121212] p-6 md:p-8">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-white/60">
            Key features
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {project.sections.map((section) => (
            <div
              key={section.title}
              className="rounded-[28px] border border-[#121212]/10 bg-[#f5f3ef] p-6"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#575757]">
                {section.eyebrow}
              </p>
              <h3
                className="mt-4 font-display text-2xl text-[#121212]"
                style={{ letterSpacing: '-0.04em' }}
              >
                {section.title}
              </h3>
              <p className="mt-4 text-[1rem] leading-7 text-[#2a2a2a]">{section.content}</p>
            </div>
          ))}
        </div>

        {project.quote && (
          <div className="mt-14 rounded-[32px] border border-[#121212]/10 bg-white p-8 shadow-[0_20px_45px_rgba(0,0,0,0.04)]">
            <p
              className="font-display text-[clamp(1.8rem,3vw,3rem)] leading-tight text-[#121212]"
              style={{ letterSpacing: '-0.05em' }}
            >
              “{project.quote.text}”
            </p>
            <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.16em] text-[#575757]">
              {project.quote.author}
            </p>
          </div>
        )}

        {project.impact && (
          <div className="mt-14 rounded-[32px] border border-[#121212]/10 bg-[#f5f3ef] p-6 md:p-8">
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#575757]">
              Impact
            </p>
            <p className="mt-4 text-[1.06rem] leading-8 text-[#2a2a2a]">{project.impact}</p>
          </div>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {project.gallery.map((image, index) => (
              <div
                key={image.src || index}
                className="overflow-hidden rounded-[28px] border border-[#121212]/10 bg-[#f5f3ef]"
              >
                <img
                  src={image.src}
                  alt={image.alt || `${project.title} gallery ${index + 1}`}
                  className="h-[260px] w-full object-cover md:h-[360px]"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
