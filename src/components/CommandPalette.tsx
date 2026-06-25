"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  const commands = [
    { id: 1, title: 'Go to top', description: 'Jump to the hero section', action: () => scrollTo('hero') },
    { id: 2, title: 'About me', description: 'Read about my background', action: () => scrollTo('about') },
    { id: 3, title: 'Skills', description: 'See my technical skills', action: () => scrollTo('skills') },
    { id: 4, title: 'View projects', description: 'See my featured work', action: () => scrollTo('projects') },
    { id: 5, title: 'Contact me', description: 'Get in touch', action: () => scrollTo('contact') },
    { id: 6, title: 'Email me', description: 'Open your email client', action: () => { window.location.href = 'mailto:leonkoome4@gmail.com'; setIsOpen(false) } },
    { id: 7, title: 'GitHub', description: 'Visit my GitHub profile', action: () => { window.open('https://github.com/leonkoome4-rgb', '_blank'); setIsOpen(false) } },
    { id: 8, title: 'LinkedIn', description: 'Connect with me on LinkedIn', action: () => { window.open('https://www.linkedin.com/in/leon-koome-3778b5414/', '_blank'); setIsOpen(false) } },
    { id: 9, title: 'Download résumé', description: 'Get my résumé as a PDF', action: () => { window.open('/resume.pdf', '_blank'); setIsOpen(false) } }
  ]

  const filtered = commands.filter(cmd => cmd.title.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(!isOpen)
        setSearch('')
      }
      if (e.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        data-cursor
        className="btn-ghost"
        style={{ position: 'fixed', bottom: 24, right: 24, borderRadius: 100, padding: '10px 16px', zIndex: 40, fontSize: 13 }}
        aria-label="Open command palette"
      >
        ⌘K
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)', zIndex: 40 }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              style={{ position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 'min(92vw,560px)', zIndex: 50 }}
            >
              <div className="glass-card" style={{ overflow: 'hidden', padding: 0, borderRadius: 20 }}>
                <div style={{ padding: 12, borderBottom: '1px solid var(--border)' }}>
                  <input
                    autoFocus
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search commands..."
                    style={{ width: '100%', background: 'transparent', color: 'var(--ink)', border: 'none', outline: 'none', fontSize: 16 }}
                  />
                </div>

                <div style={{ maxHeight: 320, overflowY: 'auto' }}>
                  {filtered.length > 0 ? (
                    filtered.map((cmd, idx) => (
                      <motion.button
                        key={cmd.id}
                        onClick={cmd.action}
                        data-cursor
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.03 }}
                        style={{ display: 'flex', width: '100%', padding: '12px 14px', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', background: 'transparent', color: 'var(--ink)', cursor: 'pointer' }}
                      >
                        <div style={{ textAlign: 'left' }}>
                          <div style={{ fontWeight: 600, fontFamily: 'var(--font-display)' }}>{cmd.title}</div>
                          <div style={{ color: 'var(--muted)', fontSize: 13 }}>{cmd.description}</div>
                        </div>
                        <div style={{ color: 'var(--muted)', fontSize: 12 }}>↵</div>
                      </motion.button>
                    ))
                  ) : (
                    <div style={{ padding: 24, textAlign: 'center', color: 'var(--muted)' }}>No commands found</div>
                  )}
                </div>

                <div style={{ padding: 10, borderTop: '1px solid var(--border)', textAlign: 'right', color: 'var(--muted)', fontSize: 12 }}>
                  ESC to close
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
