import { useContext } from "react"
import { UserContext } from "../Context/UserContext"
import CartCard from "../Components/CartCard"
import { CartContext } from "../Context/CartContext"

function Cart() {

    const { currentUser } = useContext(UserContext)
    const { cartItems, loading } = useContext(CartContext)

    return (
        <>

            <div>
                <h1 className="text-2xl font-bold mb-4">Your Cart 🛒</h1>

                {loading &&
                    <div class="flex items-center justify-center">
                        <div class="w-16 h-16 border-4 border-lilac border-t-transparent rounded-full animate-spin"></div>
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
                        <div className="border-t border-[#ff6b35] pt-4 flex justify-between items-center">
                            <h2 className="text-lg font-bold">Total</h2>
                            <h2 className="text-xl font-bold">$total?.toFixed(2)</h2>
                        </div>

                        {/* Checkout Button */}
                        <button className="first-div w-full text-white py-3 rounded-xl mt-4 hover:bg-[#ff6b35]/90">
                            Checkout
                        </button>
                    </div>
                }
            </div>
        </>
    )
}

export default Cart