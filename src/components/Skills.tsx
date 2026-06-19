"use client"
import React from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'CSS', 'Framer Motion']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python', 'REST APIs', 'Express', 'MongoDB']
  },
  {
    title: 'Visuals',
    skills: ['Three.js', 'Canvas', 'SVG', 'Motion Design']
  },
  {
    title: 'Tools',
    skills: ['Git', 'Vercel', 'Docker', 'Figma']
  }
]

export default function Skills() {
  return (
    <section className="section container">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <div style={{ width: 6, height: 36, borderRadius: 6, background: 'linear-gradient(180deg,var(--neon),var(--electric))' }} />
        <div style={{ color: 'var(--neon)', fontFamily: 'monospace', fontSize: 13, letterSpacing: 2 }}>My Arsenal</div>
      </div>

      <h2 style={{ fontSize: '2rem', marginBottom: 18 }}>Skills & Technologies</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
        {skillCategories.map((c) => (
          <motion.div key={c.title} whileHover={{ y: -6 }} className="glass-card">
            <h3 style={{ color: 'var(--neon)', marginBottom: 10 }}>{c.title}</h3>
            <div className="skills-list">
              {c.skills.map((s) => (
                <div key={s} className="skill-chip">{s}</div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
