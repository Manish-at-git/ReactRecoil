import React from "react";
import { useRecoilState } from "recoil";
import { productState } from "../../recoil/productRecoil";
import { NavLink } from "react-router-dom";

function ProductItems(props) {
  const [products, setProduct] = useRecoilState(productState);

  const deleteItem = (id) => {
    const newProductList = products.filter((item) => item.id != id);
    setProduct(newProductList);
  };
  return (
    <div className="column is-4 has-text-centered">
      <div className="box box__custom">
        <NavLink
          className="button button-edit is-warning"
          to={`/editProduct/${props.product.id}`}
        >
          edit
        </NavLink>
        <button
          className="button button-delete is-danger"
          onClick={() => deleteItem(props.product.id)}
        >
          delete
        </button>
        <h1 className="title is-4">{props.product.picture}</h1>
        <h2 className="subtitle is-5">{props.product.name}</h2>
        <span className="tag">$ {props.product.price}/kg</span>
      </div>
    </div>
  );
}

export default ProductItems;
