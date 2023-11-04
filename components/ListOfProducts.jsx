import Link from 'next/link';
import React from 'react'
import styles from '../styles/ListOfProducts.module.css';
import { formatingPrices } from '../utils';
import Image from 'next/image'

const ListOfProducts = ({ title, products }) => {

	return (
		<aside
			className={styles.widget_products}
		>
			<div className={styles.title_wrapper}>
				<h2 className={styles.widget_title}>{title}</h2>
			</div>
			<ul className={styles.product_list_widget}>

				{
					products?.map((product, index) => {
						return (
							<li key={index}>
								<Link
									href={{
										pathname: "/product/[slug]",
										query: { slug: product.slug },
									}}
									scroll= {true}
								>
									<div className={styles.content}>

										<div className={styles.left_content}>
											<Image
												src={product.imgUrl}
												alt=""
												width={100}
												height= {100}
												objectFit={'contain'}
											/>
										</div>
										<div className={styles.right_content}>
											<span>
												{product.name}
											</span>

											<span className={styles.price}>
												S/. {formatingPrices(product.price)}
											</span>
										</div>

									</div>
								</Link>
							</li>
						)
					})
				}

			</ul>
		</aside>

	)
}

export default ListOfProducts