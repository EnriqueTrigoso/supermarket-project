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

  useEffect(() => {
    if (!principal) return;

    const imgElement = document.getElementById("principalImage");

    const container = containerRef.current;

    const handleMouseMove = (e) => {
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;

      imgElement.style.transform = "scale(2)";
      imgElement.style.transformOrigin = `${x}px ${y}px`;
    };

    const handleMouseLeave = () => {
      imgElement.style.transformOrigin = "center";
      imgElement.style.transform = "scale(1)";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (imageUrl) {
    return (
      <span
        ref={containerRef}
        className={!principal ? `${styles.product_card} ${border_red}` : ""}
        onMouseEnter={onHover}
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
        className={`${styles.product_card} ${border_red}`}
        onMouseEnter={onHover}
        onMouseMove={principal && handleMouseMove}
        onMouseLeave={principal && handleMouseLeave}
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
