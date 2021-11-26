import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Selement from '../components/selement.js'
export default function Home() {
  return (
    <div className="w-full h-full bg-color">
      <Nav />
      <Selement />
      <Footer />
    </div>
  )
}
