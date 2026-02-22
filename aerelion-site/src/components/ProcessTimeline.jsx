import { useState } from 'react';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

const steps = [
  {
    number: '01',
    name: 'System Audit',
    timeline: 'Days 1–3',
    description:
      'Operational map of all friction points, current tools, and priority leverage zones. We build a complete picture before touching a single workflow.',
  },
  {
    number: '02',
    name: 'Architecture Design',
    timeline: 'Days 4–8',
    description:
      'Signed-off system blueprint with tool selection, integration logic, and agreed performance benchmarks. Nothing is built until both parties sign off.',
  },
  {
    number: '03',
    name: 'Build & Integration',
    timeline: 'Days 9–22',
    description:
      'Full system built inside your existing stack. No rip-and-replace. Every integration tested against your live environment before deployment.',
  },
  {
    number: '04',
    name: 'Activation & Testing',
    timeline: 'Days 23–28',
    description:
      'Live system tested with real data. Complete operator walkthrough. You understand exactly what was built and why before we hand it over.',
  },
  {
    number: '05',
    name: 'Benchmark Confirmation',
    timeline: 'Day 30',
    description:
      'Performance measured against agreed outcomes. Done means the benchmarks are hit — not that the work was delivered. If they\'re not hit, we keep working.',
  },
];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(null);
  const containerRef = useScrollRevealAll({ threshold: 0.08 });

  return (
    <section
      id="process"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: 'var(--surface)' }}
      ref={containerRef}
    >
      {/* Ghost number */}
      <span className="section-ghost-num" style={{ left: '-1rem' }} aria-hidden="true">03</span>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="reveal delay-0 mb-4">
          <span className="label-caps" style={{ color: 'var(--accent-blue)' }}>Section 03</span>
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
          HOW AN AERELION INSTALL WORKS
        </h2>
        <p
          className="reveal delay-200 mb-16 max-w-xl"
          style={{
            fontFamily: '"Instrument Serif", serif',
            fontSize: '1rem',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
          }}
        >
          Five stages. One outcome. No ambiguity about what "done" means.
        </p>

        {/* ── Desktop: horizontal timeline ── */}
        <div className="hidden lg:block">
          {/* Connecting line */}
          <div className="relative flex items-start">
            <div
              className="absolute top-5 left-0 right-0 h-px"
              style={{ background: 'var(--border)', zIndex: 0 }}
              aria-hidden="true"
            />

            {steps.map((step, i) => (
              <div
                key={step.number}
                className="reveal flex-1 flex flex-col items-center text-center px-3 cursor-pointer group"
                style={{ ['--delay']: `${i * 80}ms`, transitionDelay: `${i * 80}ms` }}
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
                onClick={() => setActiveStep(activeStep === i ? null : i)}
                tabIndex={0}
                role="button"
                aria-expanded={activeStep === i}
                aria-label={`Step ${step.number}: ${step.name}`}
                onKeyDown={(e) => e.key === 'Enter' && setActiveStep(activeStep === i ? null : i)}
              >
                {/* Node */}
                <div
                  className="relative z-10 w-10 h-10 flex items-center justify-center mb-4 node-pulse transition-all duration-200"
                  style={{
                    background: activeStep === i ? 'var(--accent-blue)' : 'var(--panel)',
                    border: `1px solid ${activeStep === i ? 'var(--accent-glow)' : 'var(--border)'}`,
                    boxShadow: activeStep === i ? '0 0 20px rgba(42,143,224,0.4)' : 'none',
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"DM Mono", monospace',
                      fontSize: '0.7rem',
                      color: activeStep === i ? '#fff' : 'var(--text-muted)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Step name */}
                <h3
                  className="m-0 mb-2"
                  style={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: activeStep === i ? 'var(--accent-glow)' : 'var(--text-primary)',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {step.name}
                </h3>

                {/* Timeline badge */}
                <div
                  className="mb-4"
                  style={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: '0.65rem',
                    color: 'var(--accent-blue)',
                    letterSpacing: '0.08em',
                  }}
                >
                  {step.timeline}
                </div>

                {/* Description — visible when active */}
                <p
                  style={{
                    fontFamily: '"Instrument Serif", serif',
                    fontSize: '0.88rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                    opacity: activeStep === i ? 1 : 0.5,
                    transform: activeStep === i ? 'translateY(0)' : 'translateY(4px)',
                    transition: 'opacity 0.25s ease, transform 0.25s ease',
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile: vertical timeline ── */}
        <div className="lg:hidden flex flex-col gap-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="reveal flex gap-5"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Left: node + vertical line */}
              <div className="flex flex-col items-center">
                <div
                  className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'var(--panel)',
                    border: '1px solid var(--accent-blue)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"DM Mono", monospace',
                      fontSize: '0.65rem',
                      color: 'var(--accent-blue)',
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="w-px flex-1 mt-2 mb-2"
                    style={{ background: 'var(--border)', minHeight: '40px' }}
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-8">
                <div
                  className="mb-1"
                  style={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: '0.62rem',
                    color: 'var(--accent-blue)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {step.timeline}
                </div>
                <h3
                  className="m-0 mb-2"
                  style={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-primary)',
                  }}
                >
                  {step.name}
                </h3>
                <p
                  className="m-0"
                  style={{
                    fontFamily: '"Instrument Serif", serif',
                    fontSize: '0.95rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
