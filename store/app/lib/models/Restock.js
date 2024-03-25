// models/Restock.js
import mongoose from 'mongoose';

const restockSchema = new mongoose.Schema({
 branchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
 },
 productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
 },
 quantity: {
    type: Number,
    required: true,
 },
});

export default mongoose.models.Restock || mongoose.model('Restock', restockSchema);
