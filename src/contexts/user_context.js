import React, { useEffect, useContext, useState } from "react";

const UserContext = React.createContext();

const getDataLS = () => {
  let user = false;

  if (localStorage.getItem("irandecor-user")) {
    user = JSON.parse(localStorage.getItem("irandecor-user"));
  }

  return user;
};

const UserProvider = ({ children }) => {
  //
  const [isSignedIn, setIsSignedIn] = useState(getDataLS());

  useEffect(() => {
    localStorage.setItem("irandecor-user", JSON.stringify(isSignedIn));
  }, [isSignedIn]);

  const signIn = () => {
    setIsSignedIn(true);
  };

  const signOut = () => {
    setIsSignedIn(false);
  };

  return (
    <UserContext.Provider value={{ isSignedIn, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserValues = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserValues };
