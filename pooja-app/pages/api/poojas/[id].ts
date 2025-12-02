// pages/api/poojas/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next'

const details: Record<string, any> = {
  p1: { id: 'p1', title: 'Ganesh Puja', longDesc: 'Full Ganesh Pooja details...', includedItems: ['Flowers','Prasad'], price: 50000 },
  p2: { id: 'p2', title: 'Havan', longDesc: 'Havan description...', includedItems: ['Samagri','Havan Kund'], price: 80000 }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const d = details[String(id)]
  if (!d) return res.status(404).json({ message: 'Not found' })
  res.status(200).json(d)
}
