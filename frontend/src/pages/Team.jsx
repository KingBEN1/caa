import React, { useEffect } from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import TeamGrid from '../components/TeamGrid.jsx';

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="layout">
      <section className="section section--hero-slim">
        <SectionHeader
          eyebrow="Team"
          title="People Behind the Space."
          subtitle="A compact team of specialists working as one sharp unit."
        />
      </section>

      <section className="section">
        <TeamGrid />
      </section>

      <section className="section section--culture">
        <div className="culture-grid">
          <div>
            <h3>Values</h3>
            <p>We value clarity, honesty, and creative discipline above all else.</p>
          </div>
          <div>
            <h3>How We Work</h3>
            <p>We work in focused sprints, keep feedback loops short, and document everything we build.</p>
          </div>
          <div>
            <h3>What Makes Us Different</h3>
            <p>We stay intentionally small so we can be close to the work, not just manage it.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
