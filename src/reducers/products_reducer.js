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

const reducer = (state, action) => {
  //
  switch (action.type) {
    case ALL_PRODUCTS_START:
      return { ...state, allProducts_loading: true, allProducts_error: false };

    case ALL_PRODUCTS_END:
      return { ...state, allProducts_loading: false };

    case ALL_PRODUCTS_ERROR:
      return { ...state, allProducts_error: true };

    case ALL_PRODUCTS_SUCCESS:
      const featured = action.payload.filter(
        (product) => product.featured === true
      );
      return {
        ...state,
        products: action.payload,
        featured_products: featured,
      };

    case ONE_PRODUCT_START:
      return { ...state, oneProduct_loading: true, oneProduct_error: false };

    case ONE_PRODUCT_END:
      return { ...state, oneProduct_loading: false };

    case ONE_PRODUCT_ERROR:
      return { ...state, oneProduct_error: true };

    case ONE_PRODUCT_SUCCESS:
      return { ...state, product: action.payload };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default reducer;
