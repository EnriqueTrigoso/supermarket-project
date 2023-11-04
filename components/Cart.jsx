import styles from "../styles/Cart.module.css";
import { useSelector } from "react-redux";
import ProductItemOnCart from "../components/ProductItemOnCart";
import { creatingItems, formatingPrices, getTotalPrice, toPercentEncoding } from "../utils";
import { Message } from "../constants/whatsapp";
import { WhatsappIco } from "./Icons/Social";
import { LeftArrow } from "./Icons/Others";

export default function Cart({ setOpenModal }) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const handleCardClick = (e) => e.stopPropagation();

  return (
    <div
      className={styles.section}
      onClick={() => {
        setOpenModal(false);
      }}
    >
      <div className={styles.cart} onClick={handleCardClick}>
        <div className={`${styles.title} flex align-items`}>
          <span
            className={styles.close}
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <LeftArrow />
          </span>
          <h2>Carrito de Compras</h2>
        </div>

        <div className={styles.container_cards}>
          {cartItems.length >= 1 ? (
            cartItems.map((product) => {
              return <ProductItemOnCart key={product.id} product={product} />;
            })
          ) : (
            <span className={styles.name_not_products}> No hay Productos</span>
          )}
        </div>

        <div className={styles.container_button}>
          <div
            className={styles.button}
            onClick={() => {
              const ToPhone = "51989475593";
              let productos = creatingItems(cartItems);
              const Message_format = toPercentEncoding(Message + productos);
              window.open(
                `https://api.whatsapp.com/send?phone=${ToPhone}&text=${Message_format}`
              );
            }}
          >
            <span className={styles.icon_wp}>
              Realiza envio
              <WhatsappIco />
            </span>
            <hr />
            <span className="flex gap">
              <strong>Total:</strong>
              <span>S/ {formatingPrices(getTotalPrice(cartItems))}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
