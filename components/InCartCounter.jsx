import styles from "../styles/Counter.module.css";
import { addQuantity, subQuantity } from "../actions";
import { useDispatch } from "react-redux";
import { Add, Substract } from "./Icons/Others";

export default function InCartCounter({id, qty}) {

  const dispatch = useDispatch()

  return (
    <div className={styles.counter}>
      <span className={`${styles.counter_update} ${styles.decrement}`} onClick={()=>{
        if (qty > 1){
            dispatch(subQuantity(id))
        }
      }}>
        <Substract />
      </span>
      <span className={styles.counter_value}>
        <span>{qty}</span>
      </span>
      <span className={`${styles.counter_update} ${styles.increment}`} onClick={()=>{
          dispatch(addQuantity(id))
      }}>
        <Add/>
      </span>
    </div>
  );
}
