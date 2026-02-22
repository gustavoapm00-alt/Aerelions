import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

// Wire to Formspree or similar in production
// TODO: Replace FORMSPREE_ENDPOINT with actual form endpoint
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/{YOUR_FORM_ID}';

const revenueRanges = [
  'Under $300K ARR',
  '$300K – $750K ARR',
  '$750K – $1.5M ARR',
  '$1.5M – $3M ARR',
  'Over $3M ARR',
];

const businessTypes = [
  'Consulting',
  'Coaching',
  'Legal',
  'Financial Advisory',
  'Agency',
  'Real Estate',
  'Other Professional Services',
];

export default function FinalCTA() {
  const containerRef = useScrollRevealAll({ threshold: 0.06 });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    name: '',
    businessType: '',
    revenueRange: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      // Wire to Formspree in production — replace endpoint above
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Email us directly at hello@aerelion.systems');
      }
    } catch {
      // Fallback: form shows success visually in demo; wire real endpoint in production
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  /* Radial SVG node background for CTA section */
  const NodesBG = () => (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{ opacity: 0.06 }}
    >
      <defs>
        <radialGradient id="ctaGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2A8FE0" stopOpacity="1" />
          <stop offset="100%" stopColor="#2A8FE0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="600" cy="300" r="260" fill="url(#ctaGlow)" />
      {/* Concentric rings */}
      {[180, 280, 380, 480].map((r) => (
        <circle key={r} cx="600" cy="300" r={r} fill="none" stroke="#1B6CA8" strokeWidth="0.5" />
      ))}
      {/* Spoke lines */}
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={600}
            y1={300}
            x2={600 + Math.cos(angle) * 480}
            y2={300 + Math.sin(angle) * 480}
            stroke="#1B6CA8"
            strokeWidth="0.4"
          />
        );
      })}
    </svg>
  );

  return (
    <section
      id="cta"
      className="relative min-h-screen flex items-center py-28 lg:py-36 overflow-hidden"
      style={{ background: 'var(--bg)' }}
      ref={containerRef}
    >
      <NodesBG />

      {/* Center radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(27,108,168,0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 w-full">

        {/* Dramatic headline */}
        <div className="text-center mb-16">
          <div className="reveal delay-0 mb-6">
            <span className="label-caps" style={{ color: 'var(--accent-blue)' }}>
              Ready to Operate at a Different Level?
            </span>
          </div>

          <h2 className="m-0 mb-6">
            <span
              className="reveal delay-0 block"
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: 'clamp(4.5rem, 12vw, 10rem)',
                letterSpacing: '0.03em',
                color: 'var(--text-primary)',
                lineHeight: 0.9,
              }}
            >
              THE CEILING
            </span>
            <span
              className="reveal delay-100 block"
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: 'clamp(4.5rem, 12vw, 10rem)',
                letterSpacing: '0.03em',
                color: 'var(--accent-glow)',
                lineHeight: 0.9,
              }}
            >
              HAS BEEN
            </span>
            <span
              className="reveal delay-200 block"
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: 'clamp(4.5rem, 12vw, 10rem)',
                letterSpacing: '0.03em',
                color: 'var(--text-primary)',
                lineHeight: 0.9,
              }}
            >
              REMOVED.
            </span>
          </h2>

          <p
            className="reveal delay-300 mx-auto max-w-md mt-6"
            style={{
              fontFamily: '"DM Mono", monospace',
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
            }}
          >
            Your system is ready to be installed.
          </p>
        </div>

        {/* Contact form */}
        <div
          className="reveal delay-200 max-w-2xl mx-auto"
          style={{
            background: 'var(--panel)',
            border: '1px solid var(--border)',
            borderTop: '3px solid var(--accent-blue)',
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          }}
        >
          {submitted ? (
            <div className="flex flex-col items-center gap-5 py-8 text-center">
              <CheckCircle size={40} strokeWidth={1.5} style={{ color: 'var(--accent-blue)' }} />
              <div>
                <div
                  style={{
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: '1.6rem',
                    letterSpacing: '0.08em',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  REQUEST RECEIVED
                </div>
                <p
                  style={{
                    fontFamily: '"Instrument Serif", serif',
                    fontSize: '1rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  We review every audit request personally. Expect a response
                  within 24 hours to confirm your 45-minute session.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div
                className="mb-7"
                style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1.25rem' }}
              >
                <div
                  style={{
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: '1.4rem',
                    letterSpacing: '0.08em',
                    color: 'var(--text-primary)',
                    marginBottom: '0.35rem',
                  }}
                >
                  REQUEST A SYSTEM AUDIT
                </div>
                <div className="label-caps">
                  Free 45-minute operational review · No obligation
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col gap-5">

                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="cta-name"
                      className="label-caps"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Your Name *
                    </label>
                    <input
                      id="cta-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="First and last name"
                      style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                        fontFamily: '"DM Mono", monospace',
                        fontSize: '0.82rem',
                        padding: '0.75rem 1rem',
                        outline: 'none',
                        width: '100%',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent-blue)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>

                  {/* Business type + Revenue row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="cta-businessType"
                        className="label-caps"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Business Type *
                      </label>
                      <select
                        id="cta-businessType"
                        name="businessType"
                        required
                        value={form.businessType}
                        onChange={handleChange}
                        style={{
                          background: 'var(--surface)',
                          border: '1px solid var(--border)',
                          color: form.businessType ? 'var(--text-primary)' : 'var(--text-muted)',
                          fontFamily: '"DM Mono", monospace',
                          fontSize: '0.82rem',
                          padding: '0.75rem 1rem',
                          outline: 'none',
                          width: '100%',
                          appearance: 'none',
                          cursor: 'pointer',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = 'var(--accent-blue)')}
                        onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                        aria-label="Select your business type"
                      >
                        <option value="" disabled>Select type</option>
                        {businessTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="cta-revenueRange"
                        className="label-caps"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Annual Revenue *
                      </label>
                      <select
                        id="cta-revenueRange"
                        name="revenueRange"
                        required
                        value={form.revenueRange}
                        onChange={handleChange}
                        style={{
                          background: 'var(--surface)',
                          border: '1px solid var(--border)',
                          color: form.revenueRange ? 'var(--text-primary)' : 'var(--text-muted)',
                          fontFamily: '"DM Mono", monospace',
                          fontSize: '0.82rem',
                          padding: '0.75rem 1rem',
                          outline: 'none',
                          width: '100%',
                          appearance: 'none',
                          cursor: 'pointer',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = 'var(--accent-blue)')}
                        onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                        aria-label="Select your revenue range"
                      >
                        <option value="" disabled>Select range</option>
                        {revenueRanges.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="cta-message"
                      className="label-caps"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Describe Your Biggest Operational Bottleneck
                    </label>
                    <textarea
                      id="cta-message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What's the single biggest thing slowing your operation down right now?"
                      style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                        fontFamily: '"DM Mono", monospace',
                        fontSize: '0.82rem',
                        padding: '0.75rem 1rem',
                        outline: 'none',
                        width: '100%',
                        resize: 'vertical',
                        lineHeight: 1.6,
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent-blue)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <p
                      style={{
                        fontFamily: '"DM Mono", monospace',
                        fontSize: '0.75rem',
                        color: 'var(--danger)',
                        margin: 0,
                      }}
                    >
                      {error}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center"
                    aria-label="Submit your System Audit request"
                    style={{ opacity: submitting ? 0.7 : 1 }}
                  >
                    {submitting ? (
                      'Submitting...'
                    ) : (
                      <>
                        <Send size={14} />
                        Request System Audit →
                      </>
                    )}
                  </button>

                  {/* Micro-copy */}
                  <p
                    className="text-center m-0"
                    style={{
                      fontFamily: '"DM Mono", monospace',
                      fontSize: '0.65rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    Free 45-minute operational review. No obligation. We review personally.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
