import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ product }) => {

    // Redux dispatch function
    const dispatch = useDispatch();

    // Add selected product to the cart
    function handleAddToCart(e) {
        // Prevent navigation when the button is clicked
        e.preventDefault();
        e.stopPropagation();

        dispatch(addToCart(product));
    }

    return (
        <div className="border border-gray-400 rounded-lg p-4 space-y-2 flex flex-col justify-between transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0px_12px_20px_-8px_rgba(0,0,0,0.2)] cursor-pointer ">

            {/* Navigate to product details page */}
            <Link
                key={product.id}
                to={`/product/${product.id}`}
            >
                {/* Product image */}
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-48 object-contain hover:scale-110 transition-all duration-300 ease-in-out"
                />

                {/* Product title */}
                <h3 className="text-md md:text-lg font-semibold">
                    {product.title}
                </h3>

                {/* Product price */}
                <div className="flex justify-between items-center font-semibold">
                    <span className="text-lg">Price:-</span>
                    <p>${product.price}</p>
                </div>

            </Link>

            {/* Add product to cart */}
            <button
                onClick={handleAddToCart}
                className="w-full py-2 rounded-lg outline-none border border-gray-400 hover:bg-gray-200 cursor-pointer"
            >
                Add To Cart
            </button>

        </div>
    );
};

export default ProductCard;