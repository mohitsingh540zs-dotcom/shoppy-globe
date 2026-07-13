import { useEffect, useState } from "react";
import { getProductById } from "../services/api";

const useProduct = (id) => {

    // Store product details
    const [product, setProduct] = useState(null);

    // Track loading state while fetching data
    const [loading, setLoading] = useState(true);

    // Store error message if API call fails
    const [error, setError] = useState("");

    useEffect(() => {

        // Fetch product details using the product id
        const fetchProductById = async () => {
            try {
                const data = await getProductById(id);

                setProduct(data);

            } catch (err) {
                setError(err.message || "Something went wrong");

            } finally {
                setLoading(false);
            }
        };

        // Call API only when id is available
        if (id) {
            fetchProductById();
        }

    }, [id]);

    // Return data and request state
    return {
        product,
        loading,
        error,
    };
};

export default useProduct;