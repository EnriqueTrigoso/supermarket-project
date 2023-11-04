import styles from "../styles/Navigation.module.css";
import { useState } from "react";
import Image from "next/image";
import { logo } from "../assets";
import Cart from "./Cart";
import Link from "next/link";
import { formatingPrices, getTotalPrice } from "../utils";
import { data } from "../data";
import {
  useCategories,
  useProducts,
  useCartItems,
  useScrollNavigation,
} from "../hooks";
import {
  FacebookIco,
  InstagramIco,
  TiktokIco,
  WhatsappIco,
} from "../components/Icons/Social";
import PopUp from "./PopUp";

export function TopNavigation() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenMobil, setModalOpenMobil] = useState(false);

  const { cartItems } = useCartItems();
  const { products } = useProducts();
  const { categories } = useCategories();
  const { classNavigation } = useScrollNavigation();

  return (
    <div className={styles.topnavegation}>


      <div className="container">
        <SocialMobile />
      </div>

      {/* Aqui esta el logo, buscador, redes y carrito */}
      <div className={classNavigation}>

        {/* Pop que sale al añadir producto al carrito */}
        <PopUp />

        <div className={styles.content}>
          <div className={styles.menu_logo}>

            {/* Logo B&V Group Import */}
            <div className={styles.logo}>
              <Link href="/" scroll={true}>
                <div>
                  <Image src={logo} alt="logo" width={150} height={107} />
                </div>
              </Link>
            </div>

            {/* Menu Hamburguesa*/}
            <div
              className={styles.menu}
              onClick={() => {
                setModalOpenMobil(true);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <SearchInput categories={categories} products={products} />

          <div className={`${styles.cart} flex align-items`}>
            <SocialDesktop />
            <CarSection setModalOpen={setModalOpen} cartItems={cartItems} />
          </div>
        </div>
      </div>

      {/* Modal del Menu Hamburguesa */}
      {modalOpen && <Cart setOpenModal={setModalOpen} />}
      {modalOpenMobil && (
        <Navigation
          setOpenModalMobil={setModalOpenMobil}
          categories={categories}
        />
      )}

    </div>
  );
}

export function BottomNavigation() {
  return (
    <div className={`${styles.bottomnavegation} flex space-between`}>
      <ul className="flex gap">
        {data.navegation.bottomnav.content.map((item, index) => (
          <li key={index}>
            <Link href={item.url} scroll={true}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <ul>
        <li>
          <a>Ventas al por mayor</a>
        </li>
      </ul>
    </div>
  );
}

const Navigation = ({ categories, setOpenModalMobil }) => {
  const handleCardClick = (e) => e.stopPropagation();
  return (
    <div
      className={styles.navigation}
      onClick={() => {
        setOpenModalMobil(false);
      }}
    >
      <div className={styles.content_navigation} onClick={handleCardClick}>
        <ul>
          
          <div>Menu</div>

          {
            data.navegation.bottomnav.content.map((item, index) => (
              <li key={index} onClick={() => setOpenModalMobil(false)}>
                <Link href={item.url} scroll={true}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))
          }

          {
            data.navegation.topnav.content.map((item, index) => (
              <li key={index}>
                <Link href={item.url} scroll={true}>
                  <a>{item.name}</a>
                </Link>
                <span className={item.icon} />
              </li>
            ))
          }

          <div>Todas las Categorias</div>
          {categories.map((item, index) => (
            <li key={index} onClick={() => setOpenModalMobil(false)}>
              <Link
                href={{
                  pathname: "/product-category/[slug]",
                  query: { slug: item.name },
                }}
                scroll={true}
              >
                <a>{item.name}</a>
              </Link>
              <span className="icon-ec-arrow-right-categproes" />
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
};

const SocialMobile = () => {
  return (
    <ul className={styles.social}>
      <li>
        <span>
          <FacebookIco />
        </span>
      </li>
      <li>
        <span>
          <InstagramIco />
        </span>
      </li>
      <li>
        <Link href="/" scroll={true}>
          <div className={styles.logo_mobil}>
            <Image
              src={logo}
              alt="logo"
              width={150}
              height={107}
              priority
              quality={100}
            />
          </div>
        </Link>
      </li>
      <li>
        <span>
          <WhatsappIco />
        </span>
      </li>
      <li>
        <span>
          <TiktokIco />
        </span>
      </li>
    </ul>
  );
};

const SocialDesktop = () => {
  return (
    <ul className={styles.social_desktop}>
      <li>
        <span>
          <FacebookIco />
        </span>
      </li>
      <li>
        <span>
          <InstagramIco />
        </span>
      </li>
      <li>
        <span>
          <WhatsappIco />
        </span>
      </li>
      <li>
        <span>
          <TiktokIco />
        </span>
      </li>
    </ul>
  );
};

const CarSection = ({ setModalOpen, cartItems }) => {
  return (
    <div
      className={`${styles.cart_container}`}
      onClick={() => {
        setModalOpen(true);
      }}
    >
      <div className="relative">
        <span className={`${styles.icon} icon-ec-shopping-bag`}></span>
        <span className={styles.count}>{cartItems.length}</span>
      </div>
      <span className={styles.total}>
        S/. {formatingPrices(getTotalPrice(cartItems))}
      </span>
    </div>
  );
};

const SearchInput = ({ categories, products }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = products.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className={`flex ${styles.search}`}>
      <span>
        <input
          placeholder="Buscar Productos"
          value={wordEntered}
          onChange={handleFilter}
        />

        {filteredData.length != 0 && (
          <SearchBox filteredData={filteredData} clearInput={clearInput} />
        )}
      </span>

      <select>
        <option>Selecciona una Categoria</option>
        {categories.map((item, index) => (
          <option style={{ textTransform: "capitalize" }} key={index}>
            {item.name}
          </option>
        ))}
      </select>
      <button className="icon-ec-search"></button>
    </div>
  );
};
const SearchBox = ({ filteredData, clearInput }) => {
  return (
    <div>
      <div className={styles.dataresult}>
        {filteredData.slice(0, 8).map((value, index) => {
          return (
            <Link
              key={index}
              href={{
                pathname: "/product/[slug]",
                query: { slug: value.slug },
              }}
              scroll={true}
            >
              <a className={styles.dataitem} onClick={clearInput}>
                <h2 className={styles.name}>{value.name.toLowerCase()}</h2>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
