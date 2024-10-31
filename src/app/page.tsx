import axios from "axios";

import { IProductListProps } from "@/types";
import ProductList from "@/components/ProductList/ProductList";

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
    <div>
      <ProductList products={products}/>
    </div>
  );
}
