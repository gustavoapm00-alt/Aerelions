import { ChevronDown } from 'lucide-react';

/* Abstract SVG network node diagram — low-opacity right-side visual */
function NetworkSVG() {
  return (
    <svg
      viewBox="0 0 600 500"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#2A8FE0" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#2A8FE0" stopOpacity="0"   />
        </radialGradient>
      </defs>

      {/* Connection lines */}
      <g stroke="#1B6CA8" strokeWidth="0.8" opacity="0.5">
        <line x1="300" y1="250" x2="120" y2="120" />
        <line x1="300" y1="250" x2="480" y2="100" />
        <line x1="300" y1="250" x2="500" y2="300" />
        <line x1="300" y1="250" x2="420" y2="420" />
        <line x1="300" y1="250" x2="160" y2="400" />
        <line x1="300" y1="250" x2="80"  y2="300" />
        <line x1="120" y1="120" x2="480" y2="100" />
        <line x1="480" y1="100" x2="500" y2="300" />
        <line x1="500" y1="300" x2="420" y2="420" />
        <line x1="420" y1="420" x2="160" y2="400" />
        <line x1="160" y1="400" x2="80"  y2="300" />
        <line x1="80"  y1="300" x2="120" y2="120" />
        {/* Secondary connections */}
        <line x1="120" y1="120" x2="300" y2="60"  opacity="0.3" />
        <line x1="480" y1="100" x2="560" y2="180"  opacity="0.3" />
        <line x1="500" y1="300" x2="560" y2="400"  opacity="0.3" />
        <line x1="80"  y1="300" x2="40"  y2="200"  opacity="0.3" />
        <line x1="160" y1="400" x2="80"  y2="470"  opacity="0.3" />
      </g>

      {/* Secondary nodes */}
      <g fill="#0F1E35" stroke="#1B6CA8" strokeWidth="0.8">
        <circle cx="300" cy="60"  r="4" opacity="0.4" />
        <circle cx="560" cy="180" r="4" opacity="0.4" />
        <circle cx="560" cy="400" r="4" opacity="0.4" />
        <circle cx="40"  cy="200" r="4" opacity="0.4" />
        <circle cx="80"  cy="470" r="4" opacity="0.4" />
      </g>

      {/* Primary nodes */}
      <g>
        {[
          [300, 250, 10, 1],
          [120, 120,  7, 0.8],
          [480, 100,  7, 0.8],
          [500, 300,  7, 0.8],
          [420, 420,  7, 0.8],
          [160, 400,  7, 0.8],
          [80,  300,  7, 0.8],
        ].map(([cx, cy, r, op], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r={r * 2.5} fill="url(#nodeGlow)" opacity={op * 0.3} />
            <circle cx={cx} cy={cy} r={r} fill="#0A1628" stroke="#2A8FE0" strokeWidth="1.2" opacity={op} />
            <circle cx={cx} cy={cy} r={r * 0.4} fill="#2A8FE0" opacity={op * 0.9} />
          </g>
        ))}
      </g>

      {/* Floating data labels */}
      <g fill="#2A8FE0" fontFamily="'DM Mono', monospace" fontSize="7" opacity="0.35">
        <text x="310" y="246">INTAKE</text>
        <text x="125" y="116">ROUTE</text>
        <text x="432" y="96" >QUALIFY</text>
        <text x="505" y="296">EXECUTE</text>
        <text x="426" y="416">REPORT</text>
        <text x="130" y="410">ONBOARD</text>
        <text x="52"  y="296">TRACK</text>
      </g>
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #050C18 0%, #0A1628 100%)' }}
    >
      {/* Subtle radial glow bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(27,108,168,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT: Text content */}
          <div className="relative z-10">
            {/* Pre-label */}
            <div className="hero-line mb-6">
              <span className="label-caps" style={{ color: 'var(--accent-blue)' }}>
                Managed Automation Operator
              </span>
            </div>

            {/* Main headline */}
            <h1 className="m-0 p-0 leading-none">
              <span
                className="hero-line block"
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: 'clamp(4rem, 9vw, 7.5rem)',
                  letterSpacing: '0.03em',
                  color: 'var(--text-primary)',
                  lineHeight: 0.95,
                }}
              >
                WE REMOVE THE
              </span>
              <span
                className="hero-line block"
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: 'clamp(4rem, 9vw, 7.5rem)',
                  letterSpacing: '0.03em',
                  color: 'var(--accent-glow)',
                  lineHeight: 0.95,
                }}
              >
                OPERATIONAL
              </span>
              <span
                className="hero-line block"
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: 'clamp(4rem, 9vw, 7.5rem)',
                  letterSpacing: '0.03em',
                  color: 'var(--text-primary)',
                  lineHeight: 0.95,
                }}
              >
                CEILING.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="hero-sub mt-8 mb-10 max-w-xl leading-relaxed"
              style={{
                fontFamily: '"DM Mono", monospace',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                lineHeight: 1.8,
              }}
            >
              AERELION installs AI-powered operational systems inside your
              professional service business — eliminating manual overhead,
              compressing delivery timelines, and creating documented
              performance lift.{' '}
              <span style={{ color: 'var(--text-primary)' }}>In 30 days.</span>
            </p>

            {/* CTAs */}
            <div className="hero-ctas flex flex-wrap gap-4">
              <a
                href="#cta"
                className="btn-primary animate-glow-pulse"
                aria-label="Request a System Audit — free 45-minute review"
              >
                Request a System Audit →
              </a>
              <a
                href="#services"
                className="btn-ghost"
                aria-label="See what AERELION installs"
              >
                See What We Install
              </a>
            </div>

            {/* Key stat below CTAs */}
            <div
              className="hero-ctas mt-10 flex gap-8"
              style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}
            >
              {[
                ['30', 'Day guarantee'],
                ['60%+', 'Admin time saved'],
                ['$0', 'If benchmarks aren\'t hit'],
              ].map(([val, lbl]) => (
                <div key={lbl}>
                  <div
                    style={{
                      fontFamily: '"Bebas Neue", sans-serif',
                      fontSize: '1.75rem',
                      color: 'var(--accent-glow)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {val}
                  </div>
                  <div className="label-caps" style={{ marginTop: '2px' }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Network SVG visual */}
          <div
            className="relative lg:block w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto opacity-80"
            aria-hidden="true"
            style={{ minHeight: '320px' }}
          >
            <NetworkSVG />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="hero-scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="label-caps" style={{ fontSize: '0.6rem' }}>scroll</span>
        <ChevronDown
          size={16}
          color="var(--text-muted)"
          className="animate-chevron-bob"
        />
      </div>
    </section>
  );
}
