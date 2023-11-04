import styles from "../styles/CategoryCar.module.css";
import Image from "next/image";
import Link from "next/link";

export const CategoryCarItem = ({ name, imgUrl }) => {
  return (
    <Link href={
      {
        pathname: "/product-category/[slug]",
        query: { slug: name }
      }}
      scroll= {true}
    >
      <div className={styles.card_category}>
        <div className="">
          <Image width={130} height={130} alt={name} src={imgUrl} quality={100} />
        </div>
        <div className={styles.name}>
          <span>
            accesorios <br />
            & repuestos <br /> <strong>{name}</strong>
          </span>
          <div className={styles.link}>
            <a>VER CATALOGO</a>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const CategoryCar = ({ autos }) => {
  return (
    <div className={`${styles.section_categories} container`}>
      {autos.map((item, index) => (
        <CategoryCarItem key={index} imgUrl={item.imgUrl} name={item.name} />
      ))}
    </div>
  );
};
