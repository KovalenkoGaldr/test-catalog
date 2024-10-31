import { IProductListProps } from '@/types';

import styles from './productList.module.scss'
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ products }: IProductListProps) => {
  return (
    <div className={styles.content}>
      <div className={styles.breadCrumbs}>Main {'>'} Catalog</div>
      <h1 className={styles.title}>Catalog</h1>
      <div className={styles.sorted}>Price</div>
      <div className={styles.list}>
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList;