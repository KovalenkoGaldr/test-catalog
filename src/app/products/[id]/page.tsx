import axios from 'axios';
import Image from 'next/image';
import { Rating } from '@mui/material';

import { IProduct } from '@/types';

import styles from './page.module.scss'

export async function generateStaticParams() {
  const { data: products } = await axios.get('https://fakestoreapi.com/products');

  return products.map((product: IProduct) => ({
    id: product.id.toString(),
  }));
}

const ProductItem = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  let product: IProduct | null = null;

  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    product = data;
  } catch (err) {
    console.error('Error: ', err);
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <Image src={product.image} alt='photo' width={200} height={250} />
      </div>

      <div className={styles.info}>

        <div className={styles.mainInfo}>
          <div>
            <p className={styles.title}>
              {product.title}
            </p>
            <div className={styles.rating}>
              <Rating name="read-only" value={product.rating.rate} readOnly precision={0.1}/>
              {`(${product.rating.count} rated)`}
            </div>
          </div>
          <div>
            <button className={styles.favoriteButton}>
              <img src="icons/Like.svg" alt="like" width={26} height={26} />
            </button>
          </div>
        </div>

        <div className={styles.secondaryInfo}>
          <div>
            <div className={styles.description}>
              Description
            </div>
            {product.description}
          </div>

          <div className={styles.price}>
            {product.price}$
            <button className={styles.buyButton}>Купить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
