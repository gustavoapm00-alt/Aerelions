// TODO: Replace social links and contact email with real values

const navLinks = [
  { label: 'What We Do',   href: '#services' },
  { label: 'How It Works', href: '#process' },
  { label: 'Results',      href: '#proof' },
  { label: 'Pricing',      href: '#pricing' },
  { label: 'About',        href: '#about' },
  { label: 'FAQ',          href: '#faq' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--accent-blue)',
      }}
    >
      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 lg:py-16">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">

          {/* LEFT: Logo + tagline */}
          <div>
            <a
              href="#hero"
              className="inline-flex items-center no-underline mb-4"
              aria-label="AERELION SYSTEMS"
            >
              <span
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: '1.8rem',
                  letterSpacing: '0.15em',
                  color: 'var(--text-primary)',
                }}
              >
                AERELI
              </span>
              <span
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: '1.8rem',
                  letterSpacing: '0.15em',
                  color: 'var(--accent-blue)',
                }}
              >
                ON
              </span>
            </a>
            <p
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                lineHeight: 1.75,
                margin: '0 0 1rem',
                maxWidth: '22rem',
                fontStyle: 'italic',
              }}
            >
              We install AI systems that think, route, and execute — so you can
              focus on the work only you can do.
            </p>
            <div className="label-caps">Managed Automation Operator</div>
          </div>

          {/* CENTER: Nav links */}
          <div>
            <div
              className="label-caps mb-5"
              style={{ color: 'var(--accent-blue)' }}
            >
              Navigation
            </div>
            <ul className="list-none m-0 p-0 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="no-underline transition-colors duration-200"
                    style={{
                      fontFamily: '"DM Mono", monospace',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.06em',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--text-primary)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Contact + social */}
          <div>
            <div
              className="label-caps mb-5"
              style={{ color: 'var(--accent-blue)' }}
            >
              Contact
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <div className="label-caps mb-1">Website</div>
                <span
                  style={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  {/* TODO: Replace with live domain */}
                  aerelion.systems
                </span>
              </div>

              <div>
                <div className="label-caps mb-1">Email</div>
                <a
                  href="mailto:hello@aerelion.systems"
                  style={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-glow)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
                >
                  {/* TODO: Replace with real contact email */}
                  hello@aerelion.systems
                </a>
              </div>

              <div className="mt-2">
                <div className="label-caps mb-3">Social</div>
                <div className="flex gap-3">
                  {/* TODO: Replace # with real social profile URLs */}
                  {['LinkedIn', 'X'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="label-caps no-underline transition-colors duration-200"
                      style={{
                        padding: '0.3rem 0.6rem',
                        border: '1px solid var(--border)',
                        color: 'var(--text-muted)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent-blue)';
                        e.currentTarget.style.color = 'var(--accent-blue)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border)';
                        e.currentTarget.style.color = 'var(--text-muted)';
                      }}
                      aria-label={`AERELION on ${platform}`}
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span
            style={{
              fontFamily: '"DM Mono", monospace',
              fontSize: '0.65rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.06em',
            }}
          >
            © 2026 AERELION SYSTEMS. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: '"DM Mono", monospace',
              fontSize: '0.6rem',
              color: 'var(--border)',
              letterSpacing: '0.05em',
              maxWidth: '42rem',
            }}
          >
            Confidentiality notice: This site and its contents are intended for qualified operators only.
          </span>
        </div>
      </div>
    </footer>
  );
}
