import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../Context/UserContext"

function ProtectedRoute({ children }) {
    const { currentUser } = useContext(UserContext)

    if (!currentUser) {
        return <Navigate to="/login" />
    }

    return children
}

export default ProtectedRoute