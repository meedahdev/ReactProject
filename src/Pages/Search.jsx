import { useContext, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import CosmeticCard from "../Components/CosmeticCardTwo"
import { SearchCosmetic } from "../Services/Products"
import { FaSearch } from "react-icons/fa"
import { SearchContext } from "../Context/SeachContext"

function Search() {

    const { q } = useContext(SearchContext)

    const [quickSearch, setQuickSearch] = useState("")

    const [searched, setSearched] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getSearched()
    }, [q])

    const getSearched = async () => {
        setLoading(true)
        const data = await SearchCosmetic(q)
        setSearched(data)
        setLoading(false)
    }

    const handleChange = async (e) => {
        setQuickSearch(e.target.value)
        setLoading(true)
        const data = await SearchCosmetic(quickSearch)
        setSearched(data)
        setLoading(false)
    }

    return (
        <>
            <h1 className="text-4xl text-pink-500 font-bold">Search</h1>
            <div className="bg-black flex gap-2 border border-[#D4AF37] rounded-2xl px-4 items-center flex-1 mt-4">
                <FaSearch className="text-[#D4AF37]" />
                <form className="flex flex-1" >
                    <input value={quickSearch} onChange={handleChange} type="text" placeholder="Search cosmetic......" className="bg-transparent text-white placeholder-gray-400 outline-none py-2 flex-1" />
                </form>
            </div>

            {loading &&
                <div className="flex items-center justify-center min-h-screen">
                    <div className="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
                </div>
            }
            {
                searched.length > 0 &&
                <div className="space-y-4 mt-6">
                    {searched.map((cosmetic) => (
                        <CosmeticCard cosmetic={cosmetic} />
                    ))}
                </div>
            }
            {!loading && searched.length == 0 &&
                <div>
                    <h1 className="text-pink-500 text-xl font-semibold">No cosmetic available</h1>
                </div>
            }


        </>
    )
}

export default Search