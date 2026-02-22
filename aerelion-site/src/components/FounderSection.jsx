import { User } from 'lucide-react';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

export default function FounderSection() {
  const containerRef = useScrollRevealAll({ threshold: 0.08 });

  return (
    <section
      id="about"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: 'var(--surface)' }}
      ref={containerRef}
    >
      {/* Ghost number */}
      <span className="section-ghost-num" style={{ left: '-1rem' }} aria-hidden="true">07</span>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="reveal delay-0 mb-4">
          <span className="label-caps" style={{ color: 'var(--accent-blue)' }}>Section 07</span>
        </div>
        <div className="reveal delay-0 divider-line mb-10" />

        <h2
          className="reveal delay-100 m-0 mb-16"
          style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            letterSpacing: '0.04em',
            color: 'var(--text-primary)',
            lineHeight: 1,
          }}
        >
          BUILT BY A SYSTEMS ARCHITECT
        </h2>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Founder image placeholder */}
          <div className="reveal delay-0 order-2 lg:order-1">
            {/* TODO: Replace founder image placeholder with actual photo */}
            <div
              className="relative w-full max-w-sm mx-auto lg:mx-0 aspect-[3/4] flex flex-col items-center justify-center gap-4"
              style={{
                background: 'var(--panel)',
                border: '1px solid var(--border)',
              }}
            >
              {/* Corner accents */}
              <div
                className="absolute top-0 left-0 w-8 h-8"
                style={{
                  borderTop: '2px solid var(--accent-blue)',
                  borderLeft: '2px solid var(--accent-blue)',
                }}
                aria-hidden="true"
              />
              <div
                className="absolute top-0 right-0 w-8 h-8"
                style={{
                  borderTop: '2px solid var(--accent-blue)',
                  borderRight: '2px solid var(--accent-blue)',
                }}
                aria-hidden="true"
              />
              <div
                className="absolute bottom-0 left-0 w-8 h-8"
                style={{
                  borderBottom: '2px solid var(--accent-blue)',
                  borderLeft: '2px solid var(--accent-blue)',
                }}
                aria-hidden="true"
              />
              <div
                className="absolute bottom-0 right-0 w-8 h-8"
                style={{
                  borderBottom: '2px solid var(--accent-blue)',
                  borderRight: '2px solid var(--accent-blue)',
                }}
                aria-hidden="true"
              />

              {/* Placeholder icon */}
              <div
                className="w-20 h-20 flex items-center justify-center"
                style={{
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)',
                }}
              >
                <User size={36} strokeWidth={1} />
              </div>

              <div className="text-center px-8">
                <div
                  style={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {/* TODO: Replace with actual founder photo */}
                  Founder Photo
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Bio */}
          <div className="reveal delay-200 order-1 lg:order-2">
            <p
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                lineHeight: 1.9,
                margin: '0 0 1.5rem',
              }}
            >
              AERELION was founded on a single thesis: that the compounding operational
              cost of manual workflows in small service businesses is one of the most
              underaddressed infrastructure problems in modern commerce — and that AI
              has finally crossed the threshold required to solve it.
            </p>
            <p
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                lineHeight: 1.9,
                margin: '0 0 1.5rem',
              }}
            >
              We don't build tools. We install systems that produce documented,
              measurable outcomes — and we don't call a job done until the benchmarks
              are hit.
            </p>
            <p
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: '1.1rem',
                color: 'var(--text-primary)',
                lineHeight: 1.9,
                margin: '0 0 2.5rem',
                fontStyle: 'italic',
              }}
            >
              Premium positioning isn't a pricing strategy at AERELION.
              It's an integrity standard.
            </p>

            {/* Founder attribution */}
            <div
              className="pt-6"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              <div
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: '1.4rem',
                  letterSpacing: '0.1em',
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem',
                }}
              >
                GUSTAVO
              </div>
              <div className="label-caps">
                Founder & Principal Operator — AERELION SYSTEMS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
