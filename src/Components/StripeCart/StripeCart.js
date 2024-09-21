import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CartComp from '../Cart/CartComp';

// Load Stripe with your public key
const stripePromise = loadStripe('pk_test_51NZAWGH8EMA77BE5uXZTGDx5hnFVv0Ig3AvjT4YWEHCgQiNYbKVOVNePzLdSnkaWqCVEmPLE9YzmMjdCmVjLY35D00oNEI1G5W');

const StripeCart = () => (
  <Elements stripe={stripePromise}>
    <CartComp />
  </Elements>
);

export default StripeCart;
