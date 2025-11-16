import React from 'react';

const items = [
  'Web Development',
  'App Development',
  'UI/UX Design',
  'Graphic Design',
  'SEO',
  'Social Media',
  'Email Marketing',
  'PPC Campaigns'
];

const ServiceStrip = () => (
  <div className="service-strip">
    <div className="service-strip__inner">
      {items.concat(items).map((item, i) => (
        <span key={i} className="service-strip__item">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default ServiceStrip;
