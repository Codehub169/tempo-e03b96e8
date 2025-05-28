import React from 'react';
import './HeroSection.css'; // Styles for this component
import hueneuLogo from '../assets/logo.svg'; // Path to the logo

const HeroSection = () => {
  // Function to handle smooth scroll to the next section
  const handleScrollToStory = () => {
    const storySection = document.getElementById('story');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="logo-container">
          <img src={hueneuLogo} alt="hueneu Logo" className="hueneu-logo" />
        </div>
        {/* Tagline based on project description/style guide */}
        <h1 className="tagline">Where stories find their aesthetic.</h1>
        {/* Subtext to elaborate slightly or add brand voice */}
        <p className="subtext">Designs that whisper loud stories. We are hueneu.</p>
      </div>
      {/* Scroll down indicator, clicking it scrolls to the story section */}
      <div 
        className="scroll-down-indicator" 
        onClick={handleScrollToStory} 
        role="button" // Accessibility: indicate it's clickable
        tabIndex={0} // Accessibility: make it focusable
        onKeyPress={(e) => e.key === 'Enter' && handleScrollToStory()} // Accessibility: keyboard interaction
        title="Scroll to The hueneu Story" // Tooltip
      >
        <span>&darr;</span> {/* Simple down arrow, could be an SVG icon */}
      </div>
    </section>
  );
};

export default HeroSection;
