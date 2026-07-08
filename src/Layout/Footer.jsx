import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="bg-slate-950 text-slate-300 border-t border-white/10">
                <div className="  px-6 md:px-6 py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div>
                            <h2 className="text-3xl font-extrabold text-black-400">
                               Meedah's Beauty Haven
                            </h2>

                            <p className="mt-5 leading-relaxed text-slate-400">
                              Discover premium beauty products and enhance your natural glow 
                              with quality cosmetics delivered to your doorstep.
                            </p>

                            <div className="flex gap-4 mt-6">
                                <Link
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-black flex items-center justify-center transition">
                                    <FaTiktok />
                                </Link>

                                <Link
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-black  flex items-center justify-center transition">
                                    <FaInstagram />
                                </Link>

                                <Link
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-black flex items-center justify-center transition">
                                    <FaTwitter />
                                </Link>

                            </div>
                        </div>


                        <div>
                            <h3 className="text-xl font-bold text-white mb-5">
                                Quick Links
                            </h3>

                            <ul className="space-y-3">

                                <li>
                                    <Link className="hover:text-black transition">
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link className="hover:text-black transition">
                                       Products
                                    </Link>
                                </li>

                                <li>
                                    <Link className="hover:text-black transition">
                                        Cosmetic Shop
                                    </Link>
                                </li>

                                <li>
                                    <Link className="hover:text-black transition">
                                        Offers
                                    </Link>
                                </li>

                            </ul>
                        </div>


                        <div>
                            <h3 className="text-xl font-bold text-white mb-5">
                                Support
                            </h3>

                            <ul className="space-y-3">

                                <li>
                                    <Link className="hover:text-black transition">
                                        Help Center
                                    </Link>
                                </li>

                                <li>
                                    <Link className="hover:text-black transition">
                                        Terms of Service
                                    </Link>
                                </li>

                                <li>
                                    <Link className="hover:text-black transition">
                                        Privacy Policy
                                    </Link>
                                </li>

                                <li>
                                    <Link className="hover:text-black transition">
                                        Contact Us
                                    </Link>
                                </li>

                            </ul>
                        </div>


                        <div>
                            <h3 className="text-xl font-bold text-white mb-5">
                                Subscribe
                            </h3>

                            <p className="text-slate-400 mb-5">
                                Get updates on new dishes and exclusive offers.
                            </p>

                            <form className="flex flex-col gap-4">

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 text-white"
                                />

                                <button
                                    className="first-div hover:bg-black-600 text-white py-3 rounded-xl font-semibold transition"
                                >
                                    Subscribe
                                </button>

                            </form>
                        </div>

                    </div>


                    <div
                        className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500"
                    >

                        <p>
                            © 2026 Meedah's Beauty Haven. All rights reserved.
                        </p>

                        <div className="flex gap-6">

                            <Link className="hover:text-black transition">
                                Privacy
                            </Link>

                            <Link className="hover:text-black transition">
                                Terms
                            </Link>

                            <Link className="hover:text-black transition">
                                Cookies
                            </Link>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer