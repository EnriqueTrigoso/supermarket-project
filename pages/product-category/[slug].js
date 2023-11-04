import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { listCategories, listProducts } from '../../actions'
import { PageLayout, Filter, Products } from '../../components'
import { useItemsToCart } from '../../hooks'
import { supabase } from '../../supabase/config'

export async function getStaticPaths() {

  let { data: categories, categories_error } = await supabase
    .from('categories')
    .select('name')

  let { data: autos, autos_error } = await supabase
    .from('autos')
    .select('name')

  const categories_slugs = categories.map(category => {
    return { params: {slug: category.name} }
  })

  const autos_slugs = autos.map(auto => {
    return { params: {slug: auto.name} }
  })

  const parametros = [...categories_slugs, ...autos_slugs]
  
  return {
    paths: parametros,
    fallback: false,
  }
}

export async function getStaticProps({params}) {

  const [products, categories, autos] = await Promise.allSettled([
    supabase.from('product').select('*').neq('imgUrl', ''),
    supabase.from('categories').select('*'),
    supabase.from('autos').select('*')
  ])

  const categoryObj = categories.value.data.filter((category) => category.name === params.slug)[0]
  const autoObj = autos.value.data.filter((auto) => auto.name === params.slug)[0]

  let show_products

  if (typeof categoryObj !== 'undefined'){
    show_products = products.value.data
                    .filter((product) => product.category === categoryObj.id)
    
    show_products.sort(function(a,b) {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    })
  }
  else if (typeof autoObj !== 'undefined') {
    show_products = products.value.data.filter((product) => product.category === autoObj.id)
  }

  return {
    props: {
      products: products.value.data,
      categories: categories.value.data,
      show_products
    }
  }
}

const ProductCategory = ({ products, categories, show_products}) => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listProducts(products))
    dispatch(listCategories(categories))
  }, [dispatch, products, categories]);

  useItemsToCart()

  return (
    <PageLayout >
      <Filter>
        <Products products_general={show_products} variant_border={"border_solid"} />
      </Filter>
    </PageLayout>
  )
}

export default ProductCategory;

