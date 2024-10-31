import Image from 'next/image';
import { IProduct } from '@/types';
import styles from './productCard.module.scss'


const ProductCard = ({ category, image, title, price }: IProduct) => {
  return (
    <div className={styles.productCard}>

      <div className={styles.topCard}>
        <div className={styles.textCard}>
          <div className={styles.category}>{category}</div>
          <p className={styles.title}>{title}</p>
        </div>
        <button className={styles.favoriteButton}>
          <img src="icons/Like.svg" alt="like" width={26} height={26} />
        </button>
      </div>
      <Image 
        src={image} 
        alt="photo" 
        width={150} 
        height={220} 
        style={{ objectFit: 'contain' }} 
        className={styles.image}
/>
      <p className={styles.price}>{price}$</p>

    </div>
  )
}

export default ProductCard;