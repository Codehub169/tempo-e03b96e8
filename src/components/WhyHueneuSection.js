import React from 'react';
// Note: CSS for this component should be defined in a corresponding WhyHueneuSection.css file or a global stylesheet.
// Example classes used: .why-hueneu-section, .section-title-alt, .pitch-text, .pitch-text-emphasis, .pitch-text-highlight

const WhyHueneuSection = () => {
  return (
    <section id="why-hueneu" className="why-hueneu-section">
      <h2 className="section-title-alt">Why hueneu?</h2>
      <div className="pitch-content">
        <p className="pitch-text">
          We don't just design—<span className="pitch-text-emphasis">we decode stories.</span>
        </p>
        <p className="pitch-text">
          We listen for the unsaid, the subtle nuances that make your narrative unique. 
          Our approach is one of <span className="pitch-text-highlight">calm collaboration</span> and <span className="pitch-text-highlight">intentional creativity</span>, 
          resulting in designs that speak quietly but stay with you, long after the first glance.
        </p>
        <p className="pitch-text">
          At hueneu, it's about finding that perfect <span className="pitch-text-highlight">balance</span> between the vibrant hue of imagination 
          and the grounding neu of clarity. It's about creating experiences that feel both <span className="pitch-text-emphasis">mysterious and inviting</span>.
        </p>
      </div>
    </section>
  );
};

export default WhyHueneuSection;
