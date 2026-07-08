import { TiTimes } from "react-icons/ti"
import { CartContext } from "../Context/CartContext"
import { useContext } from "react"

function CartCard({ item }) {
    const product = item.product

    const { removeFromCart } = useContext(CartContext)

    return (
        <>
            <div className="flex items-center gap-4 p-4 border border-[#ff6b35] rounded-xl shadow-sm"            >
                <button onClick={() => removeFromCart(product)} className="p-2 bg-gray-200 rounded-full text-[#ff6b35]">
                    <TiTimes />
                </button>

                <img src={product?.image} alt={product?.name} className="w-20 h-20 object-cover rounded-lg" />

                <div className="flex-1">
                    <h2 className="font-semibold">{product?.name}</h2>

                    <p className="text-gray-500 text-sm">
                        {product?.category}
                    </p>

                    <p className="font-bold mt-1">
                        ${product?.price}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="px-2 py-1 bg-gray-200 rounded">
                        -
                    </button>

                    <span>{item?.quantity}</span>

                    <button className="px-2 py-1 bg-gray-200 rounded">
                        +
                    </button>
                </div>
            </div>
        </>
    )
}

export default CartCard