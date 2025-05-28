import React, { useEffect, useRef, useState } from 'react';
import whoKnewVisual from '../assets/who-knew-visual.svg';
// Note: CSS for this component should be defined in a corresponding StorySection.css file or a global stylesheet.
// Example classes used: .story-section, .story-content, .story-text-intro, .story-text-emphasis, 
// .who-knew-container, .who-knew-visual, .who-knew-visual--hidden, .who-knew-visual--visible

const StorySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whoKnewRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (whoKnewRef.current) {
      observer.observe(whoKnewRef.current);
    }

    return () => {
      if (whoKnewRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(whoKnewRef.current);
      }
    };
  }, []);

  return (
    <section id="story" className="story-section">
      <div className="story-content">
        <h2 className="section-title-alt">The hueneu Story</h2>
        <p className="story-text-intro">
          <span className="story-text-emphasis">hueneu</span> is a whisper, a gentle unfolding. <br />
          <span className="story-text-hue">Hue</span> — the vibrant burst of creative color, the spark of an idea, the lifeblood of a story waiting to be told.
        </p>
        <p className="story-text-intro">
          <span className="story-text-neu">Neu</span> — the calm embrace of neutrality, the grounding force, the quiet space where ideas take root and find their balance.
        </p>
        <p className="story-text-outro">
          Together, they form a unique alchemy: designs that are both quietly profound and boldly expressive.
        </p>
      </div>
      <div className="who-knew-container" ref={whoKnewRef}>
        <img 
          src={whoKnewVisual} 
          alt="Who Knew? Visual Pop-out" 
          className={`who-knew-visual ${isVisible ? 'who-knew-visual--visible' : 'who-knew-visual--hidden'}`}
        />
        <p className={`who-knew-text ${isVisible ? 'who-knew-text--visible' : 'who-knew-text--hidden'}`}>Who Knew?</p>
      </div>
    </section>
  );
};

export default StorySection;
