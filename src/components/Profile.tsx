"use client"
import React from 'react'

export default function Profile() {
  return (
    <section className="section container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24, alignItems: 'start' }}>
        <div>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 12 }}>
            <div className="glass-card" style={{ width: 80, height: 80, borderRadius: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32 }}>👋</div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>Leon Koome — Junior Software Engineer</div>
              <div style={{ color: 'var(--muted)' }}>Building scalable, user-centric applications with modern web technologies.</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div className="glass-card">
              <p style={{ margin: 0, color: 'var(--muted)' }}>🎯 <strong>Role</strong>: Frontend Engineer</p>
              <p style={{ margin: '8px 0 0 0', color: 'var(--muted)' }}>💼 <strong>Expertise</strong>: React, Next.js, TypeScript</p>
            </div>
            <div className="glass-card">
              <p style={{ margin: 0, color: 'var(--muted)' }}>⚡ <strong>Value Add</strong>: Attention to detail</p>
              <p style={{ margin: '8px 0 0 0', color: 'var(--muted)' }}>🤝 <strong>Open To</strong>: Full-time, freelance, collaborations</p>
            </div>
          </div>

          <div style={{ marginTop: 16 }}>
            <h3>Featured Projects</h3>
            <div style={{ display: 'grid', gap: 8, marginTop: 8 }}>
              <a href="https://vision-x-play-hub.vercel.app" target="_blank" rel="noreferrer noopener" className="glass-card">Vision X — Play Hub</a>
              <a href="https://hospital-1-beige.vercel.app" target="_blank" rel="noreferrer noopener" className="glass-card">Hospital 1 — Demo</a>
            </div>
          </div>
        </div>

        <aside style={{ display: 'grid', gap: 12 }}>
          <div className="glass-card">
            <h4>Skills</h4>
            <div style={{ marginTop: 8, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['React','Next.js','Node.js','Python','TypeScript','Three.js'].map(s => (
                <div key={s} className="skill-chip">{s}</div>
              ))}
            </div>
          </div>

          <div className="glass-card">
            <h4>Contact</h4>
            <p style={{ color: 'var(--muted)' }}>leonkoome4@gmail.com</p>
            <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
              <a className="btn btn-ghost" href="#">GitHub</a>
              <a className="btn btn-ghost" href="#">LinkedIn</a>
            </div>
          </div>

          <div className="glass-card" style={{ textAlign: 'center' }}>
            <h4>Metrics</h4>
            <p style={{ marginTop: 8, color: 'var(--neon)', fontFamily: 'monospace' }}>15+ projects • Production</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
