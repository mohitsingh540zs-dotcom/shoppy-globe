import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import useProducts from "../hooks/useProducts";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";

const Home = () => {

  // Fetch all products
  const { products, loading, error } = useProducts();

  // Get search text from Redux store
  const searchText = useSelector((state) =>
    state.search.searchText
  );

  // Filter products based on search input
  const filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  // Show loader while products are being fetched
  if (loading) {
    return <Loader />;
  }

  // Show error message if API request fails
  if (error) {
    return <h1 className="text-center mt-10 text-red-500">{error}</h1>;
  }

  return (
    <>
      {/* Hero section */}
      <Hero />

      {/* Display filtered products */}
      <FeaturedProducts products={filteredProducts} />
    </>
  );
};

export default Home;