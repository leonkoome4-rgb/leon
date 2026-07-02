"use client"
import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Workforce Status & Payroll Console',
    desc: 'Full-stack internal HR and payroll system for a transport company — employee lifecycle, daily status tracking, AES-256 encrypted bank details, leave management, and a compliance-grade audit log.',
    tech: ['Node.js', 'Express', 'Prisma', 'SQLite', 'Chart.js', 'Tailwind CSS'],
    url: null,
    preview: '/hris-preview.mp4',
    type: 'video' as const
  },
  {
    title: 'Super Metro — Transport Website',
    desc: 'Full marketing and service site for Super Metro, a Nairobi bus SACCO with 500+ vehicles. Includes scroll-driven animations, live route maps, airport shuttle booking, and an incident-report flow.',
    tech: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion'],
    url: 'https://super-metro-gb9k.vercel.app',
    preview: '/super-metro-preview.mp4',
    type: 'video' as const
  },
  {
    title: 'Super Metro Insurance Agency',
    desc: 'Full-stack insurance agency site covering all 9 insurance classes with a 6-step motor quote wizard, real IRA-standard premium calculations, and Safaricom Daraja M-Pesa STK Push payments.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Daraja API'],
    url: 'https://insuarance-tau.vercel.app',
    preview: '/insurance-preview.mp4',
    type: 'video' as const
  },
  {
    title: 'Vision X — Play Hub',
    desc: 'A React app for browsing games and movies using the RAWG and TMDb APIs, with search, filtering, and dynamic UI rendering.',
    tech: ['React', 'RAWG API', 'TMDb API'],
    url: 'https://vision-x-play-hub.vercel.app',
    preview: '/vision-preview.svg',
    type: 'image' as const
  },
  {
    title: 'Hospital 1 — Find a Doctor Near You',
    desc: 'A location-based web app that helps users find nearby doctors and clinics, with map-based search and filtering by specialty, distance, and availability.',
    tech: ['React', 'Next.js', 'Maps / API integration'],
    url: 'https://hospital-1-beige.vercel.app',
    preview: '/hospital-preview.svg',
    type: 'image' as const
  }
]

const otherProjects = [
  {
    title: 'AI / NVIDIA API Experiment',
    desc: 'A small frontend tool experimenting with AI APIs — testing text generation and image-processing responses, and learning async JavaScript along the way.',
    tech: ['JavaScript', 'Async APIs']
  },
  {
    title: 'Fintech / KCB Banking Simulation',
    desc: 'A mock banking app inspired by KCB-style financial services, simulating deposits, withdrawals, and transaction history.',
    tech: ['React', 'UI/UX']
  },
  {
    title: 'Task Manager',
    desc: 'A CRUD task manager with local storage, filtering, and state management.',
    tech: ['React', 'Local Storage']
  }
]

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <div className="section-head">
        <div className="eyebrow"><span className="eyebrow-num">04</span> Featured work</div>
        <h2>Projects I've shipped.</h2>
      </div>

      <div className="projects-stack">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="project-pin-card"
          >
            <div className="project-index-watermark">0{i + 1}</div>

            <div className="project-img-wrap">
              {p.type === 'video' ? (
                <video
                  src={p.preview}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : p.url ? (
                <a href={p.url} target="_blank" rel="noreferrer noopener" data-cursor style={{ display: 'block' }}>
                  <img src={p.preview} alt={`${p.title} preview`} />
                </a>
              ) : (
                <img src={p.preview} alt={`${p.title} preview`} />
              )}
            </div>

            <div>
              <div className="project-index">0{i + 1} / {String(projects.length).padStart(2, '0')}</div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, gap: 12 }}>
                <h3 style={{ fontSize: 'clamp(1.4rem, 2.6vw, 2rem)' }}>{p.title}</h3>
                {p.url ? (
                  <div className="project-tag">
                    <span className="project-tag-dot" />
                    Live
                  </div>
                ) : (
                  <div className="project-tag" style={{ opacity: 0.5 }}>
                    <span className="project-tag-dot" style={{ background: 'var(--muted)' }} />
                    Local
                  </div>
                )}
              </div>

              <p style={{ marginBottom: 20, fontSize: '1.02rem' }}>{p.desc}</p>

              <div className="skills-list" style={{ marginTop: 0, marginBottom: 26 }}>
                {p.tech.map((t) => (
                  <div key={t} className="skill-chip">{t}</div>
                ))}
              </div>

              {p.url && (
                <a className="btn btn-primary btn-sm" data-cursor href={p.url} target="_blank" rel="noreferrer noopener">
                  View live project →
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      <div style={{ marginTop: 56 }}>
        <h3 style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: 20, fontWeight: 500 }}>More builds, not yet deployed</h3>
        <div className="skills-grid">
          {otherProjects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glow-card"
            >
              <div className="glow-card-inner">
                <h4 style={{ fontSize: '1rem', marginBottom: 8 }}>{p.title}</h4>
                <p style={{ fontSize: '0.92rem', marginBottom: 14 }}>{p.desc}</p>
                <div className="skills-list" style={{ marginTop: 0 }}>
                  {p.tech.map((t) => (
                    <div key={t} className="skill-chip">{t}</div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
