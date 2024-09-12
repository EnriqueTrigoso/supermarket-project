import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { NOT_FOUND_IMAGE } from "../../../../constants/productConstants";
import styles from "../../../../styles/Products.module.css";

const ProductCard = ({
  imageUrl,
  alt,
  width,
  height,
  priority = false,
  active = false,
  onHover,
  principal = false,
}) => {
  const border_red = active ? styles.product_active : "";

  const containerRef = useRef();

  const imgElementRef = useRef();


  const handleMouseMove = (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    imgElementRef.current.style.transform = "scale(2)";
    imgElementRef.current.style.transformOrigin = `${x}px ${y}px`;
  };

  const handleMouseLeave = (e) => {
    imgElementRef.current.style.transformOrigin = "center";
    imgElementRef.current.style.transform = "scale(1)";
  };

  // useEffect(() => {
  //   if (!principal) return;

  //   imgElementRef.current = document.getElementById("principalImage");

  //   console.log(containerRef.current)

  //   const container = containerRef.current;

  //   container.addEventListener("mousemove", handleMouseMove);
  //   container.addEventListener("mouseleave", handleMouseLeave);

  //   return () => {
  //     container.removeEventListener("mousemove", handleMouseMove);
  //     container.removeEventListener("mouseleave", handleMouseLeave);
  //   };

  // }, []);

  if (imageUrl) {
    return (
      <span
        ref={containerRef}
        // className={!principal ? `${styles.product_card} ${border_red}` : ""}
        // onMouseEnter={onHover}
      >
        <Image
          id={principal ? "principalImage" : ""}
          src={imageUrl}
          width={width}
          height={height}
          alt={alt}
          priority={priority}
        />
      </span>
    );
  } else {
    return (
      <span
        // className={`${styles.product_card} ${border_red}`}
        className={`${styles.product_card}`}
        // onMouseEnter={onHover}
        // onMouseMove={principal && handleMouseMove}
        // onMouseLeave={principal && handleMouseLeave}
      >
        <Image
          src={NOT_FOUND_IMAGE}
          width={width}
          height={height}
          alt={alt}
          priority={priority}
        />
      </span>
    );
  }
};

export default ProductCard;
