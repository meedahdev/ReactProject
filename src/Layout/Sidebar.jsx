import { useContext } from "react"
import { BiBook, BiCartAdd, BiHistory, BiLogOut, BiTask } from "react-icons/bi"
import { Link, useLocation } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import Popup from "./Popup"
import { HiHeart, HiHome } from "react-icons/hi"
import { CgProductHunt } from "react-icons/cg"
import { FiSettings } from "react-icons/fi"
import "../Styles/Login.css"

function Sidebar({ sidebarOpen, setSidebarOpen }) {
    const navStyle = "flex items-center justify-center md:justify-start gap-4 py-3 px-3 md:px-6 hover:bg-white/50 rounded text-sm md:text-base"

    const activeNavStyle = "flex items-center justify-center md:justify-start gap-4 py-3 px-3 md:px-6 bg-white/50 rounded text-sm md:text-base"

    const path = useLocation();

    const { askLogout, setAskLogout } = useContext(AuthContext);

    return (
        <>
            <div className={`first-div fixed md:fixed top-0 left-0 h-screen z-50 flex flex-col p-4 w-64 transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`} >


                {/* Logo */}
                <h1 className="text-white text-center font-bold text-xl md:text-3xl mb-6">
                    ✨
                    <span className="hidden md:inline">
                        {" "}Meedah's Beauty Haven
                    </span>
                </h1>

                {/* Navigation */}
                <div className="space-y-2">

                    <Link className={path.pathname === "/" ? activeNavStyle : navStyle} to="/" onClick={() => setSidebarOpen(false)}  > <HiHome size={22} /> <span className="hidden md:inline">Home</span> </Link>

                    <Link className={path.pathname === "/products" ? activeNavStyle : navStyle} to="/products" onClick={() => setSidebarOpen(false)} > <CgProductHunt size={22} /> <span className="hidden md:inline">Products</span> </Link>

                    <Link className={path.pathname === "/cart" ? activeNavStyle : navStyle} to="/cart" onClick={() => setSidebarOpen(false)} > <BiCartAdd size={22} /> <span className="hidden md:inline">Cart</span> </Link>

                    <Link className={path.pathname === "/my-order" ? activeNavStyle : navStyle} to="/my-order" onClick={() => setSidebarOpen(false)} > <BiBook size={22} /> <span className="hidden md:inline">My Orders</span> </Link>

                    <Link className={path.pathname === "/orders" ? activeNavStyle : navStyle} to="/orders" onClick={() => setSidebarOpen(false)} > <BiHistory size={22} /> <span className="hidden md:inline">Order History</span> </Link>

                    <Link className={path.pathname === "/manage-orders" ? activeNavStyle : navStyle} to="/manage-orders" onClick={() => setSidebarOpen(false)} > <BiTask size={22} /> <span className="hidden md:inline">Manage Orders</span> </Link>

                    <Link className={path.pathname === "/favorites" ? activeNavStyle : navStyle} to="/favorites" onClick={() => setSidebarOpen(false)} > <HiHeart size={22} /> <span className="hidden md:inline">Favorites</span> </Link>

                </div>

                {/* Bottom Buttons */}
                <div className="mt-auto space-y-2">

                    <Link className={path.pathname === "/settings" ? activeNavStyle : navStyle} to="/settings" onClick={() => setSidebarOpen(false)} > <FiSettings size={22} /> <span className="hidden md:inline">Settings</span> </Link>

                    <button onClick={() => { setSidebarOpen(false); setAskLogout(true) }} className={`${activeNavStyle} w-full`} > <BiLogOut size={22} /> <span className="hidden md:inline">Logout</span> </button>

                </div>
            </div>

            {askLogout && <Popup />}
        </>
    );
}

export default Sidebar