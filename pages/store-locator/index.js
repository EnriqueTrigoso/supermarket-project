import styles from '../../styles/Local.module.css'
import { PageLayout } from '../../components'
import { useEffect } from 'react';
import { listCategories, listProducts } from '../../actions';
import { useItemsToCart } from '../../hooks';
import { supabase } from '../../supabase/config';
import { useDispatch } from 'react-redux';
import { CloseButton } from '../../components/Icons'
import useMaps from '../../hooks/useMaps';

export default function Locales({ products, categories }) {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listProducts(products))
    dispatch(listCategories(categories))
  }, [dispatch, products, categories]);

  useItemsToCart()

  const { display, setDisplay } = useMaps()

  return (
    <PageLayout>

      <section className={`${styles.section_local} container`}>

        <div id={'localStore'} className={`${styles.stores}`} >
          <div id="listings" className={styles.listings}></div>
        </div>

        <div className={`${styles.map_container}`}>
          <div id="map" className={`${styles.map} ${display}`}>
            <CloseButton onClick={() => {
              setDisplay('none')
            }} />
          </div>
        </div>


      </section>
    </PageLayout>
  )
}

export async function getStaticProps() {

  const [products, categories] = await Promise.allSettled([
    supabase.from('product').select('*'),
    supabase.from('categories').select('*'),
  ])

  return {
    props: {
      products: products.value.data,
      categories: categories.value.data,
    },
    revalidate: 10,
  }
}
