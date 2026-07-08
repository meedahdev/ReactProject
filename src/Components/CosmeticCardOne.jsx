import { useContext } from "react"
import { BsHeart } from "react-icons/bs"
import { Link } from "react-router-dom"
import { CartContext } from "../Context/CartContext"

function CosmeticCardOne({ cosmetic }) {
    const truncate = (desc) => {
        if (desc) {
            const broken = desc.split(" ")
            return broken.slice(0, 3).join(" ") + "..."
        }
    }

    const { addToCart } = useContext(CartContext)

    return (
        <>
            <div className="border border-black/20 rounded-md">
              <Link to={`/cosmetic/${cosmetic.id}`}>
                    <img className="object-cover h-48 w-full rounded-tr-md rounded-tl-md" src={cosmetic.image} alt="" />
                </Link>
                <div className="p-1 space-y-2">
                    <BsHeart />
                    <h1 className="text-2xl">{cosmetic.name}</h1>
                    <p>${cosmetic.price}</p>
                    <p>{truncate(cosmetic.description)}</p>
                    <button onClick={() => addToCart(cosmetic)} className="bg-[#C8A2C8] text-black rounded py-2 px-4 hover:bg-[#C8A2C8] transition">Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default CosmeticCardOne 