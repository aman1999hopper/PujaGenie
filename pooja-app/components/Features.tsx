import { motion } from 'framer-motion'

export default function Features({ features }: { features: { title: string; desc: string }[] }) {
  return (
    <section id="features" className="mt-8">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Features</h2>
        <p className="text-gray-300 mt-2">Everything you need to launch fast.</p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <motion.div key={f.title} whileHover={{ y: -6 }} className="p-6 bg-white/3 rounded-lg border border-white/6">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-gray-300 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
