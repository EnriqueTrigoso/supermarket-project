import { PageLayout, Title, Products, CounterSection } from '../../components'
import styles from "../../styles/ProductDetails.module.css"
import Image from "next/image"
import { supabase } from '../../supabase/config';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { useItemsToCart } from '../../hooks'
import { listCategories, listProducts } from '../../actions';

export default function ProductDetails({ products, categories, product }) {

  const category_name = categories.find((categ) => categ.id === product.category).name;

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listProducts(products))
    dispatch(listCategories(categories))
  }, [dispatch, products, categories]);

  useItemsToCart()

  const related_products = products.reverse().slice(0, 6);

  return (
    <PageLayout title={product.name}>
      <section className={styles.section_product_details}>
        <div className={`${styles.product_details} container gap`}>
          <div className={styles.banner}>

          </div>
          <div className={styles.image}>
            <div className={`${styles.ctn_image} flex align-items justify-content`}>

              {
                product.imgUrl
                  ? <Image
                    src={product.imgUrl}
                    width="300"
                    height="300"
                    alt={product.name}
                    priority
                  />
                  : <Image
                    src={'https://pvljogumgjnzfsbjpyke.supabase.co/storage/v1/object/sign/supermarket/not_found.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlcm1hcmtldC9ub3RfZm91bmQud2VicCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MDY5NDYzOCwiZXhwIjoxOTg2MDU0NjM4fQ.7XQ3ezS73jaMVQWzJXZslVp-zxX4XOdub72e5avQ3Cg&t=2022-12-10T17%3A50%3A39.411Z'}
                    width="300"
                    height="300"
                    alt={product.name}
                    priority
                  />
              }
            </div>
            <div className={`${styles.thumbnail_image} flex align-items justify-content top`}>
              <span>
                {
                  product.imgUrl
                    ? <Image
                      src={product.imgUrl}
                      width="100"
                      height="100"
                      alt={product.name}
                    />
                    : <Image
                      src={'https://pvljogumgjnzfsbjpyke.supabase.co/storage/v1/object/sign/supermarket/not_found.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlcm1hcmtldC9ub3RfZm91bmQud2VicCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MDY5NDYzOCwiZXhwIjoxOTg2MDU0NjM4fQ.7XQ3ezS73jaMVQWzJXZslVp-zxX4XOdub72e5avQ3Cg&t=2022-12-10T17%3A50%3A39.411Z'}
                      width="100"
                      height="100"
                      alt={product.name}
                    />
                }
              </span>
              <span>
                {
                  product.imgUrl
                    ? <Image
                      src={product.imgUrl}
                      width="100"
                      height="100"
                      alt={product.name}
                    />
                    : <Image
                      src={'https://pvljogumgjnzfsbjpyke.supabase.co/storage/v1/object/sign/supermarket/not_found.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlcm1hcmtldC9ub3RfZm91bmQud2VicCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MDY5NDYzOCwiZXhwIjoxOTg2MDU0NjM4fQ.7XQ3ezS73jaMVQWzJXZslVp-zxX4XOdub72e5avQ3Cg&t=2022-12-10T17%3A50%3A39.411Z'}
                      width="100"
                      height="100"
                      alt={product.name}
                    />
                }
              </span>
              <span>
                {
                  product.imgUrl
                    ? <Image
                      src={product.imgUrl}
                      width="100"
                      height="100"
                      alt={product.name}
                      priority
                    />
                    : <Image
                      src={'https://pvljogumgjnzfsbjpyke.supabase.co/storage/v1/object/sign/supermarket/not_found.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlcm1hcmtldC9ub3RfZm91bmQud2VicCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MDY5NDYzOCwiZXhwIjoxOTg2MDU0NjM4fQ.7XQ3ezS73jaMVQWzJXZslVp-zxX4XOdub72e5avQ3Cg&t=2022-12-10T17%3A50%3A39.411Z'}
                      width="100"
                      height="100"
                      alt={product.name}
                    />
                }
              </span>
              <span>
{
                product.imgUrl
                  ? <Image
                    src={product.imgUrl}
                    width="100"
                    height="100"
                    alt={product.name}
                  />
                  : <Image
                    src={'https://pvljogumgjnzfsbjpyke.supabase.co/storage/v1/object/sign/supermarket/not_found.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdXBlcm1hcmtldC9ub3RfZm91bmQud2VicCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MDY5NDYzOCwiZXhwIjoxOTg2MDU0NjM4fQ.7XQ3ezS73jaMVQWzJXZslVp-zxX4XOdub72e5avQ3Cg&t=2022-12-10T17%3A50%3A39.411Z'}
                    width="100"
                    height="100"
                    alt={product.name}
                  />
              }
              </span>
            </div>
          </div>
          <div className={styles.content}>
            <a className={styles.category}>{category_name}</a>
            <h2 className={styles.name}>{product.name}</h2>
            <p className={styles.description}>{product.description}</p>
          </div>
          <CounterSection product={product} />
        </div>
      </section>

      <section className={styles.section_products_related}>
        <Title name="Productos Relacionados" link="Ver catalogo de productos" />
        <div className='container'>
          <div className={styles.products_related}>
            <Products products_general={related_products} categories={categories} variant_border={"border_solid"} />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export async function getStaticPaths() {

  let { data: slugs, product_error } = await supabase
    .from('product')
    .select('slug')

  let parametros = slugs.map(slug => {
    return { params: slug }
  })

  return {
    paths: parametros,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {

  const [products, categories, product] = await Promise.allSettled([
    supabase.from('product').select('*'),
    supabase.from('categories').select('*'),
    supabase.from('product').select('*').eq('slug', params.slug)
  ])

  return {
    props: {
      products: products.value.data,
      categories: categories.value.data,
      product: product.value.data[0]
    }
  }
}
