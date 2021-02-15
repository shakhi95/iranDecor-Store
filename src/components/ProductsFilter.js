import React, { useState, useEffect } from "react";
import { FaAngleUp, FaAngleDown, FaCircle } from "react-icons/fa";
import styled from "styled-components";
import { getUniqueValues, cent2toman } from "../utils/helpers";
import { useFilterValues } from "../contexts/filter_context";
import { useProductsValues } from "../contexts/products_context";
import Loading from "./Loading";

const ProductsFilter = () => {
  //
  const [isShown, setIsShown] = useState(false);

  const { allProducts_loading: loading } = useProductsValues();

  const {
    filters: {
      text,
      category,
      company,
      color,
      price,
      maxRange,
      shipping,
      featured,
    },
    changeFilter,
    allProducts,
    clearFilters,
  } = useFilterValues();

  const categories = getUniqueValues(allProducts, "category");
  const companies = getUniqueValues(allProducts, "company");
  const colors = getUniqueValues(allProducts, "colors");

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsShown(true);
    }
  }, []);

  const renderFilterForm = () => {
    return (
      <>
        <div className="mb-3">
          <small>جستجو : </small>
          <input
            type="text"
            className="form-control form-control-sm"
            name="text"
            value={text}
            onChange={changeFilter}
            placeholder="In English..."
            style={{ direction: "ltr", fontFamily: "sans-serif" }}
          />
        </div>
        <div className="mb-3">
          <small>دسته بندی : </small>
          <select
            className="form-select form-select-sm text-capitalize"
            size={categories.length}
            style={{ overflowY: "auto" }}
            name="category"
            value={category}
            onChange={changeFilter}
          >
            {categories.map((catg, inx) => {
              return (
                <option
                  key={inx}
                  value={catg}
                  style={{ fontFamily: "sans-serif", textAlign: "center" }}
                >
                  {catg === "all" ? "هـمه" : catg}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-3">
          <small>تولیدکننده : </small>
          <select
            className="form-select form-select-sm text-capitalize"
            name="company"
            value={company}
            onChange={changeFilter}
          >
            {companies.map((com, inx) => {
              return (
                <option key={inx} value={com}>
                  {com === "all" ? "هـمه" : com}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-3">
          <small>انتخاب رنگ : </small>
          <div className="border rounded px-2 py-1 d-flex flex-wrap align-items-center">
            {colors.map((col, inx) => {
              return (
                <button
                  key={inx}
                  name="color"
                  data-color={col}
                  className={
                    col === color
                      ? "btn btn-sm btn-outline-secondary border-0 active"
                      : "btn btn-sm btn-outline-secondary border-0"
                  }
                  onClick={changeFilter}
                >
                  {col === "all" ? (
                    "هـمه"
                  ) : (
                    <FaCircle
                      style={{
                        color: col,
                        cursor: "pointer",
                        pointerEvents: "none",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
        <div className="mb-3">
          <small>دامنه قیمت : </small>
          <br />
          <small className="text-muted">از صفر تا {cent2toman(price)}</small>
          <br />
          <input
            className="w-100"
            type="range"
            name="price"
            value={price}
            onChange={changeFilter}
            min={0}
            max={maxRange}
          />
        </div>
        <div className="mb-3 d-flex">
          <small>ارسال رایگان : </small>
          <input
            type="checkbox"
            className="form-check-input ms-auto me-2"
            name="shipping"
            checked={shipping}
            onChange={changeFilter}
          />
        </div>
        <div className="mb-3 d-flex">
          <small>فروش ویژه : </small>
          <input
            type="checkbox"
            className="form-check-input ms-auto me-2"
            name="featured"
            onChange={changeFilter}
            checked={featured}
          />
        </div>
        <div className="text-center">
          <button
            className="btn btn-sm btn-danger px-3 py-0"
            onClick={clearFilters}
          >
            پاک کردن فیلتر ها
          </button>
        </div>
      </>
    );
  };

  return (
    <Wrapper className="mb-4">
      <div
        className="bg-light rounded px-3 py-1 d-flex justify-content-between align-items-center"
        onClick={() => setIsShown(!isShown)}
        style={{ cursor: "pointer" }}
      >
        <small>جستجو پیشرفته</small>
        {isShown ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      <div
        className={
          isShown ? "formbox p-3 mt-2" : "formbox px-3 py-1 mt-1 d-none"
        }
      >
        {loading ? <Loading /> : renderFilterForm()}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @keyframes expandeY {
    from {
      transform: scaleY(0);
    }
    to {
      transform: scaleY(1);
    }
  }

  .formbox {
    animation: expandeY 0.5s;
    transform-origin: top;
    background-color: white;
    border-radius: 0.25rem;
  }
`;

export default ProductsFilter;
