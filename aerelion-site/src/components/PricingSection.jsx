import { useScrollRevealAll } from '../hooks/useScrollReveal';

const pricingRows = [
  {
    tier:     'Intake Engine',
    scope:    'Tier 1',
    price:    '$4,500 – $7,500',
    timeline: '30 days',
    featured: false,
  },
  {
    tier:     'Delivery Stack',
    scope:    'Tier 2',
    price:    '$12,000 – $22,000',
    timeline: '45 days',
    featured: true,
  },
  {
    tier:     'Full OS Install',
    scope:    'Tier 3',
    price:    '$28,000 – $45,000',
    timeline: '60 days',
    featured: false,
  },
  {
    tier:     'Maintenance Retainer',
    scope:    'Post-Install',
    price:    '$1,200 – $3,500/mo',
    timeline: 'Ongoing',
    featured: false,
    retainer: true,
  },
];

export default function PricingSection() {
  const containerRef = useScrollRevealAll({ threshold: 0.06 });

  return (
    <section
      id="pricing"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: 'var(--surface)' }}
      ref={containerRef}
    >
      {/* Ghost number */}
      <span className="section-ghost-num" style={{ left: '-1rem' }} aria-hidden="true">05</span>

      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="reveal delay-0 mb-4">
          <span className="label-caps" style={{ color: 'var(--accent-blue)' }}>Section 05</span>
        </div>
        <div className="reveal delay-0 divider-line mb-10" />

        <h2
          className="reveal delay-100 m-0 mb-3"
          style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            letterSpacing: '0.04em',
            color: 'var(--text-primary)',
            lineHeight: 1,
          }}
        >
          INVESTMENT
        </h2>
        <p
          className="reveal delay-200 mb-4"
          style={{
            fontFamily: '"DM Mono", monospace',
            fontSize: '0.82rem',
            letterSpacing: '0.08em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
          }}
        >
          You're not buying hours. You're buying the outcome.
        </p>

        {/* Pricing philosophy */}
        <blockquote
          className="reveal delay-200 mb-14 mx-auto max-w-2xl text-center"
          style={{
            margin: '0 0 3.5rem',
            padding: '1.5rem 2rem',
            background: 'var(--panel)',
            borderLeft: '3px solid var(--accent-blue)',
            fontFamily: '"Instrument Serif", serif',
            fontSize: '1rem',
            color: 'var(--text-muted)',
            lineHeight: 1.8,
            fontStyle: 'italic',
          }}
        >
          AERELION prices on transferred liability — not time spent.
          A Tier 2 engagement at $18,000 isn't 60 hours of work.
          It's the elimination of a{' '}
          <span style={{ color: 'var(--text-primary)', fontStyle: 'normal' }}>
            $75,000 annual drag
          </span>{' '}
          on your capacity.
        </blockquote>

        {/* Pricing table */}
        <div
          className="reveal delay-100 mb-10"
          style={{ border: '1px solid var(--border)' }}
          role="table"
          aria-label="AERELION pricing tiers"
        >
          {/* Table header */}
          <div
            className="hidden sm:grid grid-cols-4 px-6 py-4"
            style={{
              background: 'var(--panel)',
              borderBottom: '1px solid var(--border)',
            }}
            role="row"
          >
            {['System', 'Scope', 'Investment', 'Timeline'].map((h) => (
              <div
                key={h}
                className="label-caps"
                style={{ color: 'var(--accent-blue)' }}
                role="columnheader"
              >
                {h}
              </div>
            ))}
          </div>

          {/* Table rows */}
          {pricingRows.map((row, i) => (
            <div
              key={row.tier}
              className={`grid sm:grid-cols-4 gap-2 sm:gap-0 px-6 py-5 transition-colors duration-200 hover:bg-panel ${
                row.retainer ? 'opacity-80' : ''
              }`}
              style={{
                background: row.featured ? 'rgba(27,108,168,0.07)' : 'transparent',
                borderBottom: i < pricingRows.length - 1 ? '1px solid var(--border)' : 'none',
                borderLeft: row.featured ? '3px solid var(--accent-blue)' : '3px solid transparent',
              }}
              role="row"
            >
              <div role="cell">
                <div
                  style={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: '0.82rem',
                    color: row.featured ? 'var(--text-primary)' : 'var(--text-secondary)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {row.tier}
                </div>
                <div className="sm:hidden label-caps mt-1">{row.scope}</div>
              </div>
              <div className="hidden sm:block" role="cell">
                <span className="label-caps">{row.scope}</span>
              </div>
              <div role="cell">
                <span
                  style={{
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: '1.2rem',
                    letterSpacing: '0.04em',
                    color: row.featured ? 'var(--accent-glow)' : 'var(--text-primary)',
                  }}
                >
                  {row.price}
                </span>
              </div>
              <div role="cell">
                <span
                  style={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: '0.75rem',
                    color: 'var(--accent-blue)',
                    letterSpacing: '0.08em',
                  }}
                >
                  {row.timeline}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA note */}
        <div className="reveal delay-200 text-center">
          <p
            style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: '1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              margin: '0 0 1.5rem',
            }}
          >
            Not sure which tier fits?
          </p>
          <a
            href="#cta"
            className="btn-primary"
            aria-label="Request a free System Audit to find the right tier"
          >
            Request a System Audit — it's free →
          </a>
        </div>
      </div>
    </section>
  );
}
