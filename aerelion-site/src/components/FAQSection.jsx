import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

const faqs = [
  {
    q: 'Do I need to switch my existing tools?',
    a: 'No. AERELION builds inside your current stack. No rip-and-replace. We map what you already have during the System Audit and build integrations that slot in without disrupting active workflows.',
  },
  {
    q: "What if the benchmarks aren't hit?",
    a: "We keep working at no additional charge until they are. Every engagement starts with agreed, measurable performance targets. Done doesn't mean delivered — it means the benchmarks are confirmed.",
  },
  {
    q: 'How is this different from hiring an automation freelancer?',
    a: "Freelancers bill hours. AERELION owns outcomes. Fixed scope, fixed price, defined performance criteria before a dollar changes hands. You're not paying for effort — you're paying for a working system.",
  },
  {
    q: 'What businesses do you work with?',
    a: 'Professional service operators: consultants, coaches, legal, financial advisory, agencies, real estate teams. $300K–$3M ARR. If you generate real revenue and have a real friction ceiling, we should talk.',
  },
  {
    q: "What's included in a System Audit?",
    a: "A free 45-minute operational review that maps your top 3 friction zones and identifies the highest-leverage system to install first. We'll tell you exactly what we'd build, what it would cost, and what the benchmark would be. No obligation.",
  },
  {
    q: 'How soon can we start?',
    a: 'Typically within 2 weeks of engagement confirmation, depending on current capacity. The System Audit can be scheduled immediately.',
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="reveal"
      style={{
        borderBottom: '1px solid var(--border)',
        transitionDelay: `${index * 60}ms`,
      }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '1.25rem 0',
        }}
      >
        <span
          style={{
            fontFamily: '"DM Mono", monospace',
            fontSize: '0.85rem',
            color: open ? 'var(--text-primary)' : 'var(--text-muted)',
            letterSpacing: '0.04em',
            lineHeight: 1.5,
            transition: 'color 0.2s ease',
            textAlign: 'left',
          }}
        >
          {faq.q}
        </span>
        <div
          className="flex-shrink-0 w-7 h-7 flex items-center justify-center"
          style={{
            border: `1px solid ${open ? 'var(--accent-blue)' : 'var(--border)'}`,
            color: open ? 'var(--accent-blue)' : 'var(--text-muted)',
            transition: 'border-color 0.2s ease, color 0.2s ease',
          }}
          aria-hidden="true"
        >
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </div>
      </button>

      <div
        id={`faq-answer-${index}`}
        className={`faq-answer ${open ? 'open' : ''}`}
        role="region"
      >
        <p
          style={{
            fontFamily: '"Instrument Serif", serif',
            fontSize: '1rem',
            color: 'var(--text-muted)',
            lineHeight: 1.8,
            margin: '0 0 1.25rem',
            paddingRight: '2rem',
          }}
        >
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const containerRef = useScrollRevealAll({ threshold: 0.06 });

  return (
    <section
      id="faq"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: 'var(--bg)' }}
      ref={containerRef}
    >
      {/* Ghost number */}
      <span className="section-ghost-num" style={{ left: '-1rem' }} aria-hidden="true">08</span>

      <div className="max-w-3xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="reveal delay-0 mb-4">
          <span className="label-caps" style={{ color: 'var(--accent-blue)' }}>Section 08</span>
        </div>
        <div className="reveal delay-0 divider-line mb-10" />

        <h2
          className="reveal delay-100 m-0 mb-14"
          style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            letterSpacing: '0.04em',
            color: 'var(--text-primary)',
            lineHeight: 1,
          }}
        >
          COMMON QUESTIONS
        </h2>

        {/* FAQ list */}
        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
