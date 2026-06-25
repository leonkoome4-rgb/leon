"use client"
import React from 'react'

export default function CanvasBackground() {
  return (
    <div aria-hidden className="bg-spotlight">
      <div className="bg-grid" />
      <div className="bg-noise" />
    </div>
  )
}
