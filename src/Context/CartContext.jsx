import { createContext, useContext, useEffect, useState } from "react";
import { AddToCart, GetCartItems, RemoveFromCart, ClearCart } from "../Services/Cart";
import { UserContext } from "./UserContext";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [loading, setLoading] = useState(false)

    const { currentUser } = useContext(UserContext)

    // useEffect(() => {
    //     getAllCart()
    // }, [])

    useEffect(() => {
    if (currentUser) {
        getAllCart();
    }
}, [currentUser]);


    // const getAllCart = async () => {
    //     setLoading(true)
    //     const data = await GetCartItems(currentUser.id)
    //     await setCartItems(data[0].cosmetics)
    //     setLoading(false)
    // }


    const getAllCart = async () => {
    if (!currentUser) return

    setLoading(true)

    const data = await GetCartItems(currentUser.id)

    if (data.length > 0) {
        setCartItems(data[0].cosmetics || [])
    } else {
        setCartItems([])
    }

    setLoading(false)
}

    const addToCart = async (cosmetic) => {
        setLoading(true)
        await AddToCart(currentUser.id, cosmetic)
        await getAllCart()
        setLoading(false)
    }

    const removeFromCart = async (product) => {
        setLoading(true)
        await RemoveFromCart(currentUser.id, product)
        await getAllCart()
        setLoading(false)
    }


    const clearCart = async () => {
    setLoading(true)

    await ClearCart(currentUser.id)
    await getAllCart()

    setLoading(false)
}

    return <CartContext.Provider value={{ getAllCart, cartItems, addToCart, removeFromCart, clearCart, loading }}>
        {children}
    </CartContext.Provider>
}