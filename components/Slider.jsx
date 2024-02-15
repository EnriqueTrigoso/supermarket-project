import styles from "../styles/Slider.module.css";
import Image from "next/image";
import { useState } from "react";

const Slider = ({ sliderImages }) => {
  const imagenes = sliderImages;

  const [imagenActual, setImagenActual] = useState(0);

  const cantidad = imagenes?.length;

  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };

  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };

  return (
    <div className="container">
      <div className={styles.slider}>

        {imagenes.length !== 0 &&
          imagenes.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  imagenActual === index
                    ? `${styles.slide} ${styles.active}`
                    : styles.slide
                }
              >
                {imagenActual === index && (
                  <div>
                    <span className={styles.desktop}>
                      <Image
                        src={item.image_desktop}
                        width={1406}
                        height={450}
                        alt="imagen"
                      />
                    </span>
                    <span className={styles.mobil}>
                      <Image
                        src={item.image_mobil}
                        alt="imagen"
                        width={500}
                        height={600}
                        priority
                      />
                    </span>
                    <div className={styles.content}>
                      <div>
                        <span className={styles.hashtag}>{item.hashtag}</span>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.description}>{item.description}</p>
                        <a className={styles.link}>{item.link}</a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        <div className={styles.button}>
          <div>
            <button onClick={anteriorImagen}>←</button>
            <button onClick={siguienteImagen}>→</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
