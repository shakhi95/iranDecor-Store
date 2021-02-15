import React from "react";

import { ProductsFilter, ProductsContainer, ProductsSort } from "../components";

const ProductsPage = () => {
  return (
    <div className="min-vh-100 container py-5">
      <div className="row">
        <div className="col-md-4 col-lg-3 user-select-none">
          <ProductsFilter />
        </div>
        <div className="col-md-8 col-lg-9">
          <ProductsSort />
          <ProductsContainer />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
