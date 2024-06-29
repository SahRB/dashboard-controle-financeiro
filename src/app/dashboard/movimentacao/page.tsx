"use client";

import React, { useState, useEffect } from 'react';
import Add from '../../components/Add';
import { FaPencil } from 'react-icons/fa6';
import { FaTrashAlt } from 'react-icons/fa';

interface Transaction {
  id: number;
  type: string;
  note: string;
  category: string;
  value: number;
  date: string;
}

export default function Movimentacao() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editFormData, setEditFormData] = useState<Transaction | null>(null);

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

  const startEdit = (transaction: Transaction) => {
    setEditingId(transaction.id);
    setEditFormData(transaction);
  };

  const saveEdit = () => {
    if (!editFormData) return;
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === editFormData.id ? editFormData : transaction
    );
    setTransactions(updatedTransactions);
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
    setEditingId(null);
    setEditFormData(null);
  };

  const deleteTransaction = (id: number) => {
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransactions(updatedTransactions);
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
  };

  const handleEditFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (editFormData) {
      setEditFormData({ ...editFormData, [name]: value });
    }
  };

  return (
    <main>
      <div className="flex justify-between">
        <h3 className="font-bold text-lg">Minhas transações</h3>
        <Add addTransaction={addTransaction} />
      </div>
      <div className='bg-gray-800 rounded-3xl py-5 px-2'>
        <p className='mb-3 text-xl text-emerald-500'>Recentes</p>
        {transactions.map((transaction) => (
          <div key={transaction.id}>
            {editingId === transaction.id ? (
              <div>
                <input type="text" className='bg-transparent focus:outline-none ' name="type" value={editFormData?.type} onChange={handleEditFormChange} />
                <input type="text"  className='bg-transparent focus:outline-none ' name="note" value={editFormData?.note} onChange={handleEditFormChange} />
                <input type="text" className='bg-transparent focus:outline-none ' name="category" value={editFormData?.category} onChange={handleEditFormChange} />
                <input type="number" className='bg-transparent focus:outline-none ' name="value" value={editFormData?.value} onChange={handleEditFormChange} />
                <input type="date" className='bg-transparent focus:outline-none ' name="date" value={editFormData?.date} onChange={handleEditFormChange} />
                <button onClick={saveEdit} className='ml-2 text-white border rounded-md p-0.5 text-sm bg-emerald-800'>Salvar</button>
              </div>
            ) : (
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-items-center'>
  <div className='sm:w-3/4 text-sm'>
    {transaction.type} - {transaction.note} - {transaction.category} - R${transaction.value} - {transaction.date}
  </div>
  
  <div className='flex gap-2'>
    <button onClick={() => startEdit(transaction)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
      <FaPencil />
    </button>
    <button onClick={() => deleteTransaction(transaction.id)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
      <FaTrashAlt />
    </button>
  </div>
</div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}