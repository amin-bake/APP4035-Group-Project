// pages/place-order.js
import { useState } from 'react';

export default function PlaceOrder() {
 const [formData, setFormData] = useState({
    customerName: '',
    drink: '',
    quantity: 1,
    branchId: '',
 });

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/orders/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);
 };

 return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for customerName, drink, quantity, branchId */}
      <button type="submit">Place Order</button>
    </form>
 );
}
