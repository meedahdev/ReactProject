import { useNavigate } from "react-router-dom"

function Hero() {
    const nav = useNavigate()

    return (
        <div
            className="relative rounded-xl min-h-[80vh] md:min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage:
                    "linear-gradient(to right, rgba(2,6,23,0.92), rgba(2,6,23,0.65)), url('https://images.unsplash.com/photo-1596462502278-27bfdc403348')",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 py-10 md:px-16 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* Left Side */}
                    <div className="text-center lg:text-left">

                        <span className="first-div inline-block px-4 py-2 rounded-full text-sm font-medium">
                            Fast Cosmetic Delivery
                        </span>

                        <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white">
                            Nice Glow Beauty
                            <br />
                            Delivered <span className="text-black">To You</span>
                        </h1>

                        <p className="mt-6 text-base md:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Discover premium beauty products and enhance your
                            natural glow with quality cosmetics delivered
                            straight to your doorstep.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={() => nav("/search")}
                                className="first-div text-white px-8 py-4 rounded-2xl font-semibold transition"
                            >
                                Search
                            </button>

                            <button
                                onClick={() => nav("/products")}
                                className="border border-white/30 hover:bg-white hover:text-black text-white px-8 py-4 rounded-2xl font-semibold transition"
                            >
                                Explore Products
                            </button>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="relative flex justify-center mt-8 lg:mt-0">

                        <div className="first-div absolute w-60 h-60 md:w-72 md:h-72 blur-3xl rounded-full"></div>

                        <div className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-6 w-full max-w-sm md:max-w-md shadow-2xl">

                            <img
                                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
                                alt="Beauty Product"
                                className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-2xl"
                            />

                            <div className="mt-5 flex items-center justify-between">

                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white">
                                        Perfume
                                    </h3>

                                    <p className="text-sm md:text-base text-slate-300 mt-1">
                                        Lip Gloss • Matte Lipstick • Beauty Essentials
                                    </p>
                                </div>

                                <span className="text-xl md:text-2xl font-bold text-black">
                                    $20
                                </span>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hero