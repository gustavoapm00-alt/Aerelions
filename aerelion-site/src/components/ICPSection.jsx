import { Check, X } from 'lucide-react';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

const fitCriteria = [
  'You generate $300K–$3M in annual revenue',
  'You run a consulting, coaching, legal, financial, agency, or real estate operation',
  'You\'ve already tried to "fix" this manually and it didn\'t hold',
  'You make decisions based on certainty, not lowest cost',
  'You want outcomes measured, not effort billed',
];

const notFitCriteria = [
  'You need a freelancer to handle one-off tasks',
  'You\'re pre-revenue or under $300K ARR',
  'You\'re looking for the cheapest automation option',
  'You need an agency to manage your marketing',
];

export default function ICPSection() {
  const containerRef = useScrollRevealAll({ threshold: 0.08 });

  return (
    <section
      id="icp"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: 'var(--bg)' }}
      ref={containerRef}
    >
      {/* Ghost number */}
      <span className="section-ghost-num" style={{ left: '-1rem' }} aria-hidden="true">06</span>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="reveal delay-0 mb-4">
          <span className="label-caps" style={{ color: 'var(--accent-blue)' }}>Section 06</span>
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
          WHO THIS IS FOR
        </h2>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT: Prose */}
          <div className="reveal delay-0">
            <p
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                lineHeight: 1.85,
                margin: '0 0 1.5rem',
              }}
            >
              AERELION works with a specific kind of operator.
            </p>
            <p
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                lineHeight: 1.85,
                margin: '0 0 1.5rem',
              }}
            >
              Not every business is ready. The ones we take on share a common
              profile: they generate real revenue, they've hit a friction ceiling,
              and they're done tolerating the inefficiency.
            </p>
            <p
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: '1.1rem',
                color: 'var(--text-primary)',
                lineHeight: 1.85,
                margin: '0 0 2rem',
                fontStyle: 'italic',
              }}
            >
              If you're looking for the cheapest way to add automation,
              this isn't it. If you want the certainty of a system that works
              from day one, we should talk.
            </p>

            {/* Not a fit */}
            <div
              className="p-5"
              style={{
                background: 'var(--panel)',
                border: '1px solid var(--border)',
              }}
            >
              <div
                className="label-caps mb-4"
                style={{ color: 'var(--text-muted)' }}
              >
                Not a Fit
              </div>
              <ul className="list-none m-0 p-0 flex flex-col gap-3">
                {notFitCriteria.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X
                      size={14}
                      strokeWidth={2}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--danger)' }}
                    />
                    <span
                      style={{
                        fontFamily: '"DM Mono", monospace',
                        fontSize: '0.78rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: Criteria card */}
          <div className="reveal delay-200">
            <div
              className="p-7 lg:p-9"
              style={{
                background: 'var(--panel)',
                border: '1px solid var(--border)',
                borderTop: '3px solid var(--accent-blue)',
              }}
            >
              <div
                className="label-caps mb-6"
                style={{ color: 'var(--accent-blue)' }}
              >
                You're a fit if:
              </div>

              <ul className="list-none m-0 p-0 flex flex-col gap-5">
                {fitCriteria.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div
                      className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: 'rgba(27,108,168,0.15)',
                        border: '1px solid var(--accent-blue)',
                      }}
                    >
                      <Check
                        size={12}
                        strokeWidth={2.5}
                        style={{ color: 'var(--accent-glow)' }}
                      />
                    </div>
                    <span
                      style={{
                        fontFamily: '"Instrument Serif", serif',
                        fontSize: '1rem',
                        color: 'var(--text-primary)',
                        lineHeight: 1.65,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div
                className="mt-8 pt-8"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                <p
                  style={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                    margin: '0 0 1.25rem',
                  }}
                >
                  Not sure if you qualify?
                </p>
                <a
                  href="#cta"
                  className="btn-ghost"
                  style={{ width: '100%', justifyContent: 'center' }}
                  aria-label="Book a 20-minute qualification call"
                >
                  Book a 20-min call. We'll tell you honestly. →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
