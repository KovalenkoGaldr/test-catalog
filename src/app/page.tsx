import axios from "axios";

import { IProductListProps } from "@/types";
import ProductList from "@/components/ProductList/ProductList";
import Filters from "@/components/Filters/Filters";

import styles from "./page.module.scss";

export default async function Products() {
  let products: IProductListProps["products"] = [];

  try {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    products = data;
  } catch (err) {
    console.error('Error: ', err);
    products = [];
  }

  return (
    <div className={styles.productsPage}>
      <ProductList products={products}/>
    </div>
  );
}
