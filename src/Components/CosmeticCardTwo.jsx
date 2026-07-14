import { useContext } from "react"
import { BsHeart } from "react-icons/bs"
import { Link } from "react-router-dom"
import { CartContext } from "../Context/CartContext"

function CosmeticCardTwo ({ cosmetic }) {
    const truncate = (desc) => {
        if (desc) {
            const broken = desc.split(" ")
            return broken.slice(0, 15).join(" ") + "..."
        }
    }

    const { addToCart } = useContext(CartContext)

    return (
        <>
            <div className="first-div p-4 flex border  bg-[black] rounded-md gap-6">
                <Link to={`/cosmetic/${cosmetic.id}`}>
                    <img className="object-cover h-48 w-72 rounded-md" src={cosmetic.image} alt="" />
                </Link>
                <div className="p-2 space-y-2">
                    {/* <BsHeart /> */}
                    <h1 className="text-2xl">{cosmetic.name}</h1>
                    <p>${cosmetic.price}</p>
                    <p>{truncate(cosmetic.description)}</p>
                    <button onClick={() => addToCart(food)} className="text-white rounded py-1 px-4 bg-[black]">Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default CosmeticCardTwo