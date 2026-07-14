import { useContext } from "react"
import { BsHeart } from "react-icons/bs"
import { FavoritesContext } from "../Context/FavoritesContext"
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
    // const { addToFavorites } = useContext(FavoritesContext)
    const { favorites, addFavorite } = useContext(FavoritesContext);

    const isFavorite = favorites.some(item => item.id === cosmetic.id);

    return (
        <>
            <div className="border border-black/20 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
                <Link to={`/cosmetic/${cosmetic.id}`}>
                    <img className="object-cover w-full h-48 sm:h-56 md:h-60" src={cosmetic.image} alt="" />
                </Link>
                <div className="p-4 space-y-3">
                    {/* <BsHeart /> */}
                    <h1 className="text-lg md:text-xl font-semibold">{cosmetic.name}</h1>
                    <p>${cosmetic.price}</p>
                    <p className="text-sm text-gray-600"> {truncate(cosmetic.description)}</p>
                   <div className="flex flex-col sm:flex-row gap-3 mt-4">
                        <button
                            onClick={() => addToCart(cosmetic)}
                            className="first-div text-white px-4 py-2 rounded-lg flex-1"
                        >
                            Add to Cart
                        </button>

                        <button
                            onClick={() => addFavorite(cosmetic)}
                            className="p-2 rounded-full bg-pink-100 text-pink-500 hover:bg-pink-500 hover:text-white transition"
                        >
                            <BsHeart className={isFavorite ? "text-pink-500" : "text-gray-500"} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CosmeticCardOne 