"use client"
import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="section container">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <div style={{ width: 6, height: 36, borderRadius: 6, background: 'linear-gradient(180deg,var(--neon),var(--electric))' }} />
        <div style={{ color: 'var(--neon)', fontFamily: 'monospace', fontSize: 13, letterSpacing: 2 }}>Contact</div>
      </div>

      <h2 style={{ fontSize: '2rem', marginBottom: 8 }}>Get in touch</h2>
      <p style={{ color: 'var(--muted)', marginBottom: 18 }}>Prefer direct contact — details below.</p>

      <div className="grid-2">
        <div className="glass-card">
          <h3 style={{ marginTop: 0 }}>Email</h3>
          <a href="mailto:leonkoome4@gmail.com" style={{ color: 'var(--neon)' }}>leonkoome4@gmail.com</a>
        </div>

        <div className="glass-card">
          <h3 style={{ marginTop: 0 }}>Phone</h3>
          <a href="tel:+44142237975" style={{ color: 'var(--neon)' }}>+254 142237975</a>
        </div>

        <div className="glass-card">
          <h3 style={{ marginTop: 0 }}>Instagram</h3>
          <a href="https://www.instagram.com/_i.hate.leon?igsh=cWN2bXpoZTNqZjR6&utm_source=qr" target="_blank" rel="noreferrer noopener" style={{ color: 'var(--neon)' }}>@_i.hate.leon</a>
        </div>

        <div className="glass-card">
          <h3 style={{ marginTop: 0 }}>Resume</h3>
          <a className="btn btn-ghost" href="#">⬇️ Download Résumé</a>
        </div>
      </div>
    </section>
  )
}
