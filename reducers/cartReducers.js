import { CART_ADD_ITEM, CART_ADD_ITEM_INCREASE_QUANTITY, CART_ADD_ITEM_DECREASE_QUANTITY, CART_REMOVE_ITEM, OPEN_POPUP, CLOSE_POPUP } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [], popUpOpen: false }, action) => {
    
    let updatedProducts = null

    switch (action.type) {
        case CART_ADD_ITEM:

            const item = action.payload;
            const existItem = state.cartItems.find((product) => product.id === item.id);

            if (typeof existItem === 'undefined') {
                return { ...state, cartItems: [...state.cartItems, item]}
            }

            return state
        
        case OPEN_POPUP:
            return { ...state, popUpOpen: true}
        
        case CLOSE_POPUP:
            return { ...state, popUpOpen: false}

        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((product) => product.id !== action.payload),
            };

        case CART_ADD_ITEM_INCREASE_QUANTITY:
            updatedProducts = state.cartItems.map(product =>{
                if (product.id === action.payload.id){
                    return Object.assign({
                        ...product,
                        qty: product.qty + 1,
                      })
                }
                return product
            })
            
            return {
                ...state,
                cartItems: updatedProducts,
            };

        case CART_ADD_ITEM_DECREASE_QUANTITY:
            updatedProducts = state.cartItems.map(product =>{
                if (product.id === action.payload.id){
                    return Object.assign({
                        ...product,
                        qty: product.qty - 1,
                      })
                }
                return product
            })
            
            return {
                ...state,
                cartItems: updatedProducts,
            };
            
        default:
            return state;
    }
};