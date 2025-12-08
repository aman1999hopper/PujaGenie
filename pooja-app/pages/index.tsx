import type { GetStaticProps, NextPage } from 'next'
import fs from 'fs'
import path from 'path'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

type HomeData = {
  brand: string
  tagline: string
  description: string
  features: { title: string; desc: string }[]
  cta: { title: string; sub: string; button: string }
}

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'data', 'home.json')
  const json = fs.readFileSync(filePath, 'utf-8')
  const data: HomeData = JSON.parse(json)

  return {
    props: { data }
  }
}

const Home: NextPage<{ data: HomeData }> = ({ data }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white antialiased">
      <Navbar brand={data.brand} />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Hero tag={data.tagline} desc={data.description} />
        <Features features={data.features} />
        <CTA cta={data.cta} />
        <Footer brand={data.brand} />
      </main>
    </div>
  )
}

export default Home
