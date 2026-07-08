import { useNavigate } from "react-router-dom"

function Hero() {
    const nav = useNavigate()

    return (
        <>
            <div className="relative rounded-xl min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "linear-gradient(to right, rgba(2, 6, 23, 0.92), rgba(2, 6, 23, 0.65)), url('https://images.unsplash.com/photo-1596462502278-27bfdc403348')"
                }}>
                <div className="max-w-7xl mx-auto p-6 md:px-16 w-full">

                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        <div>
                            <span className="first-div inline-block text-black-400 px-4 py-2 rounded-full text-sm font-medium">
                                 Fast Cosmetic Delivery
                            </span>

                            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight text-white">
                                Nice Glow Beauty <br />
                                Delivered <span className="text-black">To You</span>
                            </h1>

                            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
                              Discover premium beauty products and enhance your natural glow 
                              with quality cosmetics delivered to your doorstep.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <button onClick={() => nav("/search")} className="first-div hover:bg-black-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition">
                                    Search
                                </button>

                                <button onClick={() => nav("/menu")} className="border border-white/30 hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition">
                                    Explore Menu
                                </button>
                            </div>
                        </div>

                        <div className="relative flex justify-center">
                            <div className="absolute w-72 h-72 bg-orange-500/30 blur-3xl rounded-full"></div>
                            <div className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 w-full max-w-md shadow-2xl">

                                <img
                                    src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
                                    alt="Face Powder"
                                    className="w-full h-72 object-cover rounded-2xl"
                                />

                                <div className="mt-5 flex items-center justify-between">

                                    <div>
                                        <h3 className="text-2xl font-bold text-white">
                                            Perfume
                                        </h3>

                                        <p className="text-slate-300 mt-1">
                                            Lip Gloss • Matte Lipstick • Beauty & Essentials
                                        </p>
                                    </div>

                                    <span className="text-black text-2xl font-bold">
                                        $20
                                    </span>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero