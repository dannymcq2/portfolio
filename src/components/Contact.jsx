import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState('');

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.name) validationErrors.name = "Name is required";
    if (!formData.email) validationErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) validationErrors.email = "Invalid email address";
    if (!formData.message) validationErrors.message = "Message is required";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('https://dansportfolio.onrender.com/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatusMessage('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatusMessage('Failed to send message. Please try again later.');
        }
      } catch (error) {
        console.error('Error:', error);
        setStatusMessage('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <section className="contact-form">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={errors.message ? 'input-error' : ''}
          />
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>
        <button type="submit" className="submit-button">Send</button>
      </form>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </section>
  );
}

export default Contact;