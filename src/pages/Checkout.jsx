import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { clearCart } from "../redux/cartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart.cart);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  // Total Items
  const totalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  // Total Price
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handlePlaceOrder(e) {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    dispatch(clearCart());

    navigate("/success");
  }

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">

      <Link
        to="/cart"
        className="flex items-center gap-2 text-blue-500 mb-8"
      >
        <ArrowLeft size={20} />
        Back to Cart
      </Link>

      <h1 className="text-4xl font-bold mb-8">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left Side */}

        <form
          onSubmit={handlePlaceOrder}
          className="border rounded-lg shadow p-6 space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-3"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-3"
          />

          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border rounded px-4 py-3"
          />

          <div className="grid grid-cols-2 gap-4">

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className="border rounded px-4 py-3"
            />

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
              className="border rounded px-4 py-3"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 cursor-pointer"
          >
            Place Order
          </button>

        </form>

        {/* Right Side */}

        <div className="border rounded-lg shadow p-6 h-fit">

          <h2 className="text-2xl font-bold mb-5">
            Order Summary
          </h2>

          <div className="flex justify-between mb-3">
            <span>Total Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Total Price</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <hr className="my-5" />

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between mb-3"
            >
              <span>
                {item.title} × {item.quantity}
              </span>

              <span>
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Checkout;