import UserContext from "./UserContext";
import { useState } from "react";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logIn = (bool) => {
    setIsLoggedIn(bool);
  };
  const getIsLoggedIn = () => {
    return isLoggedIn;
  };
  const userContext = {
    user: user,
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: logIn,
  };
  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
