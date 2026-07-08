const BASE_URL = "https://dummyjson.com";

export const API = {
  PRODUCTS: `${BASE_URL}/products`,
  PRODUCT: (id) => `${BASE_URL}/products/${id}`,
};

// fetcher that helps to get the products data and send json as response and it's a exportable function
export async function getProducts() {
  const response = await fetch(API.PRODUCTS);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}