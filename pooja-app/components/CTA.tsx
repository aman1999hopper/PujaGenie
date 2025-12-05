export default function CTA({ cta }: { cta: { title: string; sub: string; button: string } }) {
  return (
    <section id="cta" className="mt-12 rounded-xl p-8 bg-gradient-to-r from-indigo-900/20 to-transparent border border-white/6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold">{cta.title}</h3>
          <p className="text-gray-300 mt-1">{cta.sub}</p>
        </div>
        <div>
          <a href="#contact" className="px-4 py-2 rounded bg-indigo-500 text-black font-medium">{cta.button}</a>
        </div>
      </div>
    </section>
  )
}
