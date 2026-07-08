import useProducts from "../hooks/useProducts";

const Home = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <p>{product.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;