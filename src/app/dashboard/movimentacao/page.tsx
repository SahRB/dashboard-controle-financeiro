"use client";

import React, { useState, useEffect } from 'react';
import Add from '../../components/Add';

interface Transaction {
  id: number;
  type: string;
  note: string;
  category: string;
  value: number;
}

export default function Movimentacao() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const storedTransactions = localStorage.getItem('transactions');
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  const addTransaction = (newTransaction: Transaction) => {
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
  };

  return (
    <>
      <Add addTransaction={addTransaction} />
      <div>
        <h3 className="font-bold text-lg">Transações</h3>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.type} - {transaction.note} - {transaction.category} - R${transaction.value}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}