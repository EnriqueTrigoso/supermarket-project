import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { listCategories, listProducts } from '../../actions';
import { PageLayout, Filter, Products } from '../../components'
import { useItemsToCart } from '../../hooks';
import { supabase } from '../../supabase/config';

export async function getStaticProps() {

  const [products, categories] = await Promise.allSettled([
    supabase.from('product').select('*').neq('imgUrl', ''),
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

const ProductCategory = ({ products, categories }) => {

  const product_prueba = products.reverse();

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listProducts(product_prueba))
    dispatch(listCategories(categories))
  }, [dispatch, product_prueba, categories]);

  useItemsToCart()

  return (
    <PageLayout>
      <Filter>
        <Products
          products_general={product_prueba}
          variant_border={"border_solid"}
        />
      </Filter>
    </PageLayout>
  )
}

export default ProductCategory;


