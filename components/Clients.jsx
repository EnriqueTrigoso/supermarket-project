import Image from 'next/image'
import { logo1, logo2, logo3, logo4, logo5, logo6 } from '../assets/clients'
import LogoSection from './LogoSection';

const Clients = () => {

	return (

		<LogoSection title='Nuestros Clientes'>
			<Image
				src={logo1}
				width={90}
				height={90}
				alt='logo'
			/>
			<Image
				src={logo2}
				width={90}
				height={90}
				alt='logo'
			/>
			<Image
				src={logo3}
				width={90}
				height={90}
				alt='logo'
			/>
			<Image
				src={logo4}
				width={90}
				height={90}
				alt='logo'
			/>
			<Image
				src={logo5}
				width={90}
				height={90}
				alt='logo'
			/>
		</LogoSection>
	)
}

export default Clients