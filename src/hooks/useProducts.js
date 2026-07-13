import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

const useProducts = () => {

    // Store all products
    const [products, setProducts] = useState([]);

    // Loading state while fetching data
    const [loading, setLoading] = useState(true);

    // Store API error message
    const [error, setError] = useState("");

    useEffect(() => {

        // Fetch products from the API
        const fetchProducts = async () => {
            try {
                const data = await getProducts();

                // Save the products array in state
                setProducts(data.products);

            } catch (err) {
                setError(err.message || "Something went wrong");

            } finally {
                // Stop loading once the request is complete
                setLoading(false);
            }
        };

        fetchProducts();

    }, []);

    // Expose data and request state
    return {
        products,
        loading,
        error,
    };
};

export default useProducts;