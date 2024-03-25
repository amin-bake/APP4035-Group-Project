// pages/api/orders/create.js
import dbConnect from '../../../app/lib/dbConnect';
import Order from '../../../app/models/Order';

export default async function handler(req, res) {
 await dbConnect();

 if (req.method === 'POST') {
    const { customerName, drink, quantity, branchId } = req.body;

    try {
      const order = await Order.create({
        customerName,
        drink,
        quantity,
        branchId,
      });

      res.status(201).json({ success: true, data: order });
    } catch (error) {
      res.status(400).json({ success: false });
    }
 } else {
    res.status(400).json({ success: false });
 }
}
