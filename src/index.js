import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ProductsProvider } from "./contexts/products_context";
import { FilterProvider } from "./contexts/filter_context";
import { CartProvider } from "./contexts/cart_context";
import { UserProvider } from "./contexts/user_context";

ReactDOM.render(
  <UserProvider>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </UserProvider>,
  document.querySelector("#root")
);
