import { useEffect, useState } from "react"
import { GetCosmeticById } from "../Services/Products"
import { useParams } from "react-router-dom"

function CosmeticDetail() {
    const { id } = useParams()
    const [cosmetic, setCosmetic] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getCosmetic()
    }, [id])

    const getCosmetic = async () => {
        setLoading(true)
        const data = await GetCosmeticById(id)
        setCosmetic(data)
        setLoading(false)
    }
    return (
        <>
            {loading ?

                <div className="flex items-center justify-center min-h-screen">
                    <div className="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
                </div>

                :
               <div className="grid grid-cols-12 gap-6 bg-[#F8C8DC] p-6 rounded-lg">
                    <div className="col-span-5">
                        <img className="rounded border-2 border-[#D4AF37]" src={cosmetic?.image} alt="" />
                    </div>
                    <div className="col-span-7 space-y-2">
                       <h1 className="text-3xl text-pink-400">{cosmetic?.name}</h1>
                       <p className="text-md text-[#D4AF37]">${cosmetic?.price}</p>
                        <p className="text-gray-300"> {cosmetic?.description}</p>
                       <button className="text-white rounded py-2 px-5 bg-pink-500 hover:bg-[#D4AF37] transition mt-6"> Add to Cart </button>
                    </div>
                </div>
            }
        </>
    )
}

export default CosmeticDetail