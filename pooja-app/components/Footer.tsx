export default function Footer({ brand }: { brand: string }) {
  return (
    <footer id="contact" className="mt-12 border-t border-white/5 pt-8 pb-10 text-sm text-gray-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>© {new Date().getFullYear()} {brand}. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-indigo-300">Privacy</a>
          <a href="#" className="hover:text-indigo-300">Terms</a>
          <a href="#" className="hover:text-indigo-300">Contact</a>
        </div>
      </div>
    </footer>
  )
}
