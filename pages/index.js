import styles from "../styles/Home.module.css";
import {
  PageLayout,
  CategoryCar,
  Offer,
  Title,
  Slider,
  Products,
  Clients,
  ListProductsSection,
  Brands,
} from "../components";
import { useItemsToCart } from "../hooks";
import { listProducts, listCategories } from "../actions";
import { useDispatch } from "react-redux";
import { supabase } from "../supabase/config";
import { useEffect } from "react";

export async function getStaticProps() {
  const [products, categories, autos, sliderImages, discount_products] =
    await Promise.allSettled([
      supabase.from("product").select("*").neq("imgUrl", ""),
      supabase.from("categories").select("*"),
      supabase.from("autos").select("*").neq("id", "1"),
      supabase.from("slider").select("*"),
      supabase.from("discount_products").select("*"),
    ]);

  const autos_sort = autos.value.data.sort((a, b) => a.id - b.id).slice(0, 4);
  const slider_images_sort = sliderImages.value.data.sort(
    (a, b) => a.id - b.id
  );

  return {
    props: {
      products: products.value.data,
      categories: categories.value.data,
      autos: autos_sort,
      sliderImages: slider_images_sort,
      discount_products: discount_products.value.data,
    },
    revalidate: 10,
  };
}

export default function Home({
  products,
  categories,
  autos,
  sliderImages,
  discount_products,
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(products));
    dispatch(listCategories(categories));
  }, [dispatch, products, categories]);

  useItemsToCart();

  const parrilla_products = products
    .filter((product) => product.promotion === 2)
    .slice(0, 8);
  const ofertas_especiales = products
    .filter((product) => product.promotion === 3)
    .slice(0, 10);

  return (
    <PageLayout title="B&V Group Import | Todo para tu auto al mejor precio ..! | Repuestos, accesorios y más.">
      <section className={styles.section_slider}>
        <Slider sliderImages={sliderImages} />
      </section>

      <section className={styles.section_categorycar}>
        <CategoryCar autos={autos} />
      </section>

      <section className={styles.section_offer}>
        <Title
          name="Ahorre en Grande, Productos en Descuento"
          link="Ir a la Sección Ofertas Diarias"
        />
        <div className={`${styles.container_offer} container`}>
          <div className={styles.offer}>
            <Offer discount_products={discount_products} products={products} />
          </div>
          <div className={styles.products_offer}>
            <Products
              products_general={parrilla_products}
              variant_border={"border_after"}
            />
          </div>
        </div>
      </section>

      <section className={styles.section_categories}>
        <Title
          name="Productos con Ofertas Especiales"
          link="Ir a la Sección Ofertas Especiales"
        />
        <div className="container">
          <div className={styles.products_categories}>
            <Products
              products_general={ofertas_especiales}
              variant_border={"border_solid"}
            />
          </div>
        </div>
      </section>

      <Brands />
      {/* <Clients /> */}
      <ListProductsSection />
    </PageLayout>
  );
}
