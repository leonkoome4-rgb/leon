import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

async function sendEmail(name: string, email: string, message: string) {
  if (!resend) return
  await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>',
    to: process.env.CONTACT_TO_EMAIL || 'leonkoome4@gmail.com',
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`
  })
}

async function sendWhatsApp(name: string, email: string, message: string) {
  const phone = process.env.CALLMEBOT_PHONE
  const apikey = process.env.CALLMEBOT_APIKEY
  if (!phone || !apikey) return
  const text = `New portfolio message\nFrom: ${name} (${email})\n${message}`
  const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(text)}&apikey=${apikey}`
  await fetch(url)
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  try {
    await Promise.all([sendEmail(name, email, message), sendWhatsApp(name, email, message)])
  } catch (err) {
    console.error('Contact notification failed:', err)
    return res.status(500).json({ message: 'Failed to send notification' })
  }

  return res.status(200).json({ ok: true })
}
