import { useState } from "react";
import { createContext } from "react";

export const LoginContext = createContext()

export default function LoginContextProvider({children}){

    const defaultUserValue = {
        email : "",
        password : "",
        check : false,
       
    }

    const [userValue, setUserValue] = useState(defaultUserValue)

    function handleChangeLoginInput(e){
        setUserValue(prev => {
            return {
                ...prev,
                [e.target.name] : e.target.type === "checkbox" ? e.target.checked : e.target.value
            }
        })
        e.preventDefault();    
    }

    function handleLogin(e){
        console.log(userValue)
        e.preventDefault();
    }
    

    return (
        <>
        <LoginContext.Provider value={{handleChangeLoginInput, handleLogin}}>
            {children}
        </LoginContext.Provider>
        </>
    )
}