import { useEffect, useState } from "react"
import CosmeticCard from "../Components/CosmeticCardOne"
import { GetTag } from "../Services/Products"
import Hero from "../Layout/Hero"

function Dashboard() {
    const [mostOrdered, setMostOrdered] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getMostOrdered()
    }, [])

    const getMostOrdered = async () => {
        setLoading(true)
        const data = await GetTag("most-ordered")
        setMostOrdered(data)
        setLoading(false)
    }

    return (
        <>
            <Hero />

            <h1 className="mt-6 mb-4 text-3xl text-black font-bold"> Most Ordered </h1>

            {(mostOrdered.length == 0 && !loading) &&
              <h1 className="text-pink-400 text-xl"> No cosmetic available</h1>}

            {
                loading &&
                <div className="flex items-center justify-center min-h-screen">
                    <div className="w-16 h-16 border-4 border-[#C8A2C8] border-t-transparent rounded-full animate-spin"></div>
                </div>
            }

            {(mostOrdered.length > 0 && !loading) &&
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {mostOrdered.map((cosmetic) => (
                        <CosmeticCard 
                        
                        key={cosmetic.id}
                        cosmetic={cosmetic} />

                    ))}
                </div>
            }


        </>
    )
}

export default Dashboard