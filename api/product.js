import { BASE_URL } from '@/constants/apiType';

const fetchProductsByFilter = async ({ column = 'id', sort = 'desc', limit = 10 } = {}) => {
  try {
    // Dùng URLSearchParams → tránh lỗi khi param rỗng hoặc undefined.
    const params = new URLSearchParams({ column, sort, limit });
    const response = await fetch(`${BASE_URL}/v1/products?${params.toString()}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return null; // hoặc [] tuỳ nhu cầu
  }
};

const getProductById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/v1/products/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    return null; // hoặc {} tuỳ nhu cầu
  }
}

export { fetchProductsByFilter, getProductById };
