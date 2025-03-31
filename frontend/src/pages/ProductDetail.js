import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    
    fetchProductDetail();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Carregando detalhes do produto...</p>
      ) : (
        <div>
          <h1>{product.name}</h1>
          <img src={product.image_url} alt={product.name} />
          <p>{product.description}</p>
          <p>Preço: R$ {product.price}</p>
          <p>Categoria: {product.category.name}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
