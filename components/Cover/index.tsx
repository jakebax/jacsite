import style from './Cover.module.css'

export default function Cover() {
  return (
    <img
      alt="Walking Spirits album cover"
      className={style.cover}
      height={306}
      src="/walking-spirits-cover.jpg"
      width={306}
    />
  )
}
