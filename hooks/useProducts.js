import { useSelector } from 'react-redux'

const useProducts = () => {

	const productos = useSelector(state => state.productList)
	const { products } = productos

	return {
		products
	}
}

export default useProducts