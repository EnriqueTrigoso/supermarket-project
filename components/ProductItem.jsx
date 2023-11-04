import Image from "next/image";
import styles from "../styles/ProductItem.module.css";
import Link from "next/link";
import { addToCart } from "../actions";
import { useDispatch } from "react-redux";
import { formatingPrices } from "../utils";
import Pagination from "./Pagination";
import { useCategories } from "../hooks";
import { OPEN_POPUP, CLOSE_POPUP } from "../constants/cartConstants";

export const ProductItem = (product) => {
  
  const {
    id,
    name,
    slug,
    category,
    imgUrl,
    price,
    size,
    color,
    code,
    variant_Horizontal,
    variant_border,
  } = product;

  const dispatch = useDispatch();

  return (
    <Link
      href={{
        pathname: "/product/[slug]",
        query: { slug },
      }}
      scroll= {true}
    >
      <div className={`${styles.productitem} ${variant_border}`}>
        <div className={`${styles.content} ${variant_Horizontal}`}>
          <div className="flex justify-content image">

            {
              imgUrl ?
                <Image width={200} height={200} src={imgUrl} alt={name}
								  objectFit={'contain'}
                />
              :
                <Image width={200} height={200} 
                objectFit={'contain'}
                src={'https://pvljogumgjnzfsbjpyke.supabase.co/storage/v1/object/sign/supermarket/not_found.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlcm1hcmtldC9ub3RfZm91bmQud2VicCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MDY5NDYzOCwiZXhwIjoxOTg2MDU0NjM4fQ.7XQ3ezS73jaMVQWzJXZslVp-zxX4XOdub72e5avQ3Cg&t=2022-12-10T17%3A50%3A39.411Z'} alt={name} />
            }

          </div>
          <div className={styles.content_details}>
            <a className={styles.category}>{category}</a>
            <h2 className={styles.name}>{name}</h2>
            <div
              className={`flex align-items space-between image  ${styles.price_container}`}
            >
              <span className={styles.price}>S/.{formatingPrices(price)}</span>
              <div
                className={`icon-ec-add-to-cart ${styles.cart}`}
                onClick={(e) => {
                  e.preventDefault();
                  
                  dispatch(
                    addToCart(product, 1)
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const Products = ({ products_general, variant_border, pagination }) => {
  const { categories } = useCategories();
  return (
    <>
      {categories.length !== 0 &&
        products_general.map((item, index) => {
          
          let category = ''

          try {
            category = categories.find(
              (category) => category.id === item.category
            ).name;
          } catch {
            category = 'Indefinido'
          }
          return (
            <ProductItem
              key={index}
              {...item}
              category={category}
              variant_orientation={"block"}
              variant_border={variant_border}
            />
          );
        })}
      {pagination && <Pagination />}
    </>
  );
};
