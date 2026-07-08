const Footer = () => {
    return (
        <footer className="border-gray-300 bg-black border-t-2 w-full py-12">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">

                    {/* Brand */}
                    <div className="space-y-3">
                        <h2 className="font-bold text-3xl text-white">Shoppy Globe</h2>
                        <p className="text-gray-300 text-sm">
                            Your one-stop destination for trendy and premium products.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold text-lg text-white mb-3">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li className="hover:text-white cursor-pointer">Home</li>
                            <li className="hover:text-white cursor-pointer">Cart</li>
                            <li className="hover:text-white cursor-pointer">Checkout</li>
                        </ul>
                    </div>

                    {/* Policies */}
                    <div>
                        <h3 className="font-semibold text-lg text-white mb-3">
                            Policies
                        </h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
                            <li className="hover:text-white cursor-pointer">Return Policy</li>
                            <li className="hover:text-white cursor-pointer">Shipping Policy</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-lg text-white mb-3">
                            Contact Us
                        </h3>
                        <p className="text-gray-300 text-sm">
                            +91 98765 43210
                        </p>
                        <p className="text-gray-300 text-sm mt-1">
                            support@shoppyglobe.com
                        </p>
                    </div>

                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/20 my-6"></div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-3">
                    <p>© {new Date().getFullYear()} ShoppyGlobe. All rights reserved.</p>
                    <p>Made with using MERN Stack.</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer