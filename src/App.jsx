import React, { useState } from 'react'

export default function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [form, setForm] = useState({ name: '', phone: '', service: 'Haircut & Blowdry', date: '', time: '11:00 AM' });

  const handleBooking = (e) => {
    e.preventDefault();
    setToastMessage(`Booking confirmed for ${form.name}! ${form.service} on ${form.date} at ${form.time}.`);
    setForm({ name: '', phone: '', service: 'Haircut & Blowdry', date: '', time: '11:00 AM' });
    setTimeout(() => setToastMessage(''), 6000);
  };

  return (
    <div className="app-wrapper">
      <header className="navbar">
        <div className="container nav-flex">
          <a href="#" className="brand">
            <span style={{ fontSize: '2rem', marginRight: '0.5rem' }}>✂️</span>
            <span className="brand-name">CLEAN CUTS BY KIM</span>
          </a>
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#booking">Book Appointment</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Modern Styling & Precision Haircuts</h1>
          <p>Personalized salon cuts, hair coloring, balayage, and styling crafted by Kim.</p>
          <a href="#booking" className="btn btn-rose btn-lg">Book Appointment</a>
        </div>
      </section>

      <section id="services" className="section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>Salon & Haircare Services</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <h3>Precision Haircut & Style</h3>
              <p>Custom consultation, wash, haircut, and blowout styling.</p>
            </div>
            <div className="service-card">
              <h3>Balayage & Full Highlights</h3>
              <p>Hand-painted highlights, gloss toner, and deep conditioning treatment.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="section">
        <div className="container max-w-700">
          <div className="section-header text-center">
            <h2>Reserve Your Salon Visit</h2>
          </div>
          <form className="booking-card" onSubmit={handleBooking}>
            <div className="form-grid">
              <div className="form-group">
                <label>Name</label>
                <input type="text" required placeholder="Kimberly" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" required placeholder="(555) 019-3829" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
              </div>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label>Service</label>
                <select value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
                  <option value="Haircut & Blowdry">Haircut & Blowdry</option>
                  <option value="Balayage & Highlights">Balayage & Highlights</option>
                </select>
              </div>
              <div className="form-group">
                <label>Date</label>
                <input type="date" required value={form.date} onChange={e => setForm({...form, date: e.target.value})} />
              </div>
            </div>
            <button type="submit" className="btn btn-rose btn-block btn-lg">Book Appointment</button>
          </form>
        </div>
      </section>

      <footer className="footer bg-dark text-white">
        <div className="container text-center">
          <p>&copy; 2026 Clean Cuts by Kim. React JS Application.</p>
        </div>
      </footer>

      {toastMessage && <div className="toast-banner">{toastMessage}</div>}
    </div>
  );
}
