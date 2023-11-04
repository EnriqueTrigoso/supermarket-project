import styles from "../styles/Newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <div className={`${styles.content} container`}>
        <span className={styles.title}>
          <i className={`${styles.icon} icon-ec-newsletter`} />
          Entérate de Todos Nuestros Productos y Promociones.
        </span>
        <div className={styles.email}>
          <input placeholder="Ingresa tu correo electrónico" />
          <button>Suscríbete</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
