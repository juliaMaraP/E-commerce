import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image_url} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>R$ {product.price}</p>
      <Link to={`/product/${product.id}`}>Ver Detalhes</Link>
    </div>
  );
};

export default ProductCard;
