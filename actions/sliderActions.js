import { SLIDER_IMAGES_LIST_SUCCESS } from "../constants/sliderConstants"


export const listSliderImages = (imagenes) => async (dispatch)=>{
    dispatch({type: SLIDER_IMAGES_LIST_SUCCESS, payload: imagenes})
}