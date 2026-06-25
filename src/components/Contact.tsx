"use client"
import React from 'react'

const links = [
  { icon: '✉️', label: 'Email', value: 'leonkoome4@gmail.com', href: 'mailto:leonkoome4@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+254 142237975', href: 'tel:+254142237975' },
  { icon: '🐙', label: 'GitHub', value: '@leonkoome4-rgb', href: 'https://github.com/leonkoome4-rgb' },
  { icon: '💼', label: 'LinkedIn', value: 'Leon Koome', href: 'https://www.linkedin.com/in/leon-koome-3778b5414/' },
  { icon: '📷', label: 'Instagram', value: '@_i.hate.leon', href: 'https://www.instagram.com/_i.hate.leon?igsh=cWN2bXpoZTNqZjR6&utm_source=qr' }
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = React.useState<Status>('idle')
  const [form, setForm] = React.useState({ name: '', email: '', message: '' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section container">
      <div className="section-head">
        <div className="eyebrow"><span className="eyebrow-num">05</span> Get in touch</div>
        <h2>Let's build something together.</h2>
      </div>

      <div className="contact-grid">
        <div className="glow-card">
          <div className="glow-card-inner">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="What would you like to build?"
                />
              </div>

              <button type="submit" data-cursor className="btn btn-primary" disabled={status === 'sending'} style={{ width: '100%', justifyContent: 'center' }}>
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>

              {status === 'sent' && (
                <p style={{ marginTop: 12, color: '#4ade80' }}>Thanks — your message is in! I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p style={{ marginTop: 12, color: '#f87171' }}>Something went wrong. Try emailing me directly instead.</p>
              )}
            </form>
          </div>
        </div>

        <div className="glow-card">
          <div className="glow-card-inner">
            {links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer noopener" data-cursor className="contact-link-row" style={{ textDecoration: 'none' }}>
                <div className="contact-icon">{l.icon}</div>
                <div>
                  <div style={{ color: 'var(--muted)', fontSize: 13 }}>{l.label}</div>
                  <div style={{ color: 'var(--ink)', fontWeight: 600 }}>{l.value}</div>
                </div>
              </a>
            ))}

            <div style={{ marginTop: 18 }}>
              <a href="/resume.pdf" download data-cursor className="btn btn-ghost btn-sm">
                ⬇ Download résumé
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
