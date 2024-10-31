'use client';
import { useEffect, useState } from 'react';

import { IProductListProps } from '@/types';
import ProductCard from '../ProductCard/ProductCard';

import styles from './productList.module.scss'

const ProductList = ({ products }: IProductListProps) => {
  const [sortedProducts, setSortedProducts] = useState(products);
  const [isAscending, setIsAscending] = useState(false);

  useEffect(() => {
    const sortedArray = [...products].sort((a, b) => a.price - b.price);
    setSortedProducts(sortedArray);
  }, [products]);

  const handleSortByPrice = () => {
    const sortedArray = [...sortedProducts].sort((a, b) => {
      return isAscending ? a.price - b.price : b.price - a.price;
    });
    setSortedProducts(sortedArray);
    setIsAscending(!isAscending);
  };
  
  return (
    <div className={styles.content}>
      <div className={styles.breadCrumbs}>Main {'>'} Catalog</div>
      <h1 className={styles.title}>Catalog</h1>
      <div className={styles.sorted} onClick={handleSortByPrice}>
        Price {isAscending ? (
          <img src='icons/VectorASC.svg' alt='▼'/>
        ) : (
          <img src='icons/VectorDESC.svg' alt='▲'/>
        )}
      </div>
      <div className={styles.list}>
        {sortedProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList;