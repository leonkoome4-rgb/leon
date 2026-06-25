"use client"
import React from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
  { title: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { title: 'Backend', skills: ['Node.js', 'Python', 'REST APIs', 'Express', 'MongoDB'] },
  { title: 'Tools', skills: ['Git', 'Vercel', 'Docker', 'Figma'] }
]

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <div className="section-head">
        <div className="eyebrow"><span className="eyebrow-num">03</span> My arsenal</div>
        <h2>Skills & technologies.</h2>
      </div>

      <div className="skills-grid">
        {skillCategories.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="glow-card"
          >
            <div className="glow-card-inner">
              <h3 style={{ fontSize: '1.1rem', marginBottom: 4 }}>{c.title}</h3>
              <div className="skills-list">
                {c.skills.map((s) => (
                  <div key={s} className="skill-chip">{s}</div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
