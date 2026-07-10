import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import {increaseQuantity, decreaseQuantity, removeFromCart} from '../redux/cartSlice'

const CartItem = ({ product }) => {

    const dispatch = useDispatch();

    return (

        <div className="flex gap-5 border rounded-lg p-4 shadow">

            {/* Product Image */}

            <img
                src={product.thumbnail}
                alt={product.title}
                className="w-28 h-28 object-contain"
            />

            {/* Product Info */}

            <div className="flex-1">

                <h2 className="text-xl font-semibold">
                    {product.title}
                </h2>

                <p className="mt-2">
                    Price : ${product.price}
                </p>

                <p className="mt-2">
                    Quantity : {product.quantity}
                </p>

                <p className="mt-2 font-bold">
                    Total : ${(product.price * product.quantity).toFixed(2)}
                </p>

                <div className="flex items-center gap-4 mt-5">

                    <button
                        disabled={product.quantity === 1}
                        onClick={() => dispatch(decreaseQuantity(product.id))}
                        className="border rounded p-2 disabled:opacity-40"
                    >
                        <Minus size={18} />
                    </button>

                    <span className="font-bold text-lg">
                        {product.quantity}
                    </span>

                    <button
                        onClick={() => dispatch(increaseQuantity(product.id))}
                        className="border rounded p-2"
                    >
                        <Plus size={18} />
                    </button>

                </div>

                {/* Remove */}

                <button
                    onClick={() => dispatch(removeFromCart(product.id))}
                    className="flex items-center gap-2 mt-5 text-red-500 hover:text-red-700"
                >
                    <Trash2 size={18} />

                    Remove
                </button>

            </div>

        </div>

    );
};

export default CartItem;