"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Magnetic from './Magnetic'

export default function CTA() {
  return (
    <div className="cta-band">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="cta-inner"
      >
        <h2>Got an idea? Let's build it.</h2>
        <Magnetic>
          <a href="#contact" data-cursor className="btn btn-primary">Start a conversation →</a>
        </Magnetic>
      </motion.div>
    </div>
  )
}
