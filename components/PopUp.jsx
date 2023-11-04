import React from "react";
import styles from "../styles/PopUp.module.css";
import Image from "next/image";
import { check } from '../assets'
import { useState } from 'react'
import { useSelector } from "react-redux";
import { useCartItems } from "../hooks";
import { formatingPrices, getTotalPrice } from "../utils";


const PopUp = () => {

  const isOpen = useSelector((state) => state.cart.popUpOpen);
  const { cartItems } = useCartItems()

  return (
    <>
      {
        isOpen && (
          <div>
            <div className={styles.container}>
              <div className={styles.wrapper}>
                <div className={styles.header}>
                  <span>
                    <Image
                      src={check}
                      alt="check"
                      width={10}
                      height={10}
                    />
                  </span>

                  <span>Producto Agregado</span>
                </div>

                {/* <div className={styles.body}>

                  <div className={styles.image}>
                    <Image src={product.imgUrl} alt="producto" width={100} height={100} />
                  </div>

                  <div className={styles.content}>
                    <div className={styles.top_content}>
                      <span className={styles.title}>{product.name}</span>
                      <span>S/{product.price}</span>
                      <span></span>
                    </div>

                    <div className={styles.bottom_content}>
                      <div>
                        <span className={styles.left_text}>Cart Total</span>
                      </div>
                      <div className={styles.right_text}>
                        <span>S/{formatingPrices(getTotalPrice(cartItems))}</span>
                      </div>
                    </div>
                  </div>
                </div> */}
                
              </div>
            </div>
          </div>
        )
      }

    </>
  );
};

export default PopUp;
