"use client"
import React from 'react'

export default function CanvasBackground() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 opacity-85">
      <div className="bg-stars" style={{ position: 'absolute', inset: 0 }} />
      <div className="bg-aurora" style={{ position: 'absolute', inset: 0 }} />
    </div>
  )
}
