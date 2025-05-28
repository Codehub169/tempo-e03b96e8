import React, { useState } from 'react';
// Note: CSS for this component should be defined in a corresponding ContactForm.css file or a global stylesheet.
// Example classes used: .contact-section, .section-title, .contact-form-container, .contact-form-header, 
// .contact-form-title, .contact-form-note, .contact-form, .form-group, .form-label, .form-input, 
// .form-textarea, .submit-button-container, .submit-button, .social-links, .instagram-link

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend.
    // For now, we'll just log it to the console.
    console.log('Form data submitted:', formData);
    // Add POST request to backend endpoint e.g. /api/contact
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     alert('Message sent! We\'ll be in touch soon.');
    //     setFormData({ name: '', email: '', message: '' }); // Reset form
    //   } else {
    //     alert('Something went wrong. Please try again.');
    //   }
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    //   alert('Something went wrong. Please try again.');
    // }
    alert('Message sent (simulated)! We\'ll be in touch soon.'); // Placeholder for submission
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-form-container">
        <div className="contact-form-header">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="contact-form-note">Inspired? Have a story to tell? Drop us a line.</p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="What should we call you?"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Where can we reach you?"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Your Story / Idea</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="form-textarea"
              placeholder="Tell us about your project, your vision, or just say hello..."
            ></textarea>
          </div>
          <div className="submit-button-container">
            <button type="submit" className="submit-button">
              Let's Design Your Story
            </button>
          </div>
        </form>
        <div className="social-links">
          <p>Find us on Instagram: 
            <a href="https://www.instagram.com/hueneu_/" target="_blank" rel="noopener noreferrer" className="instagram-link">
              @hueneu_
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
