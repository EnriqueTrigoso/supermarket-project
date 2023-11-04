import {CATEGORY_LIST_SUCCESS} from '../constants/categoryConstants'

export const listCategories = (categories) => async (dispatch)=>{
    dispatch({type: CATEGORY_LIST_SUCCESS, payload: categories})
}