import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Newsletter from "./Newsletter";
import Link from "next/link";
import {
  FacebookIco,
  InstagramIco,
  TiktokIco,
  WhatsappIco,
} from "./Icons/Social";
import { patment } from "../assets";
import { useCategories } from "../hooks";
import { data } from "../data";

const Footer = () => (
  <div className={styles.footer}>
    <Newsletter />
    <div className={`${styles.content} container`}>
      <div>
        <div className={styles.phone}>
          <i className={`${styles.icon} icon-ec-support`} />
          <span>
            <p className={styles.information}>
              Tienes preguntas ? ¡Llámenos 24/7!
            </p>
            <p className={styles.number}>(+51) 989475593</p>
          </span>
        </div>
        <p className={styles.information}>Información de Contacto</p>
        <p className={styles.information_data}>
          Las Flores - San juan de Lurigancho - Lima - Perú
        </p>
        <div className={styles.social}>
          <FacebookIco />
          <InstagramIco />
          <WhatsappIco />
          <TiktokIco />
        </div>
      </div>
      <CategoriesItem />
      <div>
        {data.navegation.bottomnav.content.map((item, index) => (
          <li key={index}>
            <Link href={item.url} scroll= {true}>
              <a className={styles.link}>{item.name}</a>
            </Link>
          </li>
        ))}
      </div>
      <div>
        {data.navegation.topnav.content.map((item, index) => (
          <li key={index}>
            <Link href={item.url} scroll= {true}>
              <a className={styles.link}>{item.name}</a>
            </Link>
          </li>
        ))}
      </div>
    </div>

    <div className={styles.copyright_bar}>
      <div className="container">
        <span className={styles.copyright}>
          © <strong>B&V Group Import</strong> - All Rights Reserved
        </span>
        <Image src={patment} width={324} height={38} alt="patment" />
      </div>
    </div>
  </div>
);

export default Footer;

export const CategoriesItem = () => {
  const { categories } = useCategories();
  return (
    <ul>
      {categories.map((category, index) => (
        <li key={index}>
          <Link
            href={{
              pathname: "/product-category/[slug]",
              query: { slug: category.name },
            }}
            scroll= {true}
          >
            <a className={styles.link}>{category.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
