import Hero from "../components/Hero";
import useProducts from "../hooks/useProducts";

const Home = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <h1 className="text-center mt-10">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-center mt-10 text-red-500">{error}</h1>;
  }

  return (
    <>
      <Hero />

    </>
  );
};

export default Home;