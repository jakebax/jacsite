import EmbeddedContent from '../EmbeddedContent'
import style from './Bandcamp.module.css'

export default function Bandcamp() {
  return (
    <section className={style.bandcamp}>
      <EmbeddedContent
        src="https://bandcamp.com/EmbeddedPlayer/album=372477488/size=large/bgcol=transparent/linkcol=0687f5/artwork=none/transparent=true/"
        title="Walking Spirits by The Jac"
      />
    </section>
  )
}
