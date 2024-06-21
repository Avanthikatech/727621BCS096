import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/test/companies';

const getProducts = async (company, category, top, minPrice, maxPrice) => {
  const response = await axios.get(
    `${API_BASE_URL}/${company}/categories/${category}/products`,
    { params: { top, minPrice, maxPrice } }
  );
  return response.data;
};

export { getProducts };
