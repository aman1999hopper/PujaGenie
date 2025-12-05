// pages/api/poojas/index.ts
import type { NextApiRequest, NextApiResponse } from 'next'

const sample = [
  { id: 'p1', title: 'Ganesh Puja', shortDesc: 'For auspicious beginnings', price: 50000, durationMinutes: 45, image: 'https://media.istockphoto.com/id/1276768657/photo/hawan-kund-in-holly-pooja.webp?a=1&b=1&s=612x612&w=0&k=20&c=5ceFySf_rHWwtXS20KcJQ_ekwsborUiHGKu4oIswxLY=' },
  { id: 'p2', title: 'Havan', shortDesc: 'Fire ritual for prosperity', price: 80000, durationMinutes: 90, image: 'https://media.istockphoto.com/id/1224367527/photo/items-for-the-indian-yajna-ritual-indian-vedic-fire-ceremony-called-pooja-a-ritual-rite-for.jpg?s=612x612&w=0&k=20&c=NtS_f31T1T8Wg1Zq_nWpxsr04KBEmZ91Ztf0HbYWRho=' },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(sample)
}
