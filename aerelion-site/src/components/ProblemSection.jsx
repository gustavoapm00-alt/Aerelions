import { Clock, FileText, Users, Bell, BarChart2, Database } from 'lucide-react';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

const pains = [
  {
    icon: Users,
    title: 'Owner-Dependent Intake',
    description: 'Every lead needs your personal attention to qualify. Your pipeline stalls the moment you look away.',
    cost: '~$62,000 in lost opportunity annually',
  },
  {
    icon: FileText,
    title: 'Manual Proposals',
    description: '4 hours per prospect, every time — personalized from scratch, no system, no leverage.',
    cost: '~$38,000 in unbillable capacity annually',
  },
  {
    icon: Clock,
    title: 'Broken Onboarding',
    description: 'Clients wait 2 weeks for what should take 2 days. First impressions set the tone for the entire engagement.',
    cost: '~$28,000 in churn risk annually',
  },
  {
    icon: Bell,
    title: 'Follow-Up Failure',
    description: '10–30% of your pipeline is lost to silence. Deals that should close, don\'t — because no one followed up.',
    cost: '~$74,000 in revenue left on the table',
  },
  {
    icon: BarChart2,
    title: 'Manual Reporting',
    description: 'Analyst hours consumed assembling data that any automated system should produce in real time.',
    cost: '~$22,000 in low-leverage labor annually',
  },
  {
    icon: Database,
    title: 'No Documentation',
    description: 'Your process lives inside your head, not in a system. The business cannot scale beyond your personal bandwidth.',
    cost: 'Business value: zero without the founder',
  },
];

export default function ProblemSection() {
  const containerRef = useScrollRevealAll({ threshold: 0.08 });

  return (
    <section
      id="problem"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: 'var(--surface)' }}
      ref={containerRef}
    >
      {/* Ghost section number */}
      <span className="section-ghost-num" style={{ left: '-1rem' }} aria-hidden="true">01</span>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section label + divider */}
        <div className="reveal delay-0 mb-4">
          <span className="label-caps" style={{ color: 'var(--accent-blue)' }}>Section 01</span>
        </div>

        <div className="reveal delay-100 divider-line mb-10" />

        {/* Heading */}
        <h2
          className="reveal delay-100 m-0 mb-8"
          style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            letterSpacing: '0.04em',
            color: 'var(--text-primary)',
            lineHeight: 1,
          }}
        >
          THE COST OF DOING IT MANUALLY
        </h2>

        {/* Opening prose */}
        <div className="reveal delay-200 max-w-2xl mb-16">
          <p
            style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: '1.15rem',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              margin: '0 0 1rem',
            }}
          >
            Every hour you spend routing emails, chasing approvals, manually
            generating proposals, and following up on stalled deals is an hour
            that isn't going toward the work only you can do.
          </p>
          <p
            style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: '1.15rem',
              color: 'var(--text-primary)',
              lineHeight: 1.8,
              margin: 0,
              fontStyle: 'italic',
            }}
          >
            You don't have an effort problem. You have a systems problem.
          </p>
        </div>

        {/* Pain cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pains.map((pain, i) => {
            const Icon = pain.icon;
            const delayClass = ['delay-0','delay-100','delay-200','delay-300','delay-400','delay-500'][i % 6];
            return (
              <div
                key={pain.title}
                className={`reveal ${delayClass} card-hover p-6 lg:p-7 flex flex-col gap-4`}
                style={{ background: 'var(--panel)' }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  style={{
                    border: '1px solid var(--border)',
                    color: 'var(--accent-blue)',
                  }}
                >
                  <Icon size={18} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3
                  className="m-0"
                  style={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: '0.82rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-primary)',
                  }}
                >
                  {pain.title}
                </h3>

                {/* Description */}
                <p
                  className="m-0 flex-1"
                  style={{
                    fontFamily: '"Instrument Serif", serif',
                    fontSize: '0.95rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                  }}
                >
                  {pain.description}
                </p>

                {/* Cost label */}
                <div
                  className="pt-4 mt-auto"
                  style={{ borderTop: '1px solid var(--border)' }}
                >
                  <span
                    style={{
                      fontFamily: '"DM Mono", monospace',
                      fontSize: '0.7rem',
                      letterSpacing: '0.08em',
                      color: 'var(--danger)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {pain.cost}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
