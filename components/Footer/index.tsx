import style from './Footer.module.css'
import { SiFacebook as Facebook } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <p>
        Connect with us on{' '}
        <a href="https://www.facebook.com/TheJacNZ/" className={style.icon}>
          <Facebook />
        </a>{' '}
        <span className={style.separator}>|</span>
        Copyright 2021 The Jac <span className={style.separator}>|</span> Site
        built by <a href="https://paperhat.ltd/">Paperhat</a>
      </p>
    </footer>
  )
}
