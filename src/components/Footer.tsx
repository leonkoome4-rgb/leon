"use client"
import React from 'react'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="site-footer container">
      <div className="footer-top">
        <a href="#hero" data-cursor className="nav-logo">
          LK<span className="text-gradient">.</span>
        </a>

        <div className="footer-links">
          <a href="#about" data-cursor>About</a>
          <a href="#skills" data-cursor>Skills</a>
          <a href="#projects" data-cursor>Work</a>
          <a href="#contact" data-cursor>Contact</a>
          <a href="https://github.com/leonkoome4-rgb" target="_blank" rel="noreferrer noopener" data-cursor>GitHub</a>
          <a href="https://www.linkedin.com/in/leon-koome-3778b5414/" target="_blank" rel="noreferrer noopener" data-cursor>LinkedIn</a>
          <a href="/resume.pdf" download data-cursor>Résumé</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Leon Koome. Designed &amp; built with care.</span>
        <button className="back-to-top" data-cursor onClick={scrollTop}>Back to top ↑</button>
      </div>
    </footer>
  )
}
