import style from './Tuber.module.css'
import EmbeddedContent from '../EmbeddedContent'

export type TuberProps = {
  allow?: string
  height?: string | number
  src: string
  width?: string | number
}

export default function Tuber({
  allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  height = 478,
  src,
  width = 850,
}: TuberProps) {
  return (
    <section className={style.tuber}>
      <EmbeddedContent
        allow={allow}
        allowFullScreen={true}
        height={height}
        src={src}
        width={width}
      />
    </section>
  )
}
