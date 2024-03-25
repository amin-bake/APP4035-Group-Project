// pages/api/stocks/check.js
import dbConnect from '../../../app/lib/dbConnect';
import Stock from '../../../app/models/Order';

export default async function handler(req, res) {
 await dbConnect();

 if (req.method === 'GET') {
    try {
      const stocks = await Stock.find({});
      const reOrderSignals = [];

      stocks.forEach(stock => {
        if (stock.quantity < 10) { // Assuming 10 is the threshold for re-ordering
          reOrderSignals.push({
            branchId: stock.branchId,
            drink: stock.drink,
            quantity: stock.quantity,
          });
        }
      });

      res.status(200).json({ success: true, reOrderSignals });
    } catch (error) {
      res.status(400).json({ success: false });
    }
 } else {
    res.status(400).json({ success: false });
 }
}
