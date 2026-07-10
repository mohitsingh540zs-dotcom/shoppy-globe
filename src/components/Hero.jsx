import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
    const images = [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prev => (prev + 1) % images.length);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 px-4">
            <div className="max-w-7xl mx-auto px-5 py-20 bg-black/20 rounded-xl">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left */}

                    <div>

                        <span className="bg-blue-500 px-4 py-2 rounded-full text-sm">
                            New Collection 2026
                        </span>

                        <h1 className="text-5xl font-bold mt-6 leading-tight">
                            Shop Smarter,
                            <br />
                            Live Better.
                        </h1>

                        <p className="mt-6 text-lg text-blue-100">
                            Discover thousands of quality products with
                            unbeatable prices and fast delivery.
                        </p>

                        <div className="flex gap-4 mt-8">

                            <button
                                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-100 transition"
                            >
                                Shop Now

                                <ArrowRight size={18} />

                            </button>

                            <button
                                className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
                            >
                                Browse Products
                            </button>

                        </div>

                    </div>

                    {/* Right */}

                    <div className="flex justify-center cursor-pointer">

                        <img
                            src={images[currentImage]}
                            alt="Shopping"
                            className="rounded-xl shadow-2xl w-full max-w-lg h-72 object-cover transition-all duration-300 ease-in-out hover:scale-110"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;