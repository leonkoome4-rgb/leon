"use client"
import React from 'react'
import Hero from '../src/components/Hero'
import CanvasBackground from '../src/components/CanvasBackground'
import Skills from '../src/components/Skills'
import Projects from '../src/components/Projects'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import CommandPalette from '../src/components/CommandPalette'
import Profile from '../src/components/Profile'

export default function Home() {
  return (
    <main className="site">
      <CanvasBackground />
      <CommandPalette />

      <div className="container">
        <section id="hero">
          <Hero />
        </section>

        <section id="profile">
          <Profile />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section>
          <Projects />
        </section>

        <section>
          <Contact />
        </section>
      </div>

      <footer style={{ marginTop: 56, padding: '28px 0', borderTop: '1px solid rgba(255,255,255,0.03)', textAlign: 'center', color: 'var(--muted)' }}>
        <p>© 2026 Leon. Designed &amp; developed with passion.</p>
      </footer>
    </main>
  )
}
