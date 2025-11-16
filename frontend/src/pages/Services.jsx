import React, { useEffect, useState } from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import services from '../data/services.js';

const Services = () => {
  const [active, setActive] = useState(services[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="layout">
      <section className="section section--hero-slim">
        <SectionHeader
          eyebrow="Services"
          title="Structured, Modular, End-to-End."
          subtitle="Each service is a complete system — strategy, execution, and optimization."
        />
      </section>

      <section className="section section--services">
        <div className="services-layout">
          <aside className="services-list">
            {services.map((service) => (
              <button
                key={service.slug}
                onClick={() => setActive(service)}
                className={
                  'services-list__item ' +
                  (active.slug === service.slug ? 'services-list__item--active' : '')
                }
              >
                <span className="services-list__title">{service.title}</span>
                <span className="services-list__summary">{service.summary}</span>
              </button>
            ))}
          </aside>

          <article className="service-detail">
            <h2 className="service-detail__title">{active.title}</h2>
            <p className="service-detail__summary">{active.summary}</p>

            <div className="service-detail__grid">
              <div>
                <h3 className="service-detail__label">What We Deliver</h3>
                <ul className="service-detail__list">
                  {active.slug === 'web-development' && (
                    <>
                      <li>Custom websites built for performance and clarity.</li>
                      <li>Landing pages engineered for conversion.</li>
                      <li>Modular design systems ready to scale.</li>
                      <li>SEO-friendly architecture from day one.</li>
                    </>
                  )}
                  {active.slug === 'app-development' && (
                    <>
                      <li>Cross-platform mobile apps using modern stacks.</li>
                      <li>API design and backend integrations.</li>
                      <li>Analytics and event tracking.</li>
                      <li>Launch support for stores and distribution.</li>
                    </>
                  )}
                  {active.slug === 'ui-ux-design' && (
                    <>
                      <li>User research and journey mapping.</li>
                      <li>Wireframes and interaction flows.</li>
                      <li>High-fidelity interfaces and design systems.</li>
                      <li>Interactive prototypes for testing.</li>
                    </>
                  )}
                  {active.slug === 'graphic-design' && (
                    <>
                      <li>Brand identity and visual language.</li>
                      <li>Logo and mark systems.</li>
                      <li>Marketing and social templates.</li>
                      <li>Presentation and deck design.</li>
                    </>
                  )}
                  {active.slug === 'seo' && (
                    <>
                      <li>Technical SEO audits and fixes.</li>
                      <li>Information architecture and content structure.</li>
                      <li>On-page optimization and metadata.</li>
                      <li>Performance monitoring and reporting.</li>
                    </>
                  )}
                  {active.slug === 'social-media' && (
                    <>
                      <li>Channel strategy and positioning.</li>
                      <li>Content calendars and asset systems.</li>
                      <li>Paid social campaigns and optimization.</li>
                      <li>Reporting dashboards and learnings.</li>
                    </>
                  )}
                  {active.slug === 'email-marketing' && (
                    <>
                      <li>Lifecycle journey mapping.</li>
                      <li>Transactional and marketing flows.</li>
                      <li>A/B testing and subject line experiments.</li>
                      <li>Analytics and deliverability monitoring.</li>
                    </>
                  )}
                  {active.slug === 'ppc-campaigns' && (
                    <>
                      <li>Performance campaign planning.</li>
                      <li>Landing page and funnel design.</li>
                      <li>Budget allocation and optimization.</li>
                      <li>Transparent reporting on key metrics.</li>
                    </>
                  )}
                </ul>
              </div>
              <div>
                <h3 className="service-detail__label">Pillars</h3>
                <ul className="service-detail__tags">
                  {active.pillars.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <h3 className="service-detail__label">Tools & Stack</h3>
                <ul className="service-detail__tags service-detail__tags--mono">
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Next.js</li>
                  <li>Figma</li>
                  <li>Analytics</li>
                </ul>
              </div>
            </div>

            <div className="service-detail__faq">
              <h3 className="service-detail__label">FAQ</h3>
              <details>
                <summary>What does a typical engagement look like?</summary>
                <p>
                  We start with discovery, move into design sprints, then development and launch.
                  Most engagements run 6–12 weeks.
                </p>
              </details>
              <details>
                <summary>Do you work with early-stage startups?</summary>
                <p>
                  Yes. We regularly support MVPs and pre-launch products, helping them arrive with a sharp first impression.
                </p>
              </details>
              <details>
                <summary>Can you collaborate with internal teams?</summary>
                <p>
                  We often plug into existing design, product, or engineering teams as an external force-multiplier.
                </p>
              </details>
              <details>
                <summary>How do you measure success?</summary>
                <p>
                  We define clear metrics at the start: conversions, activation, engagement, or perception shifts.
                </p>
              </details>
              <details>
                <summary>What is the first step?</summary>
                <p>
                  Send us a short brief and we’ll respond with a structured set of questions and a suggested format.
                </p>
              </details>
            </div>

            <div className="service-detail__cta">
              <h3>Let’s Build Something Together</h3>
              <p>Share your challenges, constraints, and ambitions — we’ll respond with a structured plan.</p>
              <a href="/contact" className="btn btn--primary">
                Start a Project
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Services;
