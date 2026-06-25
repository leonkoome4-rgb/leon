"use client"
import React from 'react'

const items = ['Software Engineer', 'React', 'Next.js', 'TypeScript', 'Node.js', 'UI/UX', 'Open to work']

export default function Marquee() {
  const loop = [...items, ...items]

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span key={i} className={`marquee-item ${i % items.length === 0 ? 'is-accent' : ''}`}>
            {item}
            <span className="dot" />
          </span>
        ))}
      </div>
    </div>
  )
}
