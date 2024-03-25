// models/Order.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
 userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
 },
 items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
 ],
 totalPrice: {
    type: Number,
    required: true,
 },
});

export default mongoose.models.Order || mongoose.model('Order', orderSchema);
