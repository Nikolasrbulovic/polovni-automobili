import { createContext } from "react";

const UserContext = createContext({
   user: {},
    isLoggedIn: false,
   setIsLoggedIn: ()=>{} 
})

export default UserContext;