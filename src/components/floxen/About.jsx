import Reveal from './Revel';

export default function About() {
  return (
    <section className="floxen-yellow py-24 md:py-32 overflow-hidden">
      <div className="relative mx-auto px-[8vw]">
        <div
          aria-hidden="true"
          className="absolute rounded-full bg-white"
          style={{
            width: '18vw',
            height: '18vw',
            minWidth: 160,
            minHeight: 160,
            right: '-4vw',
            top: '10%',
            opacity: 0.45,
          }}
        />
        <div className="relative grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal
            as="h2"
            className="font-display floxen-ink"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              letterSpacing: '-0.04em',
              maxWidth: '12ch',
            }}
          >
            Sudbury web design, built local.
          </Reveal>
          <Reveal as="div">
            <p className="text-[#121212]/85" style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
              Floxen is a small, modern web design studio. We live where you do — in the
              neighborhood — and we believe the bakery, the barbershop, and the gym down the street
              deserve a website as sharp as any big-brand site. We help Greater Sudbury businesses
              get discovered, earn trust, and turn local searches into real conversations.
            </p>
            <p
              className="mt-5 text-[#121212]/70"
              style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}
            >
              No bloated agencies, no templates, no jargon. Just fast, honest work from people who
              answer the phone.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
