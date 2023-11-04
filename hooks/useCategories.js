import { useSelector } from 'react-redux'

const useCategories = () => {

	const categoriesStore = useSelector(state => state.categories)
	const { categories } = categoriesStore

	return {
		categories
	}
}

export default useCategories