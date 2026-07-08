import { createContext, useContext, useState } from "react";
import { CreateUser, LoginUser } from "../Services/User";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [askLogout, setAskLogout] = useState(false)
    const { setCurrentUser } = useContext(UserContext)

    //loading
    const [loading, setLoading] = useState(false)
    const nav = useNavigate()

    //signup form value
    const [signupForm, setSignupForm] = useState({
        username: ""
    })

    const [loginForm, setLoginForm] = useState({
        username: ""
    })

    //create new user function
    const createAccount = async (e) => {
        e.preventDefault()

        //check input values
        if (!signupForm.username) {
            alert("username connot be empty")
            return
        }

        try {
            setLoading(true)
            //create user
            const data = await CreateUser(signupForm)
            //store user to localstorage
            localStorage.setItem("novacurrentuser", JSON.stringify(data))
            setCurrentUser(data)
            setLoading(false)
            nav("/")
        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }



    //login function
    const Login = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const data = await LoginUser(loginForm.username)
            localStorage.setItem("novacurrentuser", JSON.stringify(data))
            setCurrentUser(data)
            nav("/")
        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    const logout = () => {
        localStorage.removeItem("novacurrentuser")
        setCurrentUser(null)
        setAskLogout(false)
    }
    return <AuthContext.Provider value={{ loading, signupForm, setSignupForm, createAccount, askLogout, setAskLogout, logout, Login, setLoginForm, loginForm }}>
        {children}
    </AuthContext.Provider>

}