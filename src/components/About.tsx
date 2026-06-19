"use client"
import React from 'react'

const timeline = [
  { year: '2024', title: 'Launched Portfolio Site', desc: 'Created this futuristic portfolio showcasing my work' },
  { year: '2024', title: 'Full Stack Developer', desc: 'Building web apps with React, Next.js, and Node.js' },
  { year: '2023', title: 'Sports Analytics Project', desc: 'Developed predictive models for rugby performance' },
  { year: '2022', title: 'Started Learning Web Dev', desc: 'Began journey into front-end and full-stack development' }
]

export default function About() {
  return (
    <section className="section container">
      <div style={{ marginBottom: 18, display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 6, height: 36, borderRadius: 6, background: 'linear-gradient(180deg,var(--neon),var(--electric))' }} />
        <div style={{ color: 'var(--neon)', fontFamily: 'monospace', fontSize: 13, letterSpacing: 2 }}>My Journey</div>
      </div>

      <h2 style={{ fontSize: '2.5rem', marginBottom: 22 }}>About Me</h2>

      <div className="grid-3">
        <div>
          <p style={{ color: 'var(--muted)', marginBottom: 12 }}>
            I'm a developer and creator passionate about building beautiful, functional digital experiences. With a background in technology and philosophy, I blend analytical thinking with creative problem-solving.
          </p>
          <p style={{ color: 'var(--muted)', marginBottom: 12 }}>
            When I'm not coding, you'll find me on the rugby field, exploring new technologies, or diving into philosophical questions about the nature of digital experiences.
          </p>

          <div style={{ display: 'grid', gap: 8 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ width: 8, height: 8, borderRadius: 8, background: 'var(--neon)' }} />
              <div style={{ color: 'var(--muted)' }}>Passionate about user experience</div>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ width: 8, height: 8, borderRadius: 8, background: 'var(--neon)' }} />
              <div style={{ color: 'var(--muted)' }}>Strong believer in clean code</div>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ width: 8, height: 8, borderRadius: 8, background: 'var(--neon)' }} />
              <div style={{ color: 'var(--muted)' }}>Always learning and innovating</div>
            </div>
          </div>
        </div>

        <div>
          {timeline.map((t, i) => (
            <div key={i} className="glass-card" style={{ marginBottom: 12 }}>
              <div style={{ color: 'var(--neon)', fontFamily: 'monospace', fontSize: 13 }}>{t.year}</div>
              <h4 style={{ margin: '6px 0' }}>{t.title}</h4>
              <p style={{ color: 'var(--muted)', margin: 0 }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
