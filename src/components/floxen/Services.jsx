import Reveal from './Revel';

const SERVICES = [
  {
    num: '01',
    title: 'Build',
    desc: 'Custom-designed, lightning-fast websites built from scratch around your brand and your customers.',
  },
  {
    num: '02',
    title: 'Host',
    desc: 'Reliable hosting with SSL, daily backups, and global delivery so your site is always on and always quick.',
  },
  {
    num: '03',
    title: 'Maintain',
    desc: 'Ongoing updates, edits, security patches, and monitoring — you focus on the business, we handle the site.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="mx-auto px-[8vw]">
        <Reveal
          as="h2"
          className="font-display floxen-ink"
          style={{
            fontSize: 'clamp(2.25rem, 5vw, 4rem)',
            letterSpacing: '-0.04em',
            maxWidth: '14ch',
          }}
        >
          What we do.
        </Reveal>
        <Reveal
          as="p"
          className="mt-5 text-[#575757] max-w-md"
          style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
        >
          Three pillars, one partner. Everything your website needs from day one onward.
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.num}
              delay={i * 90}
              className="group bg-white border border-[#121212]/10 rounded-3xl p-8 md:p-10 transition-colors duration-300 hover:bg-[#F7CE2E] hover:border-[#121212]/0"
              style={{ minHeight: 320 }}
            >
              <div
                className="flex items-center justify-center rounded-full bg-[#F7CE2E] group-hover:bg-white transition-colors duration-300"
                style={{ width: 64, height: 64 }}
              >
                <span
                  className="font-display text-[#121212]"
                  style={{ fontSize: '1.5rem', letterSpacing: '-0.04em' }}
                >
                  {s.num}
                </span>
              </div>
              <h3
                className="mt-8 font-display floxen-ink"
                style={{ fontSize: '1.75rem', letterSpacing: '-0.03em' }}
              >
                {s.title}
              </h3>
              <p
                className="mt-3 text-[#575757] group-hover:text-[#121212] transition-colors duration-300"
                style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}
              >
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
