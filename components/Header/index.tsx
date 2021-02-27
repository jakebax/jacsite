import styles from './Header.module.css'

export default function Header() {
  return (
    <>
      <header className={styles.header}>The Jac</header>
      <div className={styles.title}>
        &ldquo;A Gathering&rdquo; album release tour 2021 coming soon!
      </div>
    </>
  )
}
