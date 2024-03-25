// models/Stock.js
import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
 branchId: { type: mongoose.Schema.Types.ObjectId, ref: 'Branch' },
 drink: String,
 quantity: Number,
});

export default mongoose.models.Stock || mongoose.model('Stock', stockSchema);
