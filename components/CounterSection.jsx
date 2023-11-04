import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions'
import { WhatsappIcoGreenFound } from './Icons/Social'
import InPageCounter from './InPageCounter'
import styles from '../styles/CounterSection.module.css'
import { formatingPrices } from '../utils'

const CounterSection = ({ product }) => {
	
	const [qty, setQty] = useState(1)
	const dispatch = useDispatch()
	
	return (
		<div className={`${styles.cart} flex align-items`}>
			<div>
				<span className={styles.price}>S/. {formatingPrices(product.price)}</span>
				<div className={`${styles.container_counter_whatsap} flex align-items`}>
					<InPageCounter qty={qty} setQty={setQty} />
					<span className={styles.whatsap}>
						<WhatsappIcoGreenFound />
					</span>
				</div>
				<button className={`${styles.button} flex align-items `} onClick={() => {
					dispatch(addToCart(product, qty))
				}}>
					<span className={`${styles.icon} icon-ec-add-to-cart `}></span>
					Añadir Producto
				</button>
			</div>
		</div>
	)
}

export default CounterSection