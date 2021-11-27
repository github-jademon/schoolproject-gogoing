import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Nav from '../components/nav'
import Selement from '../components/selement'

export default function Home() {
  return (
    <div className="w-full h-full bg-color">
      <Nav />
      <Selement />
      {/* <Footer /> */}
    </div>
  )
}
