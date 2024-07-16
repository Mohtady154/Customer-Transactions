import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomerTable from './Components/CustomerTable';
import TransactionChart from './Components/TransactionChart';

function App() {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    axios.get('https://mohtady154.github.io/db.json/db.json').then(response => {
      setCustomers(response.data.customers);
      setTransactions(response.data.transactions);
      console.log(response);
    });

  }, []);

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="container">
      <h1 className="my-4">Customer Transactions</h1>
      <CustomerTable customers={customers} transactions={transactions} onCustomerSelect={handleCustomerSelect} />
      {selectedCustomer && <TransactionChart customer={selectedCustomer} transactions={transactions} />}
    </div>
  );
}

export default App;
