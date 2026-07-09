import ProductCard from "./ProductCard"

const FeaturedProducts = ({ products }) => {
    return (
        <section className="max-w-7xl mx-auto px-5 py-12">
            <h2 className="text-3xl font-bold mb-8">Featured Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    // to provide a link to particular product

                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </section>
    )
}

export default FeaturedProducts




