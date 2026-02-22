import { useRef, useState, useEffect } from 'react';
import { useCountUp } from '../hooks/useCountUp';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

// TODO: Replace placeholder testimonials with real client quotes
const testimonials = [
  {
    quote:
      'AERELION installed a system in 28 days that eliminated 14 hours of weekly admin. I haven\'t touched onboarding since.',
    name: '{TODO: Client Name}',
    role: '{TODO: Role}',
    industry: '{TODO: Industry}',
  },
  {
    quote:
      'Our proposal cycle went from 4 days to 6 hours. We closed 40% more deals in Q1 with the same headcount.',
    name: '{TODO: Client Name}',
    role: '{TODO: Role}',
    industry: '{TODO: Industry}',
  },
  {
    quote:
      'I was skeptical. The benchmark was hit on day 29. The system has run without intervention for 4 months.',
    name: '{TODO: Client Name}',
    role: '{TODO: Role}',
    industry: '{TODO: Industry}',
  },
];

function StatCounter({ value, suffix = '', prefix = '', label, triggered }) {
  const count = useCountUp(value, 1600, triggered);

  return (
    <div className="flex flex-col items-center text-center">
      <div
        style={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: 'clamp(3rem, 7vw, 5.5rem)',
          letterSpacing: '0.04em',
          color: 'var(--accent-glow)',
          lineHeight: 1,
        }}
      >
        {prefix}{count}{suffix}
      </div>
      <div
        className="label-caps mt-2"
        style={{ color: 'var(--text-muted)', maxWidth: '12rem' }}
      >
        {label}
      </div>
    </div>
  );
}

// Wrapper that triggers counter when visible
function StatsRow() {
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); obs.unobserve(el); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 py-12"
      style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <StatCounter value={30}  suffix=""    label="Day delivery guarantee"                triggered={triggered} />
      <StatCounter value={60}  suffix="%+"  label="Average reduction in owner admin time" triggered={triggered} />
      <StatCounter value={50}  suffix="%+"  label="Average reduction in sales cycle"      triggered={triggered} />
      <StatCounter value={0}   prefix="$"   label="Additional cost if benchmarks aren't hit" triggered={triggered} />
    </div>
  );
}

function TestimonialCard({ testimonial, delay }) {
  return (
    <div
      className={`reveal ${delay} card-hover p-7 flex flex-col gap-5`}
      style={{ background: 'var(--panel)' }}
    >
      {/* Quotation mark */}
      <span
        style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: '4rem',
          color: 'var(--accent-blue)',
          lineHeight: 0.5,
          opacity: 0.6,
        }}
        aria-hidden="true"
      >
        "
      </span>

      {/* Quote text */}
      <p
        className="m-0 flex-1"
        style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: '1.05rem',
          color: 'var(--text-primary)',
          lineHeight: 1.75,
          fontStyle: 'italic',
        }}
      >
        {testimonial.quote}
      </p>

      {/* Attribution */}
      <div
        className="pt-5 flex flex-col gap-1"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <span
          style={{
            fontFamily: '"DM Mono", monospace',
            fontSize: '0.78rem',
            color: 'var(--text-primary)',
            letterSpacing: '0.05em',
          }}
        >
          {testimonial.name}
        </span>
        <span className="label-caps">
          {testimonial.role} · {testimonial.industry}
        </span>
      </div>
    </div>
  );
}

export default function ProofSection() {
  const containerRef = useScrollRevealAll({ threshold: 0.06 });

  return (
    <section
      id="proof"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: 'var(--bg)' }}
      ref={containerRef}
    >
      {/* Ghost number */}
      <span className="section-ghost-num" style={{ left: '-1rem' }} aria-hidden="true">04</span>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="reveal delay-0 mb-4">
          <span className="label-caps" style={{ color: 'var(--accent-blue)' }}>Section 04</span>
        </div>
        <div className="reveal delay-0 divider-line mb-10" />

        <h2
          className="reveal delay-100 m-0 mb-4"
          style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            letterSpacing: '0.04em',
            color: 'var(--text-primary)',
            lineHeight: 1,
          }}
        >
          THE NUMBERS
        </h2>
        <p
          className="reveal delay-200 mb-14 max-w-xl"
          style={{
            fontFamily: '"Instrument Serif", serif',
            fontSize: '1rem',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
          }}
        >
          Benchmarks agreed before the engagement starts. Measured on day 30. No ambiguity.
        </p>

        {/* Stats row */}
        <StatsRow />

        {/* Testimonials */}
        <div className="mb-6">
          <div className="reveal delay-0 mb-4">
            <span className="label-caps" style={{ color: 'var(--accent-blue)' }}>
              Client Results
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              testimonial={t}
              delay={['delay-0','delay-100','delay-200'][i]}
            />
          ))}
        </div>

        {/* Note */}
        <p
          className="reveal delay-100 mt-6 text-center"
          style={{
            fontFamily: '"DM Mono", monospace',
            fontSize: '0.65rem',
            color: 'var(--border)',
            letterSpacing: '0.08em',
          }}
        >
          {/* TODO: Replace placeholder testimonials with real client quotes */}
          TESTIMONIALS ARE PLACEHOLDER — REPLACE WITH VERIFIED CLIENT RESULTS
        </p>
      </div>
    </section>
  );
}
