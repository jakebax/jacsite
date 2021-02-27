import style from './CallToAction.module.css'

export default function CallToAction() {
  return (
    <section className={style.section}>
      <p>
        &lsquo;A Gathering&rsquo; is The Jac&lsquo;s third studio album, made up
        of compositions directly drawn from, and inspired by, their 2017
        collaboration with South Korean traditional/jazz fusion group, Black
        String.
      </p>
      <p>
        Get the album at{' '}
        <a href="https://thejac1.bandcamp.com/album/a-gathering">Bandcamp</a>.
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
