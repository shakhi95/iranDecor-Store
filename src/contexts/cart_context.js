import React, { useEffect, useReducer, useContext } from "react";

import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  CLEAR_ALL_CART,
  CLEAR_ONE_ITEM,
  ITEM_UP_ONE,
  ITEM_DOWN_ONE,
  CALC_TOTALS,
} from "../actions/types";

const CartContext = React.createContext();

const getDataLS = () => {
  if (localStorage.getItem("irandecor-cart")) {
    return JSON.parse(localStorage.getItem("irandecor-cart"));
  } else {
    return [];
  }
};

const initialValues = {
  cartItems: getDataLS(),
  totalItems: 0,
  totalAmount: 0,
};

const CartProvider = ({ children }) => {
  //
  const [state, dispatch] = useReducer(reducer, initialValues);

  useEffect(() => {
    dispatch({ type: CALC_TOTALS });
    localStorage.setItem("irandecor-cart", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  const addToCart = (product, count, color) => {
    dispatch({ type: ADD_TO_CART, payload: { product, count, color } });
  };

  const clearAllCartItems = () => {
    dispatch({ type: CLEAR_ALL_CART });
  };

  const clearOneCartItem = (id, color) => {
    dispatch({ type: CLEAR_ONE_ITEM, payload: { id, color } });
  };

  const cartItemUpOne = (id, color) => {
    dispatch({ type: ITEM_UP_ONE, payload: { id, color } });
  };

  const cartItemDownOne = (id, color) => {
    dispatch({ type: ITEM_DOWN_ONE, payload: { id, color } });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        clearAllCartItems,
        clearOneCartItem,
        cartItemUpOne,
        cartItemDownOne,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartValues = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartValues };
