import styles from "../styles/Offer.module.css";
import { offer } from "../assets";
import Image from "next/image";
import { formatingPrices, toDaysHoursMinutes } from "../utils";
import { useEffect, useState } from "react";

const Offer = ({ discount_products, products }) => {

  //Time in miliseconds
  const [timeLeft, setTimeLeft] = useState(0)
  const time = toDaysHoursMinutes(timeLeft)

  const discount_product = discount_products.filter(product =>
    product.promotion === 3
  )[0]

  const product = products.find(product => product.id === discount_product.product)

  useEffect(() => {
    const current_date = new Date()
    const finish_time = new Date(discount_product.finish_time)
    const time_left = Math.abs(finish_time - current_date)
    setTimeLeft(time_left)
  }, [discount_product.finish_time, setTimeLeft]);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setTimeLeft(prevTimeLeft => {

        const __time = prevTimeLeft - 1000

        if (__time > 60000){
          return __time
        } else {
          clearInterval(this)
          return 0
        }

      })
    
    }, 1000);

    return () => {
      clearInterval(myInterval)
    };

  }, [setTimeLeft]);

  return (
    <div className={styles.card_offer}>
      <div className="flex space-between align-items">
        <span className={styles.title}> Oferta Especial</span>
        <div className={`${styles.offer} flex align-items justify-content`}>
          <span>{discount_product.discount_percent}%</span>
        </div>
      </div>
      <div className={`${styles.image} flex justify-content`}>
        <Image src={offer} alt="offer" width={300} height={300} />
      </div>
      <h2 className={`${styles.name} text-align`}>{product.name}</h2>
      <span className={`${styles.price} flex justify-content`}>
        S/{formatingPrices(discount_product.discount_price)}
      </span>
      <span className={`${styles.subtitle} flex justify-content`}>
        ¡Darse prisa! La oferta termina en:
      </span>
      <div className={`${styles.date} flex justify-content`}>
        <span>
          <div>{time.days}</div>
          dia
        </span>
        <bdi>:</bdi>
        <span>
          <div>{time.hours}</div>
          hora
        </span>
        <bdi>:</bdi>
        <span>
          <div>{time.minutes}</div>
          mins
        </span>
      </div>
    </div>
  );
};

export default Offer;
