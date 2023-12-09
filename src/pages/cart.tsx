import React, { useState } from 'react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: 'https://cdn11.bigcommerce.com/s-bp9oll2/images/stencil/500x800/products/193/793/Type-A-Espresso-Blend-Coffee__20579.1632345197.jpg?c=2',
      price: 20,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: 'https://m.media-amazon.com/images/I/41pcnQsuUcL._SX300_SY300_QL70_FMwebp_.jpg',
      price: 30,
      quantity: 1,
    },
  ]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <div className="container mx-auto mt-3">
      <h2 className="text-2xl font-bold mb-4">Your Shopping Cart</h2>
      <ul className="card">
        {cartItems.map((item) => (
          <li key={item.id} className="card-body flex items-center justify-between py-6 bg-slate-300">
            <div className="flex items-center space-x-4">
              <img src={item.img} alt={item.name} className="w-24 h-24 object-cover rounded" />
              <div>
                <span className="font-bold">{item.name}</span>
                <p className="text-gray-600">{item.description}</p>
                <span className="text-gray-700">${item.price} x {item.quantity}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="btn" onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>
                +
              </button>
              <button className="btn" onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>
                -
              </button>
              <button className="btn btn-red" onClick={() => handleRemoveItem(item.id)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex">
        <div className="card-body">
          <p className="py-4 bg-slate-400 text-xl font-bold">Order Summary</p>
        </div>
        <div className="card-body ml-auto">
          <p className="py-4 bg-slate-400 text-xl font-bold">Total Price: ${getTotalPrice()}</p>
        </div>
      </div>
    </div>
  );
}
