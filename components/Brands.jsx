import React from 'react'
import LogoSection from './LogoSection';
import { 
	Brand3M,
	Enerjet,
	Maxxis,
	Mobil,
	Shell,
	Sparco,
	Waypark,
	Arb,
	Continental,
	Goodyear,
	Gr,
	Trd, } from '../assets/brands'

import Image from 'next/image'
import styles from '../styles/Brands.module.css'

const Brands = () => {

	let logos = [
		Brand3M,
		Enerjet,
		Maxxis,
		Mobil,
		Shell,
		Sparco,
		Waypark,
		Arb,
		Continental,
		Goodyear,
		Gr,
		Trd,
	]

	return (
		<LogoSection title='Nuestras Marcas'>

			{
				logos.map((logo, index) => {
					return (

						<div key={index} className={styles.item}>
							<Image
								src={logo}
								objectFit={'contain'}
								alt='logo'
							/>
						</div>

					)
				})
			}

		</LogoSection>
	)
}

export default Brands