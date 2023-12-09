import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      imageUrl: 'https://cdn11.bigcommerce.com/s-bp9oll2/images/stencil/500x800/products/193/793/Type-A-Espresso-Blend-Coffee__20579.1632345197.jpg?c=2',
      title: 'Shoes 1',
      description: 'If a dog chews shoes whose shoes does he choose?',
    },
    {
      imageUrl: 'https://m.media-amazon.com/images/I/41pcnQsuUcL._SX300_SY300_QL70_FMwebp_.jpg',
      title: 'Shoes 2',
      description: 'If a dog chews shoes whose shoes does he choose?',
    },
    {
      imageUrl: 'https://m.media-amazon.com/images/I/41pcnQsuUcL._SX300_SY300_QL70_FMwebp_.jpg',
      title: 'Shoes 2',
      description: 'If a dog chews shoes whose shoes does he choose?',
    },
    {
      imageUrl: 'https://cdn11.bigcommerce.com/s-bp9oll2/images/stencil/500x800/products/193/793/Type-A-Espresso-Blend-Coffee__20579.1632345197.jpg?c=2',
      title: 'Shoes 1',
      description: 'If a dog chews shoes whose shoes does he choose?',
    },
  ]);

  return (
    <div className="flex justify-center flex-wrap">
      {products.map((product, index) => (
        <div key={index} className="card card-compact w-96 bg-base-100 shadow-xl m-4">
          <figure>
            <img src={product.imageUrl} alt={product.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
              <Link to ="/cart">
              <button className="btn btn-primary">Buy Now</button>
              </Link>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
