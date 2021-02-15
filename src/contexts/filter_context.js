import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import { useProductsValues } from "../contexts/products_context";
import {
  LOAD_PRODUCTS,
  CHANGE_VIEW,
  CHANGE_SORT,
  SORT_PRODUCTS,
  CHANGE_FILTER,
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
} from "../actions/types";

const FilterContext = React.createContext();

const initialValues = {
  allProducts: [],
  filteredProducts: [],
  view: "grid",
  sort: "a-z",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    price: 0,
    maxRange: 0,
    shipping: false,
    featured: false,
  },
};

const FilterProvider = ({ children }) => {
  //
  const { products } = useProductsValues();

  const [state, dispatch] = useReducer(reducer, initialValues);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  const changeView = (view) => {
    dispatch({ type: CHANGE_VIEW, payload: view });
  };

  const changeSort = (e) => {
    dispatch({ type: CHANGE_SORT, payload: e.target.value });
  };

  const changeFilter = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "price") {
      value = Number(value);
    }
    if (name === "shipping" || name === "featured") {
      value = e.target.checked;
    }
    if (name === "color") {
      value = e.target.dataset.color;
    }

    dispatch({ type: CHANGE_FILTER, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{ ...state, changeView, changeSort, changeFilter, clearFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterValues = () => {
  return useContext(FilterContext);
};

export { FilterProvider, useFilterValues };
