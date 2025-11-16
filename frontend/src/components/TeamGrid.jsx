import React from 'react';
import team from '../data/team.js';

const TeamGrid = () => (
  <div className="team-grid">
    {team.map((member) => (
      <article key={member.id} className="team-card">
        <div className="team-card__visual">
          <div className="team-card__portrait" />
        </div>
        <div className="team-card__body">
          <h3 className="team-card__name">{member.name}</h3>
          <p className="team-card__role">{member.role}</p>
          <p className="team-card__bio">{member.bio}</p>
          <div className="team-card__skills">
            {member.skills.map((skill) => (
              <span key={skill} className="team-card__skill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </article>
    ))}
  </div>
);

export default TeamGrid;
