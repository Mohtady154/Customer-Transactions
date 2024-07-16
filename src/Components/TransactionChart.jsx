import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function TransactionChart({ customer, transactions }) {
  const customerTransactions = transactions.filter(transaction => transaction.customer_id === customer.id);

  const dates = customerTransactions.map(transaction => transaction.date);
  const amounts = customerTransactions.map(transaction => transaction.amount);

  const data = {
    labels: dates,
    datasets: [
    {
        label: 'Transaction Amount',
        data: amounts,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  return <>
    <div className="mt-4">
      <h2>{customer.name}'s Transactions</h2>
      <Line data={data} />
    </div>
  </>
}

export default TransactionChart;
