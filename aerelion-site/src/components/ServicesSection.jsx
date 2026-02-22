import { Check, Shield } from 'lucide-react';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

const tiers = [
  {
    number: '01',
    name: 'Intake & Qualification Engine',
    summary: 'AI-powered front-of-funnel that qualifies, routes, and onboards leads without owner involvement.',
    price: '$4,500 – $7,500',
    timeline: '30 days',
    badge: 'Foundation',
    includes: [
      'GPT intake assistant — 24/7 lead qualification',
      'CRM automation & tagging',
      'Conditional routing logic',
      'Automated onboarding sequences',
      'Lead scoring framework',
    ],
    benchmark: '90%+ of inquiries handled without owner intervention',
  },
  {
    number: '02',
    name: 'Delivery Operations Stack',
    summary: 'Mid-engagement intelligence that automates proposals, onboarding, milestone tracking, and client comms.',
    price: '$12,000 – $22,000',
    timeline: '45 days',
    badge: 'Core',
    featured: true,
    includes: [
      'AI proposal engine — personalized at scale',
      'Client onboarding automation',
      'Milestone & deadline tracking',
      'Automated document generation',
      'Client communication sequences',
    ],
    benchmark: '50%+ reduction in proposal-to-signed contract time',
  },
  {
    number: '03',
    name: 'Full Operating System',
    summary: 'End-to-end operational redesign — intake through billing, fully AI-native.',
    price: '$28,000 – $45,000',
    timeline: '60 days',
    badge: 'Complete',
    includes: [
      'All Tier 1 & 2 systems included',
      'Reporting dashboards & analytics',
      'Billing & invoicing automation',
      'AI meeting summaries & action items',
      '30-day post-install support',
    ],
    benchmark: '60%+ reduction in owner time on admin tasks',
  },
];

function TierCard({ tier, index }) {
  const delayClass = ['delay-0', 'delay-100', 'delay-200'][index];

  return (
    <div
      className={`reveal ${delayClass} card-hover flex flex-col relative overflow-hidden`}
      style={{
        background: tier.featured ? 'var(--panel)' : 'var(--surface)',
        borderColor: tier.featured ? 'var(--accent-blue)' : 'var(--border)',
        padding: '2rem',
      }}
    >
      {/* Featured accent bar */}
      {tier.featured && (
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: 'var(--accent-blue)' }}
          aria-hidden="true"
        />
      )}

      {/* Tier number ghost */}
      <span
        className="absolute top-4 right-4"
        style={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: '4rem',
          color: 'rgba(232,237,244,0.04)',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
        aria-hidden="true"
      >
        {tier.number}
      </span>

      {/* Badge */}
      <div className="mb-4">
        <span
          className="label-caps"
          style={{
            background: tier.featured ? 'var(--accent-blue)' : 'transparent',
            border: tier.featured ? 'none' : '1px solid var(--border)',
            color: tier.featured ? '#fff' : 'var(--text-muted)',
            padding: '0.2rem 0.6rem',
          }}
        >
          Tier {tier.number} — {tier.badge}
        </span>
      </div>

      {/* Name */}
      <h3
        className="m-0 mb-3"
        style={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
          letterSpacing: '0.05em',
          color: 'var(--text-primary)',
          lineHeight: 1.1,
        }}
      >
        {tier.name}
      </h3>

      {/* Summary */}
      <p
        className="m-0 mb-6 flex-0"
        style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: '0.95rem',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
        }}
      >
        {tier.summary}
      </p>

      {/* Price + timeline */}
      <div
        className="flex items-baseline gap-4 mb-6 pb-6"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <span
          style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: '1.75rem',
            letterSpacing: '0.04em',
            color: tier.featured ? 'var(--accent-glow)' : 'var(--text-primary)',
          }}
        >
          {tier.price}
        </span>
        <span
          className="label-caps"
          style={{ color: 'var(--accent-blue)' }}
        >
          {tier.timeline}
        </span>
      </div>

      {/* Includes list */}
      <ul className="list-none m-0 p-0 mb-6 flex flex-col gap-3 flex-1">
        {tier.includes.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check
              size={14}
              strokeWidth={2}
              className="mt-0.5 flex-shrink-0"
              style={{ color: 'var(--accent-blue)' }}
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

      {/* Benchmark */}
      <div
        className="mt-auto pt-5"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="label-caps mb-1" style={{ color: 'var(--accent-blue)' }}>
          Activation Benchmark
        </div>
        <p
          className="m-0"
          style={{
            fontFamily: '"DM Mono", monospace',
            fontSize: '0.78rem',
            color: 'var(--text-primary)',
          }}
        >
          {tier.benchmark}
        </p>
      </div>

      {/* CTA */}
      <div className="mt-6">
        <a
          href="#cta"
          className={tier.featured ? 'btn-primary w-full justify-center' : 'btn-ghost w-full justify-center'}
          aria-label={`Request audit for ${tier.name}`}
        >
          Request a System Audit →
        </a>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const containerRef = useScrollRevealAll({ threshold: 0.06 });

  return (
    <section
      id="services"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: 'var(--bg)' }}
      ref={containerRef}
    >
      {/* Ghost number */}
      <span className="section-ghost-num" style={{ left: '-1rem' }} aria-hidden="true">02</span>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="reveal delay-0 mb-4">
          <span className="label-caps" style={{ color: 'var(--accent-blue)' }}>Section 02</span>
        </div>
        <div className="reveal delay-0 divider-line mb-10" />

        <div className="reveal delay-100 mb-4">
          <h2
            className="m-0"
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              letterSpacing: '0.04em',
              color: 'var(--text-primary)',
              lineHeight: 1,
            }}
          >
            WHAT WE INSTALL
          </h2>
        </div>

        <p
          className="reveal delay-200 mb-14"
          style={{
            fontFamily: '"DM Mono", monospace',
            fontSize: '0.82rem',
            letterSpacing: '0.08em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
          }}
        >
          Fixed-scope. Outcome-guaranteed. 30 days.
        </p>

        {/* Tier cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <TierCard key={tier.number} tier={tier} index={i} />
          ))}
        </div>

        {/* Guarantee bar */}
        <div
          className="reveal delay-200 mt-10 p-5 flex items-start gap-4"
          style={{
            background: 'var(--panel)',
            border: '1px solid var(--border)',
            borderLeft: '3px solid var(--accent-blue)',
          }}
        >
          <Shield
            size={18}
            strokeWidth={1.5}
            className="mt-0.5 flex-shrink-0"
            style={{ color: 'var(--accent-blue)' }}
          />
          <div>
            <span
              className="label-caps block mb-1"
              style={{ color: 'var(--accent-blue)' }}
            >
              Performance Confirmation Protocol
            </span>
            <p
              className="m-0"
              style={{
                fontFamily: '"DM Mono", monospace',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
              }}
            >
              Every engagement includes pre-agreed, measurable benchmarks.
              We don't stop working until they're hit. Fixed scope, fixed price,
              defined performance criteria before a dollar changes hands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
