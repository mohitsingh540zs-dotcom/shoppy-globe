import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-5 py-20">

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

          <div className="flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
              alt="Shopping"
              className="rounded-xl shadow-2xl w-full max-w-md object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;