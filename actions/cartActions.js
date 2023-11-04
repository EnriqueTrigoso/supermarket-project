import { CART_ADD_ITEM, CART_ADD_ITEM_INCREASE_QUANTITY, CART_ADD_ITEM_DECREASE_QUANTITY, CART_REMOVE_ITEM, OPEN_POPUP, CLOSE_POPUP } from "../constants/cartConstants";

export const addToCartFirst = (product) => async (dispatch, getState) => {

  dispatch({
    type: CART_ADD_ITEM,
    payload: product,
  });

};

export const addToCart = (product, qty) => async (dispatch, getState) => {

  const cartItems = getState().cart.cartItems
  const existItem = cartItems.find((cartItem) => cartItem.id === product.id);

  if (typeof existItem === 'undefined') {
    dispatch({
      type: OPEN_POPUP
    })

    setTimeout(() => {
      dispatch({
        type: CLOSE_POPUP
      })
    }, 1500)

    dispatch({
      type: CART_ADD_ITEM,
      payload: { ...product, qty },
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

  }

};

export const addQuantity = (id) => async (dispatch, getState) => {

  dispatch({
    type: CART_ADD_ITEM_INCREASE_QUANTITY,
    payload: {
      id
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const subQuantity = (id) => async (dispatch, getState) => {

  dispatch({
    type: CART_ADD_ITEM_DECREASE_QUANTITY,
    payload: {
      id
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

};

export const removeFromCart = (productId) => (dispatch, getState) => {

  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

};