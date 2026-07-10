import Hero from "../components/Hero";
import FeaturedProducts from '../components/FeaturedProducts'
import useProducts from "../hooks/useProducts";
import { useSelector } from "react-redux";

const Home = () => {
  const { products, loading, error } = useProducts();

  const searchText = useSelector((state) =>
    state.search.searchText);


  const filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  if (loading) {
    return <h1 className="text-center mt-10">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-center mt-10 text-red-500">{error}</h1>;
  }

  return (
    <>
      <Hero />
      <FeaturedProducts products={filteredProducts} />
    </>
  );
};

export default Home;