import styles from './search.module.scss'

const Search = () => {
  return (
    <div className={styles.search}>
      <input className={styles.input} placeholder='Search' />
    </div>
  )
}

export default Search;