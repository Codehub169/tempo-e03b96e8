import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import WhatWeDoSection from './components/WhatWeDoSection';
import WhyHueneuSection from './components/WhyHueneuSection';
import ContactForm from './components/ContactForm';
// Import other section components as they are created

function App() {
  return (
    <div className="App">
      <HeroSection />
      <StorySection />
      <WhatWeDoSection />
      <WhyHueneuSection />
      <ContactForm />
      {/* Footer or other global elements can go here */}
    </div>
  );
}

export default App;
