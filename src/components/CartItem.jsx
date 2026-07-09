const CartItem = ({ product }) => {

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

      </div>

    </div>

  );
};

export default CartItem;