// pages/api/orders/process.js
import dbConnect from '../../../app/lib/dbConnect';
import Order from '../../../app/models/Order';

export default async function handler(req, res) {
 await dbConnect();

 if (req.method === 'POST') {
    const { orderId } = req.body;

    try {
      const order = await Order.findByIdAndUpdate(orderId, { status: 'processed' }, { new: true });

      // Here, you can add logic to check stock and trigger a re-order signal if necessary.

      res.status(200).json({ success: true, data: order });
    } catch (error) {
      res.status(400).json({ success: false });
    }
 } else {
    res.status(400).json({ success: false });
 }
}
