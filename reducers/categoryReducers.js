import { CATEGORY_LIST_SUCCESS } from '../constants/categoryConstants'

export const categoriesListReducer= (state = {loading:true, categories:[]}, action)=>{
    switch(action.type){
        case CATEGORY_LIST_SUCCESS:
            return {loading: false, categories: action.payload};
        default:
            return state;
    }
}