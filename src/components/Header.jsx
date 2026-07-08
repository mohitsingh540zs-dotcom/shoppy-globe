import { NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-5 py-4">

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Row 1 */}
          <div className="flex items-center justify-between">
            <NavLink
              to="/"
              className="text-2xl font-bold text-blue-600"
            >
              ShoppyGlobe
            </NavLink>

            <NavLink to="/cart" className="relative">
              <ShoppingCart size={28} />
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                0
              </span>
            </NavLink>
          </div>

          {/* Row 2 */}
          <div className="mt-4">
            <SearchBar />
          </div>

          {/* Row 3 */}
          <nav className="mt-4 flex justify-center gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/checkout">Checkout</NavLink>
          </nav>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-[auto_auto_1fr_auto] md:items-center md:gap-8">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            ShoppyGlobe
          </NavLink>

          {/* Navigation */}
          <nav className="flex gap-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/checkout">Checkout</NavLink>
          </nav>

          {/* Search */}
          <SearchBar />

          {/* Cart */}
          <NavLink to="/cart" className="relative justify-self-end">
            <ShoppingCart size={28} />

            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              0
            </span>
          </NavLink>

        </div>
      </div>
    </header>
  );
};

export default Header;