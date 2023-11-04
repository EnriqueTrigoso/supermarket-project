import { SLIDER_IMAGES_LIST_SUCCESS } from '../constants/sliderConstants'

export const sliderImagesReducer= (state = { imagenes:[] }, action)=>{
    switch(action.type){
        case SLIDER_IMAGES_LIST_SUCCESS:
            return { imagenes: action.payload};
        default:
            return state;
    }
}