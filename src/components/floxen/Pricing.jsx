import Reveal from './Revel';

const BUILDS = [
  {
    name: 'Starter',
    price: '$899',
    desc: 'A clean one-page site for a business that needs to show up fast.',
    features: ['1 page', 'Mobile-first design', 'Contact button', 'Launch in 1 week'],
  },
  {
    name: 'Standard',
    price: '$1,899',
    desc: 'Up to five pages with everything a local business needs to convert.',
    features: ['Up to 5 pages', 'Custom design', 'Basic SEO setup', 'Launch in 2 weeks'],
    popular: true,
  },
  {
    name: 'Premium',
    price: '$4,000+',
    desc: 'A full custom build with booking, menus, or whatever your business calls for.',
    features: ['Unlimited pages', 'Custom functionality', 'Advanced SEO', 'Launch in 3–4 weeks'],
  },
];

const PLANS = [
  {
    name: 'Keep',
    price: '$19/mo',
    desc: 'Hosting, security, and small text edits when you need them.',
    features: ['Reliable hosting + SSL', 'Daily backups', 'Security updates', '2 edits per month'],
  },
  {
    name: 'Grow',
    price: '$59/mo',
    desc: 'Hosting plus ongoing content edits and performance monitoring.',
    features: [
      'Everything in Keep',
      'Unlimited small edits',
      'Performance monitoring',
      'Monthly report',
    ],
    popular: true,
  },
  {
    name: 'Pro',
    price: '$99/mo',
    desc: 'Hands-off management with priority support and growth tweaks.',
    features: [
      'Everything in Grow',
      'Priority support',
      'New page each month',
      'Conversion reviews',
    ],
  },
];

function Card({ item }) {
  return (
    <div
      className={`relative rounded-3xl p-8 transition-colors duration-300 ${
        item.popular
          ? 'bg-[#121212] text-white'
          : 'bg-white border border-[#121212]/10 text-[#121212]'
      }`}
    >
      {item.popular && (
        <span className="absolute top-6 right-6 rounded-full floxen-yellow text-[#121212] text-[11px] font-medium uppercase tracking-[0.12em] px-3 py-1">
          Popular
        </span>
      )}
      <h3 className="font-display" style={{ fontSize: '1.5rem', letterSpacing: '-0.03em' }}>
        {item.name}
      </h3>
      <p
        className={`mt-2 ${item.popular ? 'text-white/70' : 'text-[#575757]'}`}
        style={{ fontSize: '0.95rem', lineHeight: 1.5 }}
      >
        {item.desc}
      </p>
      <div className="mt-6 font-display" style={{ fontSize: '2rem', letterSpacing: '-0.03em' }}>
        {item.price}
      </div>
      <ul className="mt-6 space-y-3">
        {item.features.map((f) => (
          <li key={f} className="flex items-center gap-3" style={{ fontSize: '0.95rem' }}>
            <span
              className="rounded-full flex-shrink-0"
              style={{
                width: 8,
                height: 8,
                background: item.popular ? '#F7CE2E' : '#121212',
              }}
            />
            <span className={item.popular ? 'text-white/90' : 'text-[#575757]'}>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 md:py-32">
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
          Straightforward pricing.
        </Reveal>
        <Reveal
          as="p"
          className="mt-5 text-[#575757] max-w-md"
          style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
        >
          One-time to build, monthly to maintain. No surprises, no lock-in.
        </Reveal>

        <Reveal
          as="h3"
          className="mt-16 text-[13px] font-medium uppercase tracking-[0.16em] text-[#575757]"
        >
          One-time — Build
        </Reveal>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {BUILDS.map((b, i) => (
            <Reveal key={b.name} delay={i * 90}>
              <Card item={b} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 h-[4px] bg-[#121212] w-full" />

        <Reveal
          as="h3"
          className="mt-10 text-[13px] font-medium uppercase tracking-[0.16em] text-[#575757]"
        >
          Monthly — Hosting & Maintenance
        </Reveal>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <Card item={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
