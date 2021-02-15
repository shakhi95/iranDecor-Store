import React from "react";
import { Link } from "react-router-dom";
import { useFilterValues } from "../contexts/filter_context";
import { useProductsValues } from "../contexts/products_context";
import Loading from "./Loading";
import ProductCard from "./ProductCard";
import { cent2toman } from "../utils/helpers";

const ProductsContainer = () => {
  //
  const { filteredProducts: products, view } = useFilterValues();
  const {
    allProducts_loading: loading,
    allProducts_error: error,
  } = useProductsValues();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="text-center text-danger my-5">
        خطایی رخ داد... دوباره تلاش کنید
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center text-danger my-5">
        متاسفانه محصولی مطابق جستجو شما یافت نشد.
      </div>
    );
  }

  if (view === "grid") {
    return (
      <div className="container-fluid">
        <div className="row">
          {products.map((product) => {
            return (
              <div key={product.id} className="col-sm-6 col-lg-4 mb-3">
                <ProductCard {...product} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (view === "list") {
    return (
      <div className="container-fluid px-2">
        <div className="d-flex flex-column">
          {products.map(({ id, name, image, price, featured }) => {
            return (
              <div key={id} className="card mb-3 shadow-sm">
                <div className="row g-0">
                  <div className="col-sm-4">
                    <img
                      src={image}
                      alt={name}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="col-sm-8">
                    <div className="card-body h-100 d-flex flex-column justify-content-between">
                      <div>
                        <div className="d-flex justify-content-between mb-2 flex-wrap">
                          <h6 className="card-title text-capitalize m-0">
                            {name}
                          </h6>
                          {featured && (
                            <div className="featured bg-danger px-2 rounded-pill text-white">
                              <small>فروش ویژه</small>
                            </div>
                          )}
                        </div>
                        <div className="mb-2">
                          <small className="text-muted">
                            {cent2toman(price)}
                          </small>
                        </div>
                        <div>
                          <small className="text-muted">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                            و متون پیوسته اهل دنیای موجود طراحی اساسا مورد
                            استفاده قرار گیرد....
                          </small>
                        </div>
                      </div>
                      <div>
                        <Link
                          to={`/products/${id}`}
                          className="btn btn-sm btn-info py-0 px-3"
                        >
                          جزییات بیشتر
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return <div>ProductsContainer</div>;
};

export default ProductsContainer;
