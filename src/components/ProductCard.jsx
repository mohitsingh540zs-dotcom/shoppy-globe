const ProductCard = ({ product }) => {
    return (
        <div className="border rounded-lg p-4 space-y-2 flex flex-col justify-between transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0px_12px_20px_-8px_rgba(0,0,0,0.2)] cursor-pointer ">
            <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover hover:scale-110 transition-all duration-300 ease-in-out"
            />

            <h3 className='text-md md:text-lg font-semibold'>{product.title}</h3>

            <div className='flex justify-between items-center font-semibold'>
                <span className='text-lg  '>Price:-</span>
                <p>${product.price}</p>
            </div>

            <button className="w-full py-2 rounded-lg outline-none border border-gray-300 hover:bg-gray-100 cursor-pointer">Add To Cart</button>
        </div>
    );
};

export default ProductCard;