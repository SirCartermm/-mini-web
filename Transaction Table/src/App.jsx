                                                                                                                                                                        import React, { useState, useEffect } from 'react';
import TransactionForm from './TransactionForm';
import TransactionTable from './TransactionTable';
import TransactionList from './TransactionList';

function App() {
  const [transactions, setTransactions] = useState([]);
