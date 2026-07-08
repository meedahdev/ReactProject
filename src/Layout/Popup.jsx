import { useContext, useState } from "react"
import { BsQuestionCircle } from "react-icons/bs"
import { AuthContext } from "../Context/AuthContext"

function Popup() {
    const { askLogout, setAskLogout, logout } = useContext(AuthContext)

    return (
        <>
            {
                <div className="flex justify-center items-center bg-black/50  w-full h-full fixed top-0 z-10000">
                    <div className="bg-white rounded-xl p-6 w-72 space-y-4 ">
                        <BsQuestionCircle className="mx-auto text-3xl" />
                        <h1 className="text-2xl text-center">Are you sure you want to logout</h1>
                        <div className="flex justify-between">
                            <button onClick={() => setAskLogout(false)} className="bg-black hover:bg-lilac-400 text-white px-4 py-2 rounded-xl font-semibold text-lg transition" >cancel</button>
                            <button onClick={logout} className="bg-black hover:bg-lilac-400 px-4 py-2 rounded-xl text-white font-semibold text-lg transition">logout</button>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default Popup