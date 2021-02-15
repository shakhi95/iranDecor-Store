import React, { useReducer, useEffect, useContext } from "react";
import axios from "axios";

import reducer from "../reducers/products_reducer";
import {
  ALL_PRODUCTS_START,
  ALL_PRODUCTS_END,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_ERROR,
  ONE_PRODUCT_START,
  ONE_PRODUCT_END,
  ONE_PRODUCT_ERROR,
  ONE_PRODUCT_SUCCESS,
} from "../actions/types";

const ProductsContext = React.createContext();

const initialState = {
  allProducts_loading: false,
  allProducts_error: false,
  products: [],
  featured_products: [],
  oneProduct_loading: false,
  oneProduct_error: false,
  product: {},
};

const ProductsProvider = ({ children }) => {
  //
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchAllProducts = async () => {
    dispatch({ type: ALL_PRODUCTS_START });

    try {
      const { data } = await axios.get(
        "https://course-api.com/react-store-products"
      );
      dispatch({ type: ALL_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ALL_PRODUCTS_ERROR });
    }

    dispatch({ type: ALL_PRODUCTS_END });
  };

  const fetchOneProduct = async (id) => {
    dispatch({ type: ONE_PRODUCT_START });

    try {
      const { data } = await axios.get(
        `https://course-api.com/react-store-single-product?id=${id}`
      );
      dispatch({ type: ONE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ONE_PRODUCT_ERROR });
    }

    dispatch({ type: ONE_PRODUCT_END });
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, fetchOneProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsValues = () => {
  return useContext(ProductsContext);
};

export { ProductsProvider, useProductsValues };
