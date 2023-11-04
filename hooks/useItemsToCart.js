import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCartFirst } from '../actions';

const useItemsToCart = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		const found_items = localStorage.getItem('cartItems')
			? JSON.parse(localStorage.getItem('cartItems'))
			: []

		found_items?.map((product) => {
			dispatch(addToCartFirst(product))
		})

	}, [dispatch]);

}

export default useItemsToCart