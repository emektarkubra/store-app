import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const SignupContext = createContext()

export default function SignupContextProvider({children}){

    const defaultUser = {
        email : "",
        password : "",
        userName : ""
    }

    const [user, setUser] = useState(defaultUser)
    const [userList, setUserList] = useState([])
    const [count, setCount] = useState(0)

    useEffect(()=> {
        const storedUserList = JSON.parse(localStorage.getItem("userList"))
        setUserList(storedUserList ?? [])
    }, [])

    useEffect(()=> {
        if(count>0){
            localStorage.setItem("userList", JSON.stringify(userList))
        }
    }, [count])


    function handleChangeSignupInput(e){
        setUser(prev => {
            return {
                ...prev,
                [e.target.name] : e.target.value
            }
        })

    }

    function handleSignup(e){
        setUserList(prev => [...prev, user])
        setCount(prev => prev + 1)
        e.preventDefault()
    }
    return (
        <>
            <SignupContext.Provider value = {{handleChangeSignupInput, handleSignup, userList}}>
                {children}
            </SignupContext.Provider>
        </>
    )
}