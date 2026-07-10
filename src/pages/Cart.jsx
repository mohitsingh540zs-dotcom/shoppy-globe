import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { clearCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {

  const dispatch = useDispatch();

  // Get cart data from Redux
  const cart = useSelector((state) => state.cart.cart);

  // Total number of items
  const totalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  // Total price
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">

      {/* Back Button */}
      <Link
        to="/"
        className="text-blue-500 font-semibold"
      >
        ← Continue Shopping
      </Link>

      {/* Heading */}
      <h1 className="text-3xl font-bold my-6">
        Shopping Cart
      </h1>

      {
        cart.length === 0 ? (

          <div className="text-center py-20">
            <h2 className="text-2xl font-bold">
              Your Cart is Empty
            </h2>

            <Link
              to="/"
              className="inline-block mt-5 bg-blue-500 text-white px-6 py-3 rounded"
            >
              Shop Now
            </Link>
          </div>

        ) : (

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Left Side */}

            <div className="xl:h-[60vh] lg:col-span-2 space-y-5 overflow-y-auto">
              {
                cart.map((item) => (
                  <CartItem
                    key={item.id}
                    product={item}
                  />
                ))
              }

            </div>


            {/* Right Side */}

            <div className="border rounded-lg p-5 h-fit shadow">

              <h2 className="text-2xl font-bold mb-5">
                Order Summary
              </h2>

              <div className="flex justify-between mb-3">
                <span>Total Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between mb-5">
                <span>Total Price</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <div className='flex flex-col gap-2'>
                <Link to={'/checkout'}>
                  <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 cursor-pointer">
                    Checkout
                  </button>
                </Link>
                <button
                onClick={()=>dispatch(clearCart())} className='w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 cursor-pointer'>Clear Cart</button>
              </div>

            </div>

          </div>

        )
      }

    </div>
  );
};

export default Cart;