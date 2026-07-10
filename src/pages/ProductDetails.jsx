import { Link, useParams } from "react-router-dom"
import useProduct from "../hooks/useProduct";
import { ArrowLeft, Minus, Plus, Star } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";


const ProductDetails = () => {
  const [count, setCount] = useState(1);

  const { id } = useParams();
  const { product, loading, error } = useProduct(id);
  const dispatch = useDispatch();


  if (loading) {
    return <h1>Loading....</h1>
  }

  if (error) {
    return <h1>Error</h1>
  }

  // incrementer of quantity
  function handleIncrement() {
    if (count >= product.stock) return;

    setCount((prev) => prev + 1);
  }

  // decrementer of quantity
  function handleDecrement() {
    if (count == 1) return;

    setCount((prev) => prev - 1);
  }

  function handleAddToCart() {
    dispatch(addToCart(product));
  }
  return (
    <div className='px-6'>
      <div className='relative max-w-7xl w-full mx-auto my-12 px-6 py-12 shadow-xl rounded-2xl'>
        <Link to={'/'} className='absolute -top-8 -left-1 flex items-center gap-2'>
          <ArrowLeft /> Go back to Home
        </Link>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6 '>
          <div className='flex justify-center items-center'>
            <img src={product.thumbnail} alt={product.title} className="w-full max-w-md aspect-square object-contain rounded-xl bg-gray-100 p-8" />
          </div>

          <div className='flex flex-col justify-between gap-4 p-4'>
            <h1 className='text-2xl md:text-4xl font-bold'>{product.title}</h1>
            <div className='flex justify-between items-center text-xl md:text-2xl'>
              <span>Price: $ {product.price}</span>
              <span className='flex items-center gap-2'> Rating: <Star /> {product.rating}</span>
            </div>
            <p className='text-lg md:text-xl max-w-xl leading-8 text-gray-600'>{product.description}</p>
            <div className='flex justify-between items-center'>

              <div className='flex flex-col md:flex-row justify-between gap-2'>
                <div className='flex gap-2 justify-between items-center border overflow-hidden'>

                  <button
                    disabled={count === 1}
                    onClick={handleDecrement}
                    className={`h-full p-3 ${count === 1
                      ? "cursor-not-allowed opacity-50"
                      : "hover:bg-gray-100 cursor-pointer"
                      }`}
                  >
                    <Minus size={18} />
                  </button>

                  <span>{count}</span>

                  <button
                    disabled={count === product.stock}
                    onClick={handleIncrement}
                    className={`h-full p-3 ${count === product.stock
                      ? "cursor-not-allowed opacity-50"
                      : "hover:bg-gray-100 cursor-pointer"
                      }`}
                  >
                    <Plus size={18} />
                  </button>
                </div>


                <button onClick={handleAddToCart} className='bg-blue-400 text-white font-bold px-10 py-4 cursor-pointer hover:bg-blue-500'>
                  Add to Cart
                </button>
              </div>

              <p className='text-lg md:text-xl font-bold'>Stock: {product.stock} </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )

}

export default ProductDetails