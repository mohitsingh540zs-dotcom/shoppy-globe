import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

const useProducts = () => {
    // Stores the fetched products
    const [products, setProducts] = useState([]);

    // Tracks loading state
    const [loading, setLoading] = useState(true);

    // Stores any error message
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // API call
                const data = await getProducts();

                // DummyJSON returns data set in setProducts
                setProducts(data.products);
            } catch (err) {
                setError(err.message || "Something went wrong");
            } finally {
                // Runs everytime if request succeeds or fails
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return {
        products,
        loading,
        error,
    };
};

export default useProducts;