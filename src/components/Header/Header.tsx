import Link from "next/link"
import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>лого</Link>
      <Link href='/favorites'>лайк</Link>
    </header>
  )
}

export default Header;