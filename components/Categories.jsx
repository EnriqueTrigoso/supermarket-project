import styles from "../styles/Categories.module.css";
import { useState } from "react";
import { useCategories } from "../hooks";
import Link from "next/link";

export default function Categories() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className={`${styles.categories} relative`}>
      <div
        className="flex align-items"
        onClick={() => setDropdown((prev) => !prev)}
      >
        Todas las Categorias
      </div>
      {dropdown && (
        <CategoriesItem setDropdown={setDropdown} />
      )}
    </div>
  );
}

export function CategoriesItem({setDropdown}) {

  const { categories } = useCategories();

  return (
    <ul>
      {categories.map((category, index) =>
        (
        <li key={index} onClick={() => setDropdown((prev) => !prev)}>
          <Link 
            href={{
              pathname: "/product-category/[slug]",
              query: { slug: category.name }
            }}
            scroll= {true}
          >
            <a className="flex align-items space-between">
              <span style={{textTransform: 'capitalize'}}> 
                {category.name}
              </span>
              <span className="icon-ec-arrow-right-categproes"></span>
            </a>
          </Link>
        </li>
        ))
      }
    </ul>
  );
}
