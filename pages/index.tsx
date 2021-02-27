import CallToAction from '../components/CallToAction'
import Cover from '../components/Cover'
import Bandcamp from '../components/Bandcamp'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Player from '../components/Player'
import Tuber from '../components/Tuber'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Player>
          <Cover />
          <Bandcamp />
          <CallToAction />
        </Player>
        <Tuber />
      </main>
      <Footer />
    </>
  )
}
