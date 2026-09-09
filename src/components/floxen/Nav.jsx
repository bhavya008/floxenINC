import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const getSectionHref = (hash) => (isHomePage ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(247,206,46,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
      }}
    >
      <nav className="mx-auto flex items-center justify-between px-[8vw] py-5">
        <Link to="/" aria-label="Floxen home" className="flex items-center">
          <Logo />
        </Link>

        <ul className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={getSectionHref(l.href)}
                className="text-[14px] font-medium uppercase tracking-[0.08em] text-[#121212] hover:opacity-60 transition-opacity"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={getSectionHref('#contact')}
            className="inline-flex items-center justify-center bg-[#121212] text-white font-medium text-[14px] uppercase tracking-[0.08em] px-6 py-3 rounded-full hover:bg-[#2a2a2a] transition-colors"
            style={{ minHeight: 48 }}
          >
            Start a project
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#121212] text-white"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block w-5 h-0.5 bg-white" />
            <span className="block w-5 h-0.5 bg-white" />
            <span className="block w-5 h-0.5 bg-white" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden floxen-yellow border-t border-[#121212]/10">
          <ul className="flex flex-col px-[8vw] py-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={getSectionHref(l.href)}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-[16px] font-medium uppercase tracking-[0.08em] text-[#121212] border-b border-[#121212]/10 last:border-0"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href={getSectionHref('#contact')}
                onClick={() => setOpen(false)}
                className="block text-center bg-[#121212] text-white font-medium text-[14px] uppercase tracking-[0.08em] px-6 py-3 rounded-full"
              >
                Start a project
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
