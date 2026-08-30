import Reveal from './Revel';

const ADDONS = [
  {
    title: 'SEO',
    desc: 'Local search optimization so the right people find you first on Google and Maps.',
  },
  {
    title: 'Social Media Marketing',
    desc: 'Content, scheduling, and growth for the platforms your customers actually use.',
  },
  {
    title: 'Custom Video Content',
    desc: 'Short-form video shot and edited to make your storefront impossible to scroll past.',
  },
];

export default function AddOns() {
  return (
    <section id="work" className="floxen-yellow py-24 md:py-32">
      <div className="mx-auto px-[8vw]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal
            as="h2"
            className="font-display floxen-ink"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              letterSpacing: '-0.04em',
              maxWidth: '16ch',
            }}
          >
            Add-ons to go further.
          </Reveal>
          <Reveal
            as="p"
            className="text-[#121212]/70 max-w-sm"
            style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}
          >
            Optional extras, priced separately. Add what you need, skip what you don't.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px bg-[#121212]/15 rounded-3xl overflow-hidden md:grid-cols-3">
          {ADDONS.map((a, i) => (
            <Reveal key={a.title} delay={i * 90} className="floxen-yellow p-8 md:p-10">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-white" style={{ width: 12, height: 12 }} />
                <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-[#121212]/60">
                  Optional
                </span>
              </div>
              <h3
                className="mt-6 font-display floxen-ink"
                style={{ fontSize: '1.5rem', letterSpacing: '-0.03em' }}
              >
                {a.title}
              </h3>
              <p className="mt-3 text-[#121212]/80" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                {a.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
