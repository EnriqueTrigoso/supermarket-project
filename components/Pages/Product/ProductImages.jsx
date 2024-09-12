import React, { useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import styles from "../../../styles/ProductDetails.module.css";

const ProductImages = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(1);

  const products_to_show = product.images
    ? product.images
    : [...Array(4)].map((_, index) => {
        return product.imgUrl;
      });
  return (
    <>
      <div className={`${styles.ctn_image} flex align-items justify-content`}>
        <ProductCard
          imageUrl={products_to_show[currentImage]}
          alt={product.name}
          width={300}
          height={300}
          priority
          principal={true}
        />
      </div>
      <div
        className={`${styles.thumbnail_image} flex align-items justify-content top`}
      >
        {products_to_show.map((imageUrl, index) => {
          return (
            <ProductCard
              key={index}
              imageUrl={imageUrl}
              alt={product.name}
              width={100}
              height={100}
              active={index === currentImage}
              onHover={() => {
                setCurrentImage(index);
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductImages;
