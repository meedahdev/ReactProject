import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import "../Styles/Login.css"

function Login() {
    const inputStyle = "placeholder:text-md focus:outline-hidden p-2 border rounded-md"

    const { Login, loading, setLoginForm, loginForm } = useContext(AuthContext)

    const handleChange = (e) => {
        setLoginForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    
    return (
        <>
            <div className="first-div h-screen flex items-center justify-items-center">
                <div className="bg-white w-md m-auto rounded-md p-6">
                    <h1 className="text-3xl mb-4 text-center ">Login</h1>
                    <form onSubmit={Login}>
                        <div className="flex flex-col mb-4">
                            <label className="text-md mb-1">Username</label>
                            <input type="text" onChange={handleChange} value={loginForm.username} name="username" placeholder="John Doe" className={inputStyle} />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label className="text-md mb-1">Email</label>
                           <input type="email" name="email" value={loginForm.email} onChange={handleChange} placeholder="example@gmail.com" className={inputStyle} />
                        </div>

                        <button disabled={loading ? true : false} className="first-div w-full text-white p-2 rounded-md mb-2">{loading ? "Signing in..." : "Login"}</button>
                    </form>
                    <p className="text-center">Does not have an Account <Link to="/signup" className="text-[blue]">Signup</Link></p>
                </div>
            </div>
        </>
    )
}

export default Login