import styles from "../styles/Title.module.css";
import Link from "next/link";

const Title = ({ name, link }) => {
  return (
    <div className="container">
      <div className={`${styles.title}  flex space-between align-items`}>
        <h2 className={`${styles.name} relative`}>{name}</h2>
        <Link href="/product-catalog" scroll= {true}>
          <a className={styles.link}>{link}</a>
        </Link>
      </div>
    </div>
  );
};

export default Title;
