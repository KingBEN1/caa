import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects.js';

const ProjectGrid = ({ filter }) => {
  const filtered =
    filter && filter !== 'All'
      ? projects.filter((p) => p.category.includes(filter))
      : projects;

  return (
    <div className="project-grid">
      {filtered.map((project) => (
        <Link key={project.id} to={`/projects/${project.id}`} className="project-card">
          <div className="project-card__thumb">
            <div className="project-card__thumb-inner">
              <span className="project-card__label">{project.category.join(' / ')}</span>
            </div>
          </div>
          <div className="project-card__body">
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__summary">{project.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectGrid;
