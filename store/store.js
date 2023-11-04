import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from '../reducers/cartReducers';
import { productListReducer } from '../reducers/productReducers';
import {categoriesListReducer} from '../reducers/categoryReducers'
import {sliderImagesReducer} from '../reducers/sliderImagesReducer';

const initialState = {
    cart: {
        cartItems: []
    },
};

const reducer = combineReducers({
    productList: productListReducer,
    cart: cartReducer,
    categories: categoriesListReducer,
    sliderImages : sliderImagesReducer
})

const store = createStore(reducer, initialState, applyMiddleware(thunk))

export default store