import axios from "axios";

import { IProductListProps } from "@/types";
import ProductList from "@/components/ProductList/ProductList";
import Filters from "@/components/Filters/Filters";

import styles from "./page.module.css";

export default async function Products() {
  let products: IProductListProps["products"] = [];

  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    products = response.data;
  } catch (err) {
    console.error('Error: ', err);
    products = [];
  }

  return (
    <div className={styles.productsPage}>
      <Filters />
      <ProductList products={products}/>
    </div>
  );
}
