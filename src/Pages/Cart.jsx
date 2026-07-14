import { useContext, useState } from "react"
import { UserContext } from "../Context/UserContext"
import CartCard from "../Components/CartCard"
import { CartContext } from "../Context/CartContext"
import { Checkout } from "../Services/Orders"
import SuccessPopup from "../Components/SuccessPopup"

function Cart() {

    const { currentUser } = useContext(UserContext)
    const { cartItems, loading, clearCart } = useContext(CartContext)

    const [showSuccess, setShowSuccess] = useState(false)


    const total = cartItems.reduce((sum, item) => {
        return sum + (item.product.price * item.quantity)
    }, 0)

    const handleCheckout = async () => {
        await Checkout(currentUser.id, cartItems, total)
        await clearCart()
      setShowSuccess(true)
    }

    return (
        <>

            <div>
                <h1 className="text-2xl font-bold mb-4">Your Cart 🛒</h1>

                {loading &&
                    <div class="flex items-center justify-center">
                        <div className="w-16 h-16 border-4 border-lilac border-t-transparent rounded-full animate-spin"></div>
                    </div>
                }

                {(cartItems.length === 0 && !loading) && (
                    <div className="text-gray-500">Your cart is empty</div>
                )}

                {(cartItems.length > 0 && !loading) &&
                    <div className="space-y-4">
                        {cartItems.map((item, index) => (
                            <CartCard item={item} />
                        ))}

                        {/* Total Section */}
                        <div className="border-t border-[#ff6b35] pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
                            <h2 className="text-lg md:text-xl font-bold">Total</h2>
                           <h2 className="text-lg md:text-xl font-bold">${total.toFixed(2)}</h2>
                        </div>

                        {/* Checkout Button */}
                        <button
                            onClick={handleCheckout}
                           className="first-div w-full sm:w-auto sm:px-10 text-white py-3 rounded-xl mt-4 hover:bg-[#ff6b35]/90"
                        >
                            Checkout
                        </button>
                    </div>
                }
            </div>

            {showSuccess && (
                <SuccessPopup
                    onClose={() => setShowSuccess(false)}
                />
            )}
        </>
    )
}

export default Cart