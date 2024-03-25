// pages/api/reports/generate.js
import dbConnect from '../../../app/lib/dbConnect';
import Order from '../../../app/models/Order';

export default async function handler(req, res) {
 await dbConnect();

 if (req.method === 'GET') {
    try {
      const orders = await Order.find({});
      let totalSales = 0;
      let totalProfit = 0;

      orders.forEach(order => {
        // Assuming each drink costs $1 and there's a 20% profit margin
        const cost = order.quantity * 1;
        const profit = cost * 0.2;
        totalSales += cost;
        totalProfit += profit;
      });

      res.status(200).json({ success: true, totalSales, totalProfit });
    } catch (error) {
      res.status(400).json({ success: false });
    }
 } else {
    res.status(400).json({ success: false });
 }
}
