import React from 'react';
// Import icons - ensure these paths are correct and SVGs are in place
import brandingIcon from '../assets/icons/branding.svg';
import packagingIcon from '../assets/icons/packaging.svg';
import socialMediaIcon from '../assets/icons/social-media.svg';
import stationeryIcon from '../assets/icons/stationery.svg';
import coffeeTableBooksIcon from '../assets/icons/coffee-table-books.svg';
import creativeProjectsIcon from '../assets/icons/creative-projects.svg';

// Note: CSS for this component should be defined in a corresponding WhatWeDoSection.css file or a global stylesheet.
// Example classes used: .what-we-do-section, .section-title, .services-grid, .service-item, 
// .service-icon-container, .service-icon, .service-content, .service-name, .service-microcopy

const services = [
  {
    icon: brandingIcon,
    name: 'Branding',
    microcopy: 'Crafting identities that whisper your loudest stories.',
  },
  {
    icon: packagingIcon,
    name: 'Packaging',
    microcopy: 'Packaging, but make it poetic (and protective).',
  },
  {
    icon: socialMediaIcon,
    name: 'Social Media',
    microcopy: 'Curating digital narratives that resonate and engage.',
  },
  {
    icon: stationeryIcon,
    name: 'Stationery',
    microcopy: 'Designing tangible moments of connection.',
  },
  {
    icon: coffeeTableBooksIcon,
    name: 'Coffee Table Books',
    microcopy: 'Turning pages into immersive experiences.',
  },
  {
    icon: creativeProjectsIcon,
    name: 'Creative Projects',
    microcopy: 'Exploring the beautifully unexpected, together.',
  },
];

const WhatWeDoSection = () => {
  return (
    <section id="services" className="what-we-do-section">
      <h2 className="section-title">What We Do</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon-container">
              <img src={service.icon} alt={`${service.name} icon`} className="service-icon" />
            </div>
            <div className="service-content">
              <h3 className="service-name">{service.name}</h3>
              <p className="service-microcopy">{service.microcopy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoSection;
