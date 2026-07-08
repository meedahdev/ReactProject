import { useContext, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import "../Styles/Login.css"

function Signup() {
    const inputStyle = "placeholder:text-md focus:outline-hidden p-2 border rounded-md"

    const { loading, signupForm, setSignupForm, createAccount } = useContext(AuthContext)

    const handleChange = (e) => {
        setSignupForm((inputs) => ({ ...inputs, [e.target.name]: e.target.value }))
    }

    return (
        <>
            <div className="first-div h-screen flex items-center justify-items-center">
                <div className="bg-white w-md m-auto rounded-md p-6">
                    <h1 className="text-3xl mb-4 text-center">Create Account</h1>
                    <form onSubmit={createAccount}>
                        <div className="flex flex-col mb-4">
                            <label className="text-md mb-1">Username</label>
                            <input type="text" name="username" value={signupForm.username} onChange={handleChange} placeholder="John Doe" className={inputStyle} />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label className="text-md mb-1">Email</label>
                            <input type="text" name="email" placeholder="example@gmail.com" className={inputStyle} />
                        </div>


                        <button disabled={loading ? true : false} className="first-div w-full text-white p-2 rounded-md mb-2">{loading ? "Creating Account..." : "Signup"}</button>
                    </form>
                    <p className="text-center">Already have an Account <Link to="/login" className="text-[blue]">Login</Link></p>
                </div>
            </div>
        </>
    )
}

export default Signup