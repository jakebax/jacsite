import Bandcamp from '../components/Bandcamp'
import CallToAction from '../components/CallToAction'
import Clouds from '../components/Clouds'
import Cover from '../components/Cover'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import Player from '../components/Player'
import Rule from '../components/Rule'
import Section from '../components/Section'
import TextBlock from '../components/TextBlock'
import Tuber from '../components/Tuber'

export default function Home() {
  return (
    <>
      <Clouds />
      <Header />
      <Player>
        <Cover />
        <Bandcamp />
        <CallToAction />
      </Player>
      <Main>
        <Section>
          <TextBlock>
            <h2 id="tour-dates">
              <a className="return" href="#">
                Tour dates
              </a>
            </h2>
            <p>
              <strong>The Jac is back!</strong> A year on from the
              COVID-enforced online release of their third studio album &lsquo;
              <strong>A Gathering</strong>&rsquo;, the band is reforming in 2021
              to tour Aotearoa once again with a follow up album, &lsquo;
              <strong>Walking Spirits</strong>&rsquo;!
            </p>
            <ul>
              <li>
                PALMERSTON NORTH: Manawatu Jazz and Blues Festival, Globe
                theatre. 8:00pm, June 3rd.{' '}
                <a href="https://nz.patronbase.com/_GlobeTheatre/Productions/JAC/Performances">
                  TICKETS
                </a>
              </li>
              <li>
                KĀPITI COAST: Te Raukura ki Kāpiti, Kāpiti Performing Arts
                Center. 7:30pm, June 5th.{' '}
                <a href="https://www.eventfinda.co.nz/2021/the-jac-gathering-walking-spirits-double-album-release/paraparaumu/tickets">
                  TICKETS
                </a>
              </li>
              <li>
                WELLINGTON: Wellington Jazz Festival, City Gallery Auditorium.
                5:00pm, June 13th{' '}
                <a href="https://www.undertheradar.co.nz/ticket/14420/The-Jac-Walking-Spirits---Album-Release.utr">
                  TICKETS
                </a>
              </li>
              <li>
                CHRISTCHURCH: 03 Sessions, Space Academy. 8:00pm, June 17th.{' '}
                <a href="https://events.humanitix.com/the-jac-wlg/tickets">
                  TICKETS
                </a>
              </li>
              <li>
                Oamaru Opera House. 8:00pm, June 18th.{' '}
                <a href=" https://oamaruoperahouse.co.nz/">TICKETS</a>
              </li>
              <li>
                DUNEDIN: Dunedin Jazz Club Concert Series, Hanover Hall. 8:00pm,
                June 19th <a href="https://dunedinjazz.club/">TICKETS</a>
              </li>
              <li>
                AUCKLAND: Creative Jazz Club, Anthology Lounge. 8:00pm, August
                25th. <a href="https://www.creativejazzclub.co.nz/">TICKETS</a>
              </li>
              <li>
                HAMILTON: Nivara Lounge. 8:00pm, August 26th{' '}
                <a href="https://www.undertheradar.co.nz/ticket/14539/The-Jac-A-GatheringWalking-Spirits-Double-Album-Release.utr">
                  TICKETS
                </a>
              </li>
              <li>
                NELSON: Fairfield House. 7:30pm, September 3rd.{' '}
                <a href="https://www.undertheradar.co.nz/ticket/14503/The-Jac-A-GatheringWalking-Spirits-Double-Album-Release.utr">
                  TICKETS
                </a>
              </li>
              <li>
                MOTUEKA: Chanel Arts Centre. 7:30pm, September 4th{' '}
                <a href="https://www.undertheradar.co.nz/ticket/14504/The-Jac-A-GatheringWalking-Spirits-Double-Album-Release.utr">
                  TICKETS
                </a>
              </li>
              <li>
                GOLDEN BAY: The Mussel Inn. 8:00pm, September 5th.{' '}
                <a href="http://www.musselinn.co.nz/">TICKETS</a>
              </li>
            </ul>
          </TextBlock>
        </Section>
        <Section>
          <TextBlock>
            <h2 id="a-gathering">
              <a className="return" href="#">
                About the album
              </a>
            </h2>
            <p>
              Featuring material from their 2017 collaboration with Korean
              quartet Black String, plus a swathe of brand new original
              compositions, A Gathering encapsulates a milestone in their sound.
              Recorded at Roundhead Studios in Auckland, it is a beautifully
              produced illustration of a band at the height of its powers;
              showcasing their intricate and immersive compositions; tight
              ensemble playing, and assertive, individual improvising voices.
              Two of the tracks from the album, “Beyond the Palace” and “A
              Gathering” were nominated for the APRA NZ Best Jazz Composition of
              the Year Award in 2018, and a third, "Tui", won the same award in
              2020.
            </p>
            <p>
              Given the emergence of Covid-19 in March 2020, The Jac’s
              accompanying tour was put on the back-burner until 2021. A
              Gathering will now be released in two stages: This is the first
              five of 10 tracks and the second five will be released in the lead
              up to the 2021 tour.
            </p>
          </TextBlock>
        </Section>
        <Tuber src="https://www.youtube.com/embed/4jUMUcCuMJ4" />
        <Rule />
        <Section>
          <TextBlock>
            <h2 id="about-the-jac">
              <a className="return" href="#">
                About The Jac
              </a>
            </h2>
            <p>
              Since 2010 the 8-piece ensemble The Jac has been a leading voice
              in the New Zealand jazz scene, pushing a modern sound with their
              distinctive, through-composed compositions, tight ensemble playing
              and impressive live shows. Based in Wellington and drawing talent
              from Melbourne and Montreal, the band brings together musicians
              from the jazz, classical and metal scenes.
            </p>
            <p>
              The Jac have gone from strength to strength: their debut album
              Nerve (2014) was nominated for the NZ Music Awards Best Jazz Album
              of the year; the opening track “Sons of Thunder” from The Green
              Hour (2015) won New Zealand’s inaugural Jazz Composition of the
              Year award; in 2017 they performed 12 shows around the country as
              part of Chamber Music New Zealand’s “Encompass” tour, solidifying
              their cross-genre credentials; and this was followed by a
              headlining concert with Korean traditional/jazz fusion group,
              Black String, at the Wellington Jazz Festival, which sold out and
              garnered rave reviews. A spot at the Jarasum International Jazz
              Festival and a tour of 6 cities in South Korea followed. In 2019
              they were again awarded Jazz Composition of the Year award for
              “Chungin’”
            </p>
            <p>
              The band features musicians bringing influences and expertise from
              outside the jazz spectrum. Notable among these are Matthew
              Allison, associate principal trombonist in the New Zealand
              Symphony Orchestra, and Shaun Anderson, drummer for metal bands
              Saving Grace and Depths. Completing the line-up are Alexis French,
              trumpet; Nick Tipping, bass; Chris Buckland, saxophones; Daniel
              Millward, piano and compositions; Callum Allardice, guitar and
              compositions; and Jake Baxendale, saxophones and compositions.
            </p>
          </TextBlock>
        </Section>
        <Tuber src="https://www.youtube.com/embed/IPYD_OjoMzA" />
      </Main>
      <Footer />
    </>
  )
}
