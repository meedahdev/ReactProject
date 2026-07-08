import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import Popup from "./Popup"
import Footer from "./Footer"

function Layout() {
    return (
        <>
            <div className="flex overflow-hidden">
                <Sidebar />

                <div className="flex flex-col flex-1 overflow-y-scroll h-screen">
                    <Topbar />
                    <div className="p-4 ">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout