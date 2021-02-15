import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductsValues } from "../contexts/products_context";
import {
  SingleGallery,
  Loading,
  SingleStars,
  SingleAddToCart,
} from "../components";
import { cent2toman } from "../utils/helpers";

const SingleProductPage = () => {
  //
  const { id } = useParams();
  const {
    fetchOneProduct,
    oneProduct_loading: loading,
    oneProduct_error: error,
    product,
  } = useProductsValues();

  useEffect(() => {
    fetchOneProduct(id);
  }, [id]);

  if (loading) {
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center">
        <h4>خطایی رخ داد... دوباره تلاش کنید</h4>
      </div>
    );
  }

  return (
    <div className="min-vh-100 container py-5">
      <div className="row">
        <div className="col-md-6">
          <SingleGallery images={product.images} />
        </div>
        <div className="col-md-6 mt-2 px-5 px-md-1">
          <hr className="mt-0" />
          <div className="d-flex flex-column flex-sm-row align-items-center mb-2">
            <small>نام لاتین کالا : </small>
            <h4
              className="text-capitalize ms-3"
              style={{ fontFamily: "sans-serif" }}
            >
              {product.name}
            </h4>
          </div>
          <div className="d-flex flex-column flex-sm-row align-items-center mb-2">
            <SingleStars stars={product.stars} />
            <small className="mx-3 text-muted">
              ( {product.reviews} دیدگاه کاربران )
            </small>
          </div>
          <div className="mb-2">
            <small>قیمت : </small>
            <small className="text-muted">{cent2toman(product.price)}</small>
          </div>
          <div className="mb-2">
            <p>
              <small>ویژگی های کالا : </small>
              <small className="text-muted">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
              </small>
            </p>
          </div>
          <div className="row">
            <small className="mb-2">توضیحات دیگر : </small>
            <div className="col-sm-3">
              <small>بارکد کالا : </small>
            </div>
            <div className="col-sm-9">
              <small
                className="text-muted"
                style={{ fontFamily: "sans-serif" }}
              >
                {product.id}
              </small>
            </div>
            <div className="col-sm-3">
              <small>تولیدکننده : </small>
            </div>
            <div className="col-sm-9">
              <small className="text-muted text-uppercase">
                {product.company}
              </small>
            </div>
            <div className="col-sm-3">
              <small>دسته بندی : </small>
            </div>
            <div className="col-sm-9">
              <small className="text-muted text-capitalize">
                {product.category}
              </small>
            </div>
            <div className="col-sm-3">
              <small>فروش ویژه : </small>
            </div>
            <div className="col-sm-9">
              <small>
                {product.featured ? (
                  <small className="text-success">بـله</small>
                ) : (
                  <small className="text-danger">خـیر</small>
                )}
              </small>
            </div>
            <div className="col-sm-3">
              <small>ارسال رایگان : </small>
            </div>
            <div className="col-sm-9">
              <small>
                {product.shipping ? (
                  <small className="text-success">بـله</small>
                ) : (
                  <small className="text-danger">خـیر</small>
                )}
              </small>
            </div>
          </div>
          <SingleAddToCart product={product} />
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
