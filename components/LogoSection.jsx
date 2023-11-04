import React from 'react'
import styles from '../styles/LogoSection.module.css';

const LogoSection = ({children, title}) => {
  return (
	<section className={styles.clients}>
			<div className="container">
				<div className={styles.title_wrapper}>
					<h2 className={styles.title}>{title}</h2>
				</div>
				<div className={styles.container}>
					<div className={styles.items}>
						{children}
					</div>
				</div>
			</div>
		</section>
  )
}

export default LogoSection
