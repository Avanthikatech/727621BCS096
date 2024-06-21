import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    company: 'AMZ',
    category: 'Laptop',
    top: 10,
    minPrice: 1,
    maxPrice: 10000,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts(
        filters.company,
        filters.category,
        filters.top,
        filters.minPrice,
        filters.maxPrice
      );
      setProducts(products);
    };
    fetchProducts();
  }, [filters]);

  return (
    <div>
      <Filters filters={filters} setFilters={setFilters} />
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
