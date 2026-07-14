import { useEffect, useState } from "react"
import {  GetAllCosmetic } from "../Services/Products"
import CosmeticCardOne from "../Components/CosmeticCardOne"

function Products() {
    const [cosmetics, setCosmetics] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getCosmetics()
    }, [])

    const getCosmetics = async () => {
        setLoading(true)
        const data = await GetAllCosmetic()
        console.log("products:", data)
        setCosmetics(data)
        setLoading(false)
    }
    
    return (
        <>
            <h1 className="text-2xl mb-2">Cosmetics</h1>

            {
                loading &&
                <div className="flex items-center justify-center min-h-screen">
                    <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                </div>
            }

            {(!loading && cosmetics.length === 0) &&
                <div>
                    <h1>No cosmetic available</h1>
                </div>
            }

            {
                cosmetics.length > 0 &&
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {cosmetics.map((cosmetic) => (
                        <CosmeticCardOne key= {cosmetic.id} cosmetic={cosmetic} />
                    ))}
                </div>
            }
        </>
    )
}

export default Products