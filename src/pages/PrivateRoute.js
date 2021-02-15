import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserValues } from "../contexts/user_context";

const PrivateRoute = ({ component: Component, ...rest }) => {
  //
  const { isSignedIn } = useUserValues();

  return (
    <Route
      {...rest}
      render={() => {
        return isSignedIn ? <Component /> : <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
