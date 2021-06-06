import style from './CallToAction.module.css'

export default function CallToAction() {
  return (
    <section className={style.section}>
      <p>
        <span className={style.album}>Walking Spirits</span>, the follow album
        to 2020&rsquo;s <span className={style.album}>A Gathering</span>,
        recently nominated for the{' '}
        <strong>Recorded Music NZ Best Jazz Artist award</strong>, is out now.
      </p>
      <p>
        The Jac are marking a decade of music-making together with an
        accompanying double album release tour of Aotearoa between June and
        September 2021.
      </p>
      <p>
        <a
          href="https://thejac1.bandcamp.com/album/a-gathering"
          className={style.buynow}
        >
          Get your copy
        </a>
      </p>
    </section>
  )
}
