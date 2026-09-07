export default function Hero() {
  return (
    <section
      id="top"
      className="relative floxen-yellow overflow-hidden"
      style={{ paddingTop: '12rem', paddingBottom: '7rem' }}
    >
      {/* orbital anchor circle */}
      <div
        aria-hidden="true"
        className="absolute rounded-full bg-white"
        style={{
          width: '26vw',
          height: '26vw',
          minWidth: 220,
          minHeight: 220,
          right: '-6vw',
          top: '18%',
          opacity: 0.5,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute rounded-full border border-[#121212]/20"
        style={{
          width: '14vw',
          height: '14vw',
          minWidth: 120,
          minHeight: 120,
          left: '4vw',
          bottom: '8%',
        }}
      />

      <div className="relative mx-auto px-[8vw]">
        <p className="text-[14px] font-medium uppercase tracking-[0.18em] text-[#121212]/70 mb-6">
          Web design studio — local, young, modern
        </p>
        <h1
          className="font-display floxen-ink leading-[0.92]"
          style={{
            fontSize: 'clamp(3rem, 9vw, 8rem)',
            letterSpacing: '-0.04em',
            maxWidth: '16ch',
          }}
        >
          Web design for Sudbury businesses that want to be found.
        </h1>

        <p
          className="mt-8 text-[#575757] max-w-xl"
          style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.35rem)', lineHeight: 1.6 }}
        >
          We build, host, and maintain fast, modern websites for shops, studios, and service
          businesses across Sudbury and Greater Sudbury.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center bg-[#121212] text-white font-medium text-[15px] uppercase tracking-[0.08em] px-8 py-4 rounded-full hover:bg-[#2a2a2a] transition-colors"
            style={{ minHeight: 56 }}
          >
            Start a project
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center bg-white text-[#121212] font-medium text-[15px] uppercase tracking-[0.08em] px-8 py-4 rounded-full hover:bg-white/80 transition-colors"
            style={{ minHeight: 56 }}
          >
            See pricing
          </a>
        </div>
      </div>
    </section>
  );
}
