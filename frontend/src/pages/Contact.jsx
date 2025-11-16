import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader.jsx';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      setStatus(data.message || 'Message sent.');
      setForm({ name: '', email: '', company: '', budget: '', message: '' });
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="layout">
      <section className="section section--hero-slim">
        <SectionHeader
          eyebrow="Contact"
          title="Start Your Project."
          subtitle="Tell us about your product, timelines, and constraints. We’ll respond with structure."
        />
      </section>

      <section className="section section--contact">
        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" value={form.company} onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="budget">Budget Range</label>
              <input
                id="budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                placeholder="e.g. €5k–€15k"
              />
            </div>
            <div className="field field--full">
              <label htmlFor="message">Project Details</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="What are you trying to build? What does success look like?"
              />
            </div>
            <button type="submit" className="btn btn--primary btn--full">
              Send Request
            </button>
            {status && <p className="form-status">{status}</p>}
          </form>

          <aside className="contact-info">
            <h3>Contact Info</h3>
            <p>hello@creativespace.agency</p>
            <p>+383 00 000 000</p>
            <p>Prishtina, Kosovo</p>
            <h3>Working Hours</h3>
            <p>Mon–Fri, 09:00–18:00 CET</p>
            <div className="contact-map">
              <div className="contact-map__mock" />
              <span>Monochrome city grid — representational map.</span>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Contact;
