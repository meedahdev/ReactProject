import { useContext } from "react";
import { BiBook, BiCartAdd, BiLogOut } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Popup from "./Popup";
import { HiHeart, HiHome } from "react-icons/hi";
import { CgProductHunt } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import "../Styles/Login.css"

function Sidebar() {
    const navStyle = "flex items-center gap-4 block py-3 px-6 hover:bg-white/50 rounded text-xl"
    const activeNavStyle = "flex items-center gap-4 block py-3 px-6 bg-white/50 rounded text-xl"
    const path = useLocation()

    const { askLogout, setAskLogout } = useContext(AuthContext)

    return (
        <>
            <div className="first-div flex flex-col p-4 h-screen w-3xs">
                <h1 className="text-white text-5xl">✨ Meedah's Beauty Haven </h1>

                <div className="mt-6 space-y-2 ">
                    <Link className={`${path.pathname}` == "/" ? `${activeNavStyle}` : `${navStyle}`} to="/"><HiHome />Home</Link>
                    <Link className={`${path.pathname}` == "/products" ? `${activeNavStyle}` : `${navStyle}`} to="/products"><CgProductHunt />Products</Link>
                    <Link className={`${path.pathname}` == "/cart" ? `${activeNavStyle}` : `${navStyle}`} to="/cart"><BiCartAdd />Cart</Link>
                    <Link className={`${path.pathname}` == "/my-order" ? `${activeNavStyle}` : `${navStyle}`} to="/my-order"><BiBook /> My Orders</Link>
                    <Link className={`${path.pathname}` == "/favourites" ? `${activeNavStyle}` : `${navStyle}`} to="/favourites"><HiHeart />Favorites</Link>
                </div>

                <div className="mt-auto flex flex-col gap-4">
                    <Link className={`${path.pathname}` == "/favourites" ? `${activeNavStyle}` : `${navStyle}`} to="/settings"><FiSettings /> Settings</Link>
                    <button onClick={() => setAskLogout(true)} className={`${activeNavStyle} w-full text-left`} ><BiLogOut />Logout</button>
                </div>
            </div>

            {askLogout && <Popup />}
        </>
    )
}

export default Sidebar