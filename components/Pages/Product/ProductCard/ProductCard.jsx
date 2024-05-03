import Image from "next/image";
import React from "react";
import { NOT_FOUND_IMAGE } from "../../../../constants/productConstants";

const ProductCard = ({ url, alt, width, height, priority = false }) => {
  if (url) {
    return (
      <span>
        <Image
          src={url}
          width={width}
          height={height}
          alt={alt}
          priority={priority}
        />
      </span>
    );
  } else {
    return (
      <span>
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
