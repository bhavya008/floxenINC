import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const EMAIL = 'floxeninc@gmail.com';
const PHONE = '647-461-9424';
const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/floxeninc/', Icon: Instagram },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61594079846123',
    Icon: Facebook,
  },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/floxen-inc/', Icon: Linkedin },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    navigator.clipboard?.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
    window.location.href = `mailto:${EMAIL}`;
  };

  return (
    <footer id="contact" className="bg-[#121212] text-white relative overflow-hidden">
      <div className="mx-auto px-[8vw] pt-24 md:pt-32 pb-12">
        <RevealLocal
          as="p"
          className="text-[13px] font-medium uppercase tracking-[0.18em] text-white/50"
        >
          Let's build something
        </RevealLocal>
        <RevealLocal
          as="h2"
          className="mt-6 font-display"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 5vw)',
            letterSpacing: '-0.04em',
            maxWidth: '18ch',
          }}
        >
          Say hello.
        </RevealLocal>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            onClick={handleClick}
            className="inline-flex items-center justify-center floxen-yellow text-[#121212] font-medium text-[15px] uppercase tracking-[0.08em] px-8 py-4 rounded-full hover:bg-[#f7ce2e]/85 transition-colors"
            style={{ minHeight: 56 }}
          >
            Email us
          </a>
          <a
            href={`tel:${PHONE.replace(/[^0-9+]/g, '')}`}
            className="inline-flex items-center justify-center border border-white/30 text-white font-medium text-[15px] uppercase tracking-[0.08em] px-8 py-4 rounded-full hover:bg-white hover:text-[#121212] transition-colors"
            style={{ minHeight: 56 }}
          >
            {PHONE}
          </a>
        </div>

        <div className="mt-20 pt-8 border-t border-white/15 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Logo onDark />
          <ul className="flex flex-wrap gap-3">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white/80 hover:text-[#121212] hover:bg-[#F7CE2E] hover:border-[#F7CE2E] transition-colors"
                >
                  <s.Icon className="w-5 h-5" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-[13px] text-white/60 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <p className="text-[13px] text-white/40">
              © {new Date().getFullYear()} Floxen. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function RevealLocal({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`reveal is-visible ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
