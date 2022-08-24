import React from "react";
import { useRecoilValue } from "recoil";
import { filteredProducts } from "../../recoil/productRecoil";
import ProductItems from "./ProductItems";

function Products() {
  const products = useRecoilValue(filteredProducts);
  console.log(products);
  return (
    <div className="columns is-multiline">
      {products.map((product, id) => (
        <ProductItems key={id} product={product} />
      ))}
    </div>
  );
}

export default Products;
