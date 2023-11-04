import { useSelector } from 'react-redux'

const useSlider = () => {

	const _slider = useSelector(state => state.sliderImages)
	const { imagenes } = _slider

	return {
		imagenes
	}
}

export default useSlider