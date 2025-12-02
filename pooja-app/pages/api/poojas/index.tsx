// pages/api/poojas/index.ts
import type { NextApiRequest, NextApiResponse } from 'next'
const sample = [
  { id: 'p1', title: 'Ganesh Puja', shortDesc: 'For auspicious beginnings', price: 50000, durationMinutes: 45, image: '/images/ganesh.jpg' },
  { id: 'p2', title: 'Havan', shortDesc: 'Fire ritual for prosperity', price: 80000, durationMinutes: 90, image: '/images/havan.jpg' },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(sample)
}
