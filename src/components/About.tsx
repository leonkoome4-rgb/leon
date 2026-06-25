"use client"
import React from 'react'
import { motion } from 'framer-motion'

const values = [
  { title: 'Clean, maintainable code', desc: 'I write code that\'s easy to read, test, and change later — not just code that works today.' },
  { title: 'Design-minded engineering', desc: 'UI and UX matter as much as logic. I sweat the details users actually notice.' },
  { title: 'Always learning', desc: 'Currently studying Software Engineering at Moringa School — new tools, new problems, every week.' },
  { title: 'Off the keyboard', desc: 'I play rugby — it taught me teamwork, discipline, and how to lead under pressure.' }
]

export default function About() {
  return (
    <section id="about" className="section container">
      <div className="section-head">
        <div className="eyebrow"><span className="eyebrow-num">02</span> About me</div>
        <h2>Engineer focused on the details that matter.</h2>
      </div>

      <div className="about-grid">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="manifesto"
          >
            I'm an 18-year-old software engineer in Nairobi, Kenya, who enjoys turning ideas into fast, polished products —{' '}
            <span className="text-gradient">from clean interfaces to production-ready systems.</span>{' '}
            Whether it's a complex backend flow or a small UI animation, I care about getting it right.
          </motion.p>

          <div className="about-stats">
            <div className="about-stat">
              <div className="about-stat-num">2+</div>
              <div className="about-stat-label">Live projects shipped</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-num">2025</div>
              <div className="about-stat-label">Studying Software Engineering, Moringa School</div>
            </div>
          </div>
        </div>

        <div className="value-list">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="value-item"
            >
              <div className="value-index">0{i + 1}</div>
              <div>
                <div className="value-title">{v.title}</div>
                <p>{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
