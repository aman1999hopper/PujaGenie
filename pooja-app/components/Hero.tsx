import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero({ tag, desc }: { tag: string; desc: string }) {
  return (
    <section className="pt-10 md:pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold leading-tight"
          >
            {tag}
          </motion.h1>
          <motion.p
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-gray-300 max-w-xl"
          >
            {desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex gap-4"
          >
            <a
              href="#cta"
              className="px-5 py-3 rounded-md bg-indigo-500 text-black font-semibold"
            >
              Get started
            </a>
            <a
              href="#features"
              className="px-5 py-3 rounded-md border border-white/10"
            >
              Learn more
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="relative"
        >
          <div className="rounded-2xl bg-gradient-to-tr from-gray-800/60 to-black/40 p-1 shadow-xl">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6">
              <div className="h-56 md:h-72 w-full rounded-lg overflow-hidden border border-white/5">
                <Image
                  src="/images/hero.png" // <-- Put your image path here
                  alt="Hero Image"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
