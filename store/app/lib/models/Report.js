// models/Report.js
import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
 branchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
 },
 totalSales: {
    type: Number,
    required: true,
 },
 profits: {
    type: Number,
    required: true,
 },
});

export default mongoose.models.Report || mongoose.model('Report', reportSchema);
