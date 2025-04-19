const { createContext, Children, useState } = require("react");

export const AuthContext = createContext({
    isLoggedin : false,
    logIn : ()=>{},
    logOut :()=>{}
})

export function AuthContextProvider({children}) {

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const logIn = () =>{
        setIsLoggedIn(true)
    }
    const logOut = () =>{
        setIsLoggedIn(false)
    }

    return(
        <AuthContext.Provider value={{isLoggedIn,logIn,logOut}}>
        {children}
        </AuthContext.Provider>
    );
}