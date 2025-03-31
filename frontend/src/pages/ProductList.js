import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      let url = 'http://localhost:8000/api/products?';
      if (category) url += `category=${category}&`;
      if (searchQuery) url += `search=${searchQuery}`;
      
      try {
        const response = await axios.get(url);
        setProducts(response.data.data); 
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    
    fetchProducts();
  }, [category, searchQuery]);

  return (
    <div>
      <h1>Catálogo de Produtos</h1>

      {}
      <input 
        type="text" 
        placeholder="Buscar produtos"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="">Todas as Categorias</option>
        {}
        <option value="1">Eletrônicos</option>
        <option value="2">Roupas</option>
        <option value="3">Livros</option>
      </select>

      {loading ? (
        <p>Carregando produtos...</p>
      ) : (
        <div className="product-list">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
