import { PageLayout } from '../../components'
import styles from '../../styles/About.module.css'
import { useDispatch } from 'react-redux';
import { supabase } from '../../supabase/config';
import { listCategories, listProducts } from '../../actions';
import { useEffect } from 'react';
import { useItemsToCart } from '../../hooks';
import Image from 'next/image';

const About = ({ products, categories, slider }) => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listProducts(products))
    dispatch(listCategories(categories))
  }, [dispatch, products, categories]);

  useItemsToCart()

  return (
    <PageLayout title="Sobre Nosotros">
      <section className={styles.section_about}>
        <div className={`${styles.about} container`}>
          {slider.map((item, index) => (
            <div className={styles.content} key={index}>
              <div className={styles.information}>
                <span className={styles.hashtag}>
                  {item.hashtag}
                </span>
                <h2 className={styles.title}>
                  {item.title}
                </h2>
                <p className={styles.description}>
                  {item.description}
                </p>
                {/* <a className={styles.link}>
                  ver catalogo de productos
                </a> */}
              </div>
              <div className={styles.image}>
                <Image src={item.image_about} alt="About" width={500} height={282}/>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}

export async function getStaticProps() {

  const [products, categories, slider] = await Promise.allSettled([
    supabase.from('product').select('*'),
    supabase.from('categories').select('*'),
    supabase.from('slider').select('*')
  ])

  return {
    props: {
      products: products.value.data,
      categories: categories.value.data,
      slider: slider.value.data
    },
    revalidate: 10,
  }
}

export default About;