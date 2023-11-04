import styles from "../styles/Counter.module.css";
import { Add, Substract } from "./Icons/Others";

export default function InPageCounter({ qty, setQty }) {
  return (
    <div className={styles.counter}>
      <span
        className={`${styles.counter_update} ${styles.decrement}`}
        onClick={() => {
          if (qty > 1) {
            setQty((prevQty) => prevQty - 1);
          }
        }}
      >
        <Substract/>
      </span>
      <span className={styles.counter_value}>
        <span>{qty}</span>
      </span>
      <span
        className={`${styles.counter_update} ${styles.increment}`}
        onClick={() => {
          setQty((prevQty) => prevQty + 1);
        }}
      >
        <Add />
      </span>
    </div>
  );
}
