import Link from 'next/link'
import type { FC } from 'react'

type Pooja = {
  id: string
  title: string
  shortDesc: string
  price: number
  durationMinutes?: number
  image?: string
}

const PoojaCard: FC<{ pooja: Pooja }> = ({ pooja }) => {
  return (
    <Link
      href={`/poojas/${pooja.id}`}
      className="block border rounded-lg overflow-hidden hover:shadow-md transition p-2 bg-white"
    >
      <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-500">
        {pooja.image ? (
          <img
            src={pooja.image}
            alt={pooja.title}
            className="object-cover h-full w-full"
          />
        ) : (
          <span className="text-sm">No image</span>
        )}
      </div>

      <div className="p-3">
        <h3 className="font-semibold text-lg text-gray-700">{pooja.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{pooja.shortDesc}</p>

        <div className="mt-3 flex items-center justify-between">
          <span className="font-medium text-gray-500">
            ₹{(pooja.price / 100).toFixed(2)}
          </span>
          <span className="text-xs text-gray-500">
            {pooja.durationMinutes ?? 60} mins
          </span>
        </div>
      </div>
    </Link>
  )
}

export default PoojaCard
