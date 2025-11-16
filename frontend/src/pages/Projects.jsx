import React, { useEffect, useState } from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import ProjectGrid from '../components/ProjectGrid.jsx';

const filters = ['All', 'Branding', 'Web', 'Mobile', 'Marketing', 'UI/UX'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="layout">
      <section className="section section--hero-slim">
        <SectionHeader
          eyebrow="Projects"
          title="Case Studies with Clear Outcomes."
          subtitle="Every project has a story, a challenge, and measurable results."
        />
      </section>

      <section className="section section--projects-grid">
        <div className="filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={
                'filters__item ' + (filter === activeFilter ? 'filters__item--active' : '')
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <ProjectGrid filter={activeFilter === 'All' ? null : activeFilter} />
      </section>
    </div>
  );
};

export default Projects;
