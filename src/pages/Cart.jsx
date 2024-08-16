// src/pages/Cart.jsx
import React from 'react';

const Cart = ({ cartItems, updateQuantity, removeItem }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold text-center mb-8">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="border p-4 rounded-md flex justify-between">
              <div>
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-lg">${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
              <div className="flex items-center space-x-4">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="text-right text-xl font-bold">Total: ${totalPrice.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
