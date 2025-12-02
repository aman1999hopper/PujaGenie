import useSWR from 'swr'
import PoojaCard from '../components/PoojaCards'
import axios from 'axios'

const fetcher = (url: string) => axios.get(url).then(r => r.data)

export default function Home() {
  const { data: poojas } = useSWR('/api/poojas', fetcher, { refreshInterval: 0 })

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Pooja & Yagna</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {poojas?.map((p: any) => <PoojaCard key={p.id} pooja={p} />)}
      </div>
    </div>
  )
}
