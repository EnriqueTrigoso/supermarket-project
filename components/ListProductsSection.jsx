import styles from '../styles/ListProductsSection.module.css'
import ListOfProducts from './ListOfProducts'
import Image from 'next/image';
import { offer } from '../assets'
import useProducts from '../hooks/useProducts';

const ListProductsSection = () => {

	const { products } = useProducts()
	let filter_products = products.slice(-5)

	return (
		<section>
			<div className="container">
				<div className={styles.container}>
					<ListOfProducts title='Productos Destacados' products={filter_products} />
					<ListOfProducts title='Productos más vendidos' products={filter_products} />
					<ListOfProducts title='Productos en venta' products={filter_products} />
					<div className={styles.banner}>
						<Image
							src={offer}
							alt='oferta'
						/>
					</div>
				</div>
			</div>

		</section>

	)
}

export default ListProductsSection