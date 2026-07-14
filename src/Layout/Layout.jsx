import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import { useContext, useState } from "react"
import { AuthContext } from "../Context/AuthContext"
import Popup from "./Popup"
import Footer from "./Footer"
import { ThemeContext } from "../Context/ThemeContext"

function Layout() {
    const { darkMode } = useContext(ThemeContext)
    const { askLogout } = useContext(AuthContext)

    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <div
                className={`flex h-screen ${
                    darkMode
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-black"
                }`}
            >
                {/* Sidebar */}
                <Sidebar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />

                {/* Mobile Overlay */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Main Section */}
                <div className="flex flex-col flex-1 md:ml-64">

                    {/* Fixed Topbar */}
                    <div className="sticky top-0 z-30">
                        <Topbar setSidebarOpen={setSidebarOpen} />
                    </div>

                    {/* Scrollable Content */}
                    <main
                        className={`flex-1 overflow-y-auto ${
                            darkMode
                                ? "bg-gray-900"
                                : "bg-gray-50"
                        }`}
                    >
                        <div className="p-4">
                            <Outlet />
                        </div>

                        <Footer />
                    </main>
                </div>
            </div>

            {/* Logout Popup */}
            {askLogout && <Popup />}
        </>
    )
}

export default Layout