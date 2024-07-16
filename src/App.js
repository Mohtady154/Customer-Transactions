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
    axios.get('http://localhost:5000/customers').then(response => {
      setCustomers(response.data);
    });

    axios.get('http://localhost:5000/transactions').then(response => {
      setTransactions(response.data);
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
