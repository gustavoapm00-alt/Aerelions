import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'What We Do',    href: '#services' },
  { label: 'How It Works',  href: '#process' },
  { label: 'Results',       href: '#proof' },
  { label: 'Pricing',       href: '#pricing' },
  { label: 'About',         href: '#about' },
];

export default function NavBar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'nav-frosted' : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Primary navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-1 no-underline"
            aria-label="AERELION SYSTEMS — home"
          >
            <span
              className="font-display text-2xl lg:text-3xl tracking-[0.15em] text-text-primary"
              style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.15em' }}
            >
              AERELI
            </span>
            <span
              className="font-display text-2xl lg:text-3xl tracking-[0.15em]"
              style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.15em', color: 'var(--accent-blue)' }}
            >
              ON
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="label-caps text-text-secondary hover:text-text-primary transition-colors duration-200 no-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#cta"
            className="btn-primary hidden lg:inline-flex"
            aria-label="Request a System Audit"
          >
            Request a System Audit →
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-text-primary p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center items-center transition-all duration-300 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(5,12,24,0.97)', backdropFilter: 'blur(16px)' }}
        aria-hidden={!menuOpen}
      >
        <ul className="list-none m-0 p-0 flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="font-display text-4xl tracking-widest text-text-primary hover:text-accent-glow transition-colors no-underline"
                style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.12em' }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href="#cta"
              onClick={closeMenu}
              className="btn-primary"
            >
              Request a System Audit →
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
