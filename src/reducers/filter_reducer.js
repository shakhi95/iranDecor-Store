import {
  LOAD_PRODUCTS,
  CHANGE_VIEW,
  CHANGE_SORT,
  SORT_PRODUCTS,
  CHANGE_FILTER,
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
} from "../actions/types";

const reducer = (state, action) => {
  //
  switch (action.type) {
    //
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map((product) => product.price);
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        allProducts: action.payload,
        filteredProducts: action.payload,
        filters: { ...state.filters, price: maxPrice, maxRange: maxPrice },
      };

    case CHANGE_VIEW:
      return { ...state, view: action.payload };

    case CHANGE_SORT:
      return { ...state, sort: action.payload };

    case SORT_PRODUCTS:
      const { sort, filteredProducts } = state;
      let tempProducts = [...filteredProducts];
      if (sort === "price-up") {
        tempProducts = filteredProducts.sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (sort === "price-down") {
        tempProducts = filteredProducts.sort((a, b) => {
          return b.price - a.price;
        });
      }
      if (sort === "a-z") {
        tempProducts = filteredProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      return { ...state, filteredProducts: tempProducts };

    case CHANGE_FILTER:
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          company: "all",
          category: "all",
          color: "all",
          price: state.filters.maxRange,
          shipping: false,
          featured: false,
        },
      };

    case FILTER_PRODUCTS:
      const {
        filters: { text, category, company, color, price, shipping, featured },
        allProducts,
      } = state;
      let filteringProducts = [...allProducts];

      if (text) {
        filteringProducts = filteringProducts.filter((product) =>
          product.name.toLowerCase().startsWith(text.toLowerCase())
        );
      }

      if (category !== "all") {
        filteringProducts = filteringProducts.filter(
          (product) => product.category === category
        );
      }

      if (company !== "all") {
        filteringProducts = filteringProducts.filter(
          (product) => product.company === company
        );
      }

      if (color !== "all") {
        filteringProducts = filteringProducts.filter((product) =>
          product.colors.find((col) => col === color)
        );
      }

      filteringProducts = filteringProducts.filter(
        (product) => product.price <= price
      );

      if (shipping) {
        filteringProducts = filteringProducts.filter(
          (product) => product.shipping
        );
      }

      if (featured) {
        filteringProducts = filteringProducts.filter(
          (product) => product.featured
        );
      }

      return { ...state, filteredProducts: filteringProducts };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default reducer;
