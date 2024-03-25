// models/Order.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
 customerName: String,
 drink: String,
 quantity: Number,
 branchId: String,
 status: { type: String, default: 'pending' },
 createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Order || mongoose.model('Order', orderSchema);
