import React from "react";
import Image from "next/image";
import InCartCounter from "./InCartCounter";
import styles from "../styles/ProductItemOnCarts.module.css";
import { removeFromCart } from '../actions'
import { useDispatch } from 'react-redux'
import { formatingPrices } from "../utils";
import { DeleteIco } from "./Icons/Others";


const ProductItemOnCart = ({ product }) => {

  const dispatch = useDispatch();

  return (
    <div className="flex align-items gap border no-select">
      
      <div className={styles.image}>
        <Image width="100" height="100" src={product.imgUrl} alt="" objectFit={'contain'} />
      </div>

      <div className={styles.content}>
        <a className={styles.name} href="#">
          {product.name}
        </a>
        <div className={styles.uniprice}>Unit Price S/. {formatingPrices(product.price)}</div>
        <div className="flex align-items space-between top gap">
          <InCartCounter
            id={product.id}
            qty={product.qty} />
          <span className={styles.price}>S/.{formatingPrices((product.price * product.qty))}</span>
        </div>
      </div>

      <span onClick={() => {
        dispatch(removeFromCart(product.id));
      }}>
        <DeleteIco />
      </span>
    </div>
  );
};

export default ProductItemOnCart;
