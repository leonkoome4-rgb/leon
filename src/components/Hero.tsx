"use client"
import React from 'react'
import { motion } from 'framer-motion'

const roles = ['Frontend Engineer', 'UI Animator', '3D Web Artist', 'Design Systems']

export default function Hero() {
  const [index, setIndex] = React.useState(0)
  React.useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero container">
      <div className="hero-left">
        <h1>
          Hi, I'm <span style={{ color: 'var(--neon)' }}>Leon</span>
          <br />
          <motion.span key={index} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            {roles[index]}
          </motion.span>
        </h1>

        <p className="hero-sub">I design and build high-end frontend experiences — interactive 3D, motion-led UI, and production-ready design systems.</p>

        <div className="hero-ctas">
          <a href="#projects" className="btn btn-primary">View Work</a>
          <a href="#contact" className="btn btn-ghost">Contact</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="avatar glass-card">
          <img src="/avatar.svg" alt="Leon avatar" style={{ width: '90%', borderRadius: '50%' }} />
        </div>
      </div>
    </section>
  )
}
