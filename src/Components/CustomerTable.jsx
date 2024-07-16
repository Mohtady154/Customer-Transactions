import React, { useState } from 'react';

function CustomerTable({ customers, transactions, onCustomerSelect }) {
  const [filterName, setFilterName] = useState('');
  const [filterAmount, setFilterAmount] = useState('');

  const filteredCustomers = customers.filter(customer => {
    const customerTransactions = transactions.filter(transaction => transaction.customer_id == customer.id);
    const totalAmount = customerTransactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  

    return customer.name.toLowerCase().includes(filterName.toLowerCase()) &&
          (filterAmount == '' || totalAmount == parseInt(filterAmount, 10));
  });
console.log(filteredCustomers);
  return (

    <div>
      <input
        type="text"
        placeholder="Filter by name"
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
        className="form-control mb-2"
      />
      <input
        type="number"
        placeholder="Filter by total amount"
        value={filterAmount}
        onChange={(e) => setFilterAmount(e.target.value)}
        className="form-control mb-2"
      />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Total Transaction Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map(customer => {
            const customerTransactions = transactions.filter(transaction => transaction.customer_id === customer.id);
            const totalAmount = customerTransactions.reduce((sum, transaction) => sum + transaction.amount, 0);

            return <>
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{totalAmount}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => onCustomerSelect(customer)}>View Transactions</button>
                </td>
              </tr>
            </>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTable;
