"use client"
import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Vision X — Play Hub',
    desc: 'Community hub for game discovery, social features and live updates.',
    tech: ['React', 'Next.js', 'TypeScript'],
    featured: true,
    stats: 'Live',
    url: 'https://vision-x-play-hub.vercel.app',
    preview: '/vision-preview.svg'
  },
  {
    title: 'Hospital 1',
    desc: 'Hospital appointment & management demo (live).',
    tech: ['Next.js', 'React'],
    featured: false,
    stats: 'Live',
    url: 'https://hospital-1-beige.vercel.app',
    preview: '/hospital-preview.svg'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <div style={{ width: 6, height: 36, borderRadius: 6, background: 'linear-gradient(180deg,var(--neon),var(--electric))' }} />
        <div style={{ color: 'var(--neon)', fontFamily: 'monospace', fontSize: 13, letterSpacing: 2 }}>Featured Work</div>
      </div>

      <h2 style={{ fontSize: '2rem', marginBottom: 18 }}>My Projects</h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <motion.article key={p.title} whileHover={{ y: -6 }} className={`project ${p.featured ? 'glass-card' : ''}`}>
            {p.preview && (
              <a href={p.url || '#'} target="_blank" rel="noreferrer noopener">
                <img src={p.preview} alt={`${p.title} preview`} style={{ width: '100%', borderRadius: 10, marginBottom: 12, display: 'block' }} />
              </a>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 8 }}>
              <h3 style={{ margin: 0 }}>{p.title}</h3>
              <div style={{ color: 'var(--neon)', fontFamily: 'monospace', fontSize: 12 }}>{p.stats}</div>
            </div>

            <p style={{ color: 'var(--muted)' }}>{p.desc}</p>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12, marginBottom: 12 }}>
              {p.tech.map((t) => (
                <div key={t} className="skill-chip">{t}</div>
              ))}
            </div>

            {/* Live demo embed (may be blocked by X-Frame-Options on external sites). Fallback: open in new tab. */}
            {p.url && (
              <div style={{ marginTop: 8 }}>
                <div style={{ marginBottom: 8, color: 'var(--muted)', fontSize: 13 }}>Live demo (embedded). If blank, click "Open live demo".</div>
                <div style={{ position: 'relative', paddingTop: '56.25%', borderRadius: 10, overflow: 'hidden' }}>
                  <iframe className="demo-frame" src={p.url} title={`${p.title} live demo`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }} />
                </div>

                <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                  <a className="btn btn-primary" href={p.url} target="_blank" rel="noreferrer noopener">Open live demo</a>
                  <a className="btn btn-ghost" href="#">View code</a>
                </div>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  )
}
