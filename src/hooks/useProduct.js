import { useEffect, useState } from "react"
import { getProductById } from "../services/api";

const useProduct = (id) => {

    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProductById = async () => {
            try {
                const data = await getProductById(id);

                setProduct(data);
            } catch (err) {
                setError(err.message || "Something went wrong");
            }
            finally {
                setLoading(false);
            }
        }
        if (id) {
            fetchProductById();
        }

    }, [id]);

    return (
        {
            product,
            loading,
            error
        }
    )
}

export default useProduct