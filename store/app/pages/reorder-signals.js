// app/pages/reorder-signals.js
'use client';

import { useEffect, useState } from 'react';

export default function ReorderSignals() {
 const [signals, setSignals] = useState([]);

 useEffect(() => {
    const fetchSignals = async () => {
      const response = await fetch('/api/stocks/check');
      const data = await response.json();
      setSignals(data.reOrderSignals);
    };

    fetchSignals();
 }, []);

 return (
    <div>
      <h1>Re-order Signals</h1>
      <ul>
        {signals.map((signal, index) => (
          <li key={index}>
            {signal.drink} needs to be re-ordered at branch {signal.branchId}. Current quantity: {signal.quantity}.
          </li>
        ))}
      </ul>
    </div>
 );
}
