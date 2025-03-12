// import React from 'react';
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import product from './images/product.png';
import product2 from './images/product2.png';
import product3 from './images/product3.png';


const Menu = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Chocolate Cake', image: product, price: '$15'},
    { id: 2, name: 'Croissant', image: product2, price: '$3' },
    { id: 3, name: 'Baguette', image: product3, price: '$2' },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]); // Adds the product to the cart
    alert(`${product.name} has been added to the cart!`);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const proceedToPayment = () => {
    alert('Proceeding to payment...');
    // You can replace this with real payment gateway integration.
  };

  const whatsappMessage = 'Hi, I would like to order from Fresh Bakes Bakery!';
  const openWhatsapp = () => {
    // const phoneNumber = '+1234567890';
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const url = `https://web.whatsapp.com/send?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <section>
      <h2>Our Menu</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <div className="cart-summary">
        <h3>Cart: {cart.length} item(s)</h3>
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="pay-now-button" onClick={proceedToPayment}>
        Pay Now
      </button>

      <button className="whatsapp-button" onClick={openWhatsapp}>
        Contact Us on WhatsApp
      </button>
    </section>
  );
};

export default Menu;