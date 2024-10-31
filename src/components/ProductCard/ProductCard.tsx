import Image from 'next/image';
import { IProduct } from '@/types';
import styles from './productCard.module.scss'


const ProductCard = ({ category, image, title, price }: IProduct) => {
  return (
    <div className={styles.productCard}>

      <div className={styles.category}>{category.toLowerCase()}</div>
      <button className={styles.favoriteButton}>
        <img src="icons/Like.svg" alt="like" width={20} height={20} />
      </button>
      <h3 className={styles.title}>{title}</h3>
      <Image 
        src={image} 
        alt="photo" 
        width={150} 
        height={220} 
        style={{ objectFit: 'contain' }} 
/>
      <p className={styles.price}>{price}$</p>

    </div>
  )
}

export default ProductCard;