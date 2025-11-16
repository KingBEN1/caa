import React from 'react';

const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <header className="section-header">
    {eyebrow && <p className="section-header__eyebrow">{eyebrow}</p>}
    <h2 className="section-header__title">{title}</h2>
    {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
  </header>
);

export default SectionHeader;
