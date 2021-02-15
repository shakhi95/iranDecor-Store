import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterValues } from "../contexts/filter_context";

const ProductsSort = () => {
  //
  const {
    view,
    changeView,
    filteredProducts: products,
    sort,
    changeSort,
  } = useFilterValues();

  return (
    <div className="d-flex align-items-center mb-3 flex-wrap">
      <div className="btn-group btn-group-sm" title="نوع نمایش">
        <button
          type="button"
          className={`btn btn-outline-secondary ${view === "grid" && "active"}`}
          onClick={() => changeView("grid")}
        >
          <BsFillGridFill />
        </button>
        <button
          type="button"
          className={`btn btn-outline-secondary ${view === "list" && "active"}`}
          onClick={() => changeView("list")}
        >
          <BsList />
        </button>
      </div>
      <div className="ps-3">
        <small>نمایش تعداد {products.length} کالا</small>
      </div>
      <div className="flex-fill px-3">
        <hr className="d-none d-sm-block" />
      </div>
      <div>
        <select
          className="form-select form-select-sm"
          value={sort}
          onChange={changeSort}
        >
          <option value="a-z">حروف الفباء</option>
          <option value="price-down">قیمت - نزولی</option>
          <option value="price-up">قیمت - صعودی</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsSort;
