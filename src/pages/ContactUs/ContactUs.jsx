import { useState } from 'react'
import './ContactUs.css'

function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      <div className="contact-inner">
        {/* Heading */}
        <div className="contact-heading">
          <span className="contact-eyebrow">GET IN TOUCH</span>
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-intro">
            Questions, repairs, appraisals — we're here to help.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="contact-layout">
          {/* LEFT — form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <i className="bi bi-check-circle"></i>
                <h3>Thank you, {form.name || 'friend'}.</h3>
                <p>We've received your message and will respond within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                  Full Name
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </label>

                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                </label>

                <label>
                  Subject
                  <input
                    type="text"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                  />
                </label>

                <label>
                  Message
                  <textarea
                    name="message"
                    required
                    rows="6"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                  />
                </label>

                <button type="submit" className="contact-submit">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* RIGHT — info + image */}
          <div className="contact-info-wrap">
            <img
              src="/images/contact-storefront.jpg"
              alt="Alberto Clocks storefront"
              className="contact-image"
            />

            <div className="contact-details">
              <div className="contact-item">
                <i className="bi bi-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>info@albertoclocks.com</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="bi bi-telephone"></i>
                <div>
                  <h4>Phone</h4>
                  <p>+234 800 000 0000</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="bi bi-geo-alt"></i>
                <div>
                  <h4>Address</h4>
                  <p>123 Heritage Avenue, Victoria Island, Lagos</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="bi bi-clock"></i>
                <div>
                  <h4>Hours</h4>
                  <p>Mon–Sat · 10:00 – 19:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs