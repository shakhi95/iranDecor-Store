import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import "./styling/bootstrap.rtl.min.css";
import "./styling/style.css";

import {
  Home,
  About,
  Error,
  Cart,
  Products,
  SingleProduct,
  Checkout,
  LoginPage,
  PrivateRoute,
} from "./pages";

import { Navbar, Footer, Breadcrumb } from "./components";

const App = () => {
  return (
    <HashRouter basename="/">
      <Navbar />
      <Breadcrumb />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/login" component={LoginPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" component={SingleProduct} />
        <PrivateRoute path="/cart/checkout" component={Checkout} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </HashRouter>
  );
};

export default App;
