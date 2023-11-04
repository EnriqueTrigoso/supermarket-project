import { useSelector } from 'react-redux';

const useCartItems = () => {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	return {
		cartItems
	}
}

export default useCartItems