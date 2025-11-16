import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader.jsx';
import projects from '../data/projects.js';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="layout">
        <section className="section">
          <p>Project not found.</p>
          <Link to="/projects" className="link-underlined">
            Back to projects
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="layout">
      <section className="section section--hero-project">
        <SectionHeader eyebrow="Case Study" title={project.title} subtitle={project.summary} />
      </section>

      <section className="section section--project-layout">
        <div className="project-layout__meta">
          <div>
            <h4>Client</h4>
            <p>{project.client}</p>
          </div>
          <div>
            <h4>Goal</h4>
            <p>{project.goal}</p>
          </div>
          <div>
            <h4>Category</h4>
            <p>{project.category.join(' / ')}</p>
          </div>
          <div>
            <h4>Technologies</h4>
            <p>{project.technologies.join(' · ')}</p>
          </div>
        </div>

        <div className="project-layout__body">
          <div className="project-layout__block">
            <h3>Challenge</h3>
            <p>{project.challenge}</p>
          </div>
          <div className="project-layout__block">
            <h3>Solution</h3>
            <p>{project.solution}</p>
          </div>
          <div className="project-layout__block project-layout__metrics">
            <h3>Results</h3>
            <div className="metrics-grid">
              {Object.entries(project.results).map(([key, value]) => (
                <div key={key} className="metric-card">
                  <span className="metric-card__label">{key}</span>
                  <span className="metric-card__value">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="project-layout__gallery">
            {project.gallery.map((src) => (
              <div key={src} className="project-layout__frame">
                <div className="project-layout__mock" />
              </div>
            ))}
          </div>
        </div>

        <div className="project-layout__cta">
          <h3>Ready to Build Your Own Case Study?</h3>
          <p>We can architect a similar narrative around your product, grounded in real outcomes.</p>
          <Link to="/contact" className="btn btn--primary">
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
