import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(() => {
        const storedData = localStorage.getItem("cosmeticCurrentUser")
        return storedData ? JSON.parse(storedData) : null
    })

    return <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        {children}
    </UserContext.Provider>

}