import { useParams } from "react-router-dom"
import useProduct from "../hooks/useProduct";
import { Minus, Plus, Star } from "lucide-react";
import { useState } from "react";


const ProductDetails = () => {
  const [count, setCount] = useState(1);

  const { id } = useParams();
  const { product, loading, error } = useProduct(id);

  if (loading) {
    return <h1>Loading....</h1>
  }

  if (error) {
    return <h1>Error</h1>
  }

  // incrementer of quantity
  function handleIncrement() {
    if (count >= product.stock) return;

    setCount(count + 1);
  }

  // decrementer of quantity
  function handleDecrement() {
    if (count == 1) return;

    setCount(count - 1);
  }
  return (
    <div className='max-w-7xl w-full mx-auto p-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
        <div className='flex justify-center items-center'>
          <img src={product.thumbnail} alt={product.title} className='w-full max-w-md object-contain border border-gray-400 rounded-xl' />
        </div>

        <div className='flex flex-col justify-between gap-4 p-4'>
          <h1 className='text-2xl md:text-4xl font-bold'>{product.title}</h1>
          <div className='flex justify-between items-center text-xl md:text-2xl'>
            <span>$ {product.price}</span>
            <span className='flex items-center gap-2'> <Star /> {product.rating}</span>
          </div>
          <p className='text-lg md:text-xl'>{product.description}</p>
          <div className='flex justify-between items-center'>

            <div className='flex justify-between gap-2'>
              <div className='flex gap-2 items-center border-2'>

                <button
                  disabled={count == 1}
                  onClick={handleDecrement}
                  className="p-3 hover:bg-gray-100"
                >
                  <Minus size={18} />
                </button>

                <span>{count}</span>

                <button
                  disabled={count === product.stock}
                  onClick={handleIncrement}
                  className="p-3 hover:bg-gray-100"
                >
                  <Plus size={18} />
                </button>
              </div>


              <button className='bg-blue-400 text-white font-bold px-10 py-4 cursor-pointer hover:bg-blue-500'>
                Add to Cart
              </button>
            </div>

            <p className='text-lg md:text-xl font-bold'>Stock: {product.stock} </p>
          </div>

        </div>
      </div>
    </div>
  )

}

export default ProductDetails