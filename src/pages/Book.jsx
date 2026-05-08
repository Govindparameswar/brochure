import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Book() {
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const today = new Date().toISOString().split('T')[0]

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setMessage(null)
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    data.date = `${data.fromDate} to ${data.toDate}`
    delete data.fromDate
    delete data.toDate
    try {
      await fetch('https://script.google.com/macros/s/AKfycbwMLSr8QQf9FYCPEfuEbz2dEIh35YDvp0qsClvj8zBixCeGvHlRJIBpR1jdtC-lNK0Waw/exec', {
        method: 'POST', mode: 'no-cors',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'text/plain;charset=utf-8' }
      })
      setMessage({ type: 'success', text: 'Booking submitted successfully!' })
      e.target.reset()
    } catch {
      setMessage({ type: 'error', text: 'Something went wrong. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Navbar forceScrolled />
      <section className="booking-section">
        <div className="booking-container fade-in visible">
          <div className="booking-header">
            <h1 className="booking-title">Book a Consultation</h1>
            <p className="booking-subtitle">Fill out the form below to start your healing journey.</p>
          </div>
          <form onSubmit={handleSubmit} id="booking-form">
            <div className="form-group">
              <label className="form-label" htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="name" className="form-control" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" className="form-control" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" className="form-control" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="programme">Preferred Programme</label>
              <select id="programme" name="programme" className="form-control" required defaultValue="">
                <option value="" disabled>Select a programme...</option>
                <option>Signature Panchakarma Detox</option>
                <option>Spine Care Programme</option>
                <option>Joint Care Programme</option>
                <option>Weight Loss Programme</option>
                <option>Hormone Balance Programme</option>
                <option>Other / Not Sure</option>
              </select>
            </div>
            <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
              <div className="form-group" style={{ flex:1, minWidth:200, marginBottom:'1.5rem' }}>
                <label className="form-label" htmlFor="fromDate">From Date</label>
                <input type="date" id="fromDate" name="fromDate" className="form-control" min={today} required />
              </div>
              <div className="form-group" style={{ flex:1, minWidth:200, marginBottom:'1.5rem' }}>
                <label className="form-label" htmlFor="toDate">To Date</label>
                <input type="date" id="toDate" name="toDate" className="form-control" min={today} required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message / Health Concerns (Optional)</label>
              <textarea id="message" name="message" className="form-control" placeholder="Briefly describe your health goals..." />
            </div>
            <button type="submit" className="btn btn--primary booking-submit" disabled={submitting}>
              {submitting ? 'Submitting...' : 'Book Now'}
            </button>
            {message && (
              <div className={`form-message form-message--${message.type}`}>{message.text}</div>
            )}
          </form>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
