import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import swal from 'sweetalert';
import './Cart.css';
import NavComp from '../Nav/NavComp';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const token = localStorage.getItem('access_token');
      const decodedToken = jwt_decode(token);
      const user_id = decodedToken.user_id;

      const response = await axios.get(`http://localhost:8000/api/items/cart/${user_id}/`);
      setCartItems(response.data);
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = async (itemId) => {
    await axios.delete(`http://localhost:8000/api/items/${itemId}/`);

    const token = localStorage.getItem('access_token');
    const decodedToken = jwt_decode(token);
    const user_id = decodedToken.user_id;

    const response = await axios.get(`http://localhost:8000/api/items/cart/${user_id}/`);
    setCartItems(response.data);

    swal("Success!", "The item has been removed from the cart.", "success");
  };

  const subtotals = cartItems.map(item => item.package_price * item.quantity);
  const total = subtotals.reduce((total, subtotal) => total + subtotal, 0);

  const handleCheckout = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/create-checkout-session', { amount: total });
      const checkoutWindow = window.open(response.data.session.url, '_blank');
      if (checkoutWindow) {
        checkoutWindow.focus();
      } else {
        swal("Please allow pop-ups for this website", "error");
      }

      const token = localStorage.getItem('access_token');
      const decodedToken = jwt_decode(token);
      const user_id = decodedToken.user_id;
      const purchaseIds = [];

      for (const item of cartItems) {
        const response = await axios.post('http://localhost:8000/api/save-ticket-purchase', {
          user_id,
          event_name: item.event_name,
          package_name: item.package_name,
          package_price: item.package_price,
          quantity: item.quantity,
          subtotal: item.package_price * item.quantity,
        }, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        purchaseIds.push(response.data.ticket_purchase_id);
      }

      localStorage.setItem('purchaseIds', JSON.stringify(purchaseIds));
      swal("Success!", "Payment and ticket purchase were successful!", "success");
    } catch (error) {
      console.error(error);
      swal("Error!", "An error occurred while processing your payment. Please try again later.", "error");
    }
  };

  return (
    <div>
      <NavComp/>
      <div className="cart-container">
        <h2 className="cart-head">Ticket Cart</h2>
        {cartItems.map((item, index) => (
          <div key={item.id} className="cart-item">
            <p>Event: {item.event_name}</p>
            <p>Package: {item.package_name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Subtotal: Rs.{subtotals[index]}/=</p>
            <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </div>
        ))}
        <div className="cart-total">
          <h2>Total: Rs.{total}/=</h2>
        </div>
        <button className="checkout-button" onClick={handleCheckout}>Continue Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
