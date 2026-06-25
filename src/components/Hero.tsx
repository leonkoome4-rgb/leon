"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Magnetic from './Magnetic'

const roles = ['Software Engineer', 'Frontend Specialist', 'Full-Stack Builder', 'Problem Solver']
const NAME = 'Leon Koome'

export default function Hero() {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="hero" className="hero container">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="eyebrow"
      >
        <span className="eyebrow-num">01</span> Available for work
      </motion.div>

      <h1 className="hero-title">
        {NAME.split('').map((char, i) => (
          <motion.span
            key={i}
            className="letter"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.03, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {char === ' ' ? ' ' : char}
          </motion.span>
        ))}
      </h1>

      <div className="hero-role-row">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-role text-gradient"
        >
          {roles[index]}
        </motion.span>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="hero-sub"
      >
        I design and build fast, reliable web applications — from clean interfaces to
        production-ready systems. I care about getting the details right.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="hero-ctas"
      >
        <Magnetic>
          <a href="#projects" data-cursor className="btn btn-primary">View my work</a>
        </Magnetic>
        <Magnetic>
          <a href="#contact" data-cursor className="btn btn-ghost">Get in touch</a>
        </Magnetic>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.85 }}
        className="hero-stats"
      >
        <div>
          <div className="hero-stat-num">2+</div>
          <div className="hero-stat-label">Live projects shipped</div>
        </div>
        <div>
          <div className="hero-stat-num">100%</div>
          <div className="hero-stat-label">Focused on detail</div>
        </div>
        <div>
          <div className="hero-stat-num">∞</div>
          <div className="hero-stat-label">Always learning</div>
        </div>
      </motion.div>

      <div className="scroll-cue">
        <div className="scroll-cue-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
