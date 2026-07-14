import { useContext, useState } from "react"
import { FaSearch, FaBars } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../Context/UserContext"
import { SearchContext } from "../Context/SeachContext"
import "../Styles/Login.css"

function Topbar({ setSidebarOpen }) {
    const nav = useNavigate()
    const { q } = useContext(SearchContext)

    const [search, setSearch] = useState(q || "")

    const { currentUser } = useContext(UserContext)


    const SearchCosmetic = (e) => {
        e.preventDefault()
        if (search) {
            nav(`/search?q=${search}`)
            return
        }
        nav("/search")
    }

    return (
        <>
           <div className="first-div flex gap-4 items-center p-4 w-full">
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setSidebarOpen(true)}
                >
                    <FaBars />
                </button>
                <div className="bg-white/50 flex gap-2 border border-white/80 rounded-full px-2 items-center w-full md:flex-1">
                    <FaSearch />
                    <form className="flex flex-1" onSubmit={SearchCosmetic}>
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="outline-hidden py-2 flex-1" />
                    </form>
                </div>

                <div className="flex items-center text-white gap-2">
                    <Link className="bg-white p-4 rounded-2xl"></Link>
                    <h1 className="text-sm md:text-lg">
                        {currentUser.username}
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Topbar