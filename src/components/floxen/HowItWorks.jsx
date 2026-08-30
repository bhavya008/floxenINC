import Reveal from './Revel';

const STEPS = [
  {
    num: '1',
    title: 'We talk',
    desc: 'A quick call to learn your business, your customers, and what you want the site to do.',
  },
  {
    num: '2',
    title: 'We design & build',
    desc: 'You see designs within a week. We build, refine, and launch on a domain you own.',
  },
  {
    num: '3',
    title: 'We keep it running',
    desc: 'Hosting, updates, and edits handled monthly. You never think about the website again.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto px-[8vw]">
        <Reveal
          as="h2"
          className="font-display floxen-ink"
          style={{
            fontSize: 'clamp(2.25rem, 5vw, 4rem)',
            letterSpacing: '-0.04em',
            maxWidth: '12ch',
          }}
        >
          How it works.
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 100} className="flex gap-5">
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-full bg-[#F7CE2E]"
                style={{ width: 56, height: 56 }}
              >
                <span
                  className="font-display text-[#121212]"
                  style={{ fontSize: '1.5rem', letterSpacing: '-0.04em' }}
                >
                  {s.num}
                </span>
              </div>
              <div>
                <h3
                  className="font-display floxen-ink"
                  style={{ fontSize: '1.5rem', letterSpacing: '-0.03em' }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-2 text-[#575757]"
                  style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}
                >
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
