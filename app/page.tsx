"use client"
import React from 'react'
import Navbar from '../src/components/Navbar'
import Cursor from '../src/components/Cursor'
import Hero from '../src/components/Hero'
import CanvasBackground from '../src/components/CanvasBackground'
import Marquee from '../src/components/Marquee'
import Skills from '../src/components/Skills'
import Projects from '../src/components/Projects'
import About from '../src/components/About'
import CTA from '../src/components/CTA'
import Contact from '../src/components/Contact'
import CommandPalette from '../src/components/CommandPalette'
import Footer from '../src/components/Footer'

export default function Home() {
  React.useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <CanvasBackground />
      <Cursor />
      <Navbar />
      <CommandPalette />

      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
