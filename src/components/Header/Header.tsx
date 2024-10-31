import Link from "next/link"
import Image from "next/image"

import styles from './header.module.scss'
import Search from "../Search/Search"

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <div className={styles.searchBlock}>
          <Link href='/'>
            <Image src='icons/Gushop.svg' alt="Gushop" width={93} height={40}/>
          </Link>

          <Search />

        </div>
        <Link href='/favourites'>
          <div className={styles.favourites}>
            <Image src='icons/Like.svg' alt="Like" width={20} height={20}/>
            Favourite
          </div>
        </Link>
      </div>

      <ul className={styles.navigate}>
        <li>Main page</li>
        <li>Delivery</li>
        <li>Contact</li>
        <li>Blog</li>
      </ul>
    </header>
  )
}

export default Header;