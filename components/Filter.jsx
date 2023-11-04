import useProducts from "../hooks/useProducts";
import styles from "../styles/Filter.module.css";
import ListOfProducts from "./ListOfProducts";

const Filter = ({ children }) => {
  return (
    <section className="container">
      <div className={`${styles.container} gap`}>
        <AsideFilter />
        <div className={styles.container_products}>
          <div className={styles.products}>{children}</div>
        </div>
      </div>
    </section>
  );
};

const AsideFilter = () => {

  const {products} = useProducts()
	let filter_products = products.slice(-5)

  return (
    <div className={styles.filters}>
      <div className={styles.categories}>
        <div className={styles.banner}></div>
        <ListOfProducts title= 'Productos Destacados' products={filter_products}/>
      </div>
    </div>
  );
};

export default Filter;
