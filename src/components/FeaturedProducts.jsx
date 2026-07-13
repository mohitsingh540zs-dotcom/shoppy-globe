import ProductCard from "./ProductCard";

const FeaturedProducts = ({ products }) => {
    return (
        <section className="max-w-7xl mx-auto px-5 py-12">

            {/* Section heading */}
            <h2 className="text-3xl font-bold mb-8">
                Featured Products
            </h2>

            {/* Responsive product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Render a ProductCard for each product */}
                {products.map((product) => (
                    <ProductCard
                        key={product.id} // Unique key for React
                        product={product} // Pass product data as props
                    />
                ))}

            </div>

        </section>
    );
};

export default FeaturedProducts;