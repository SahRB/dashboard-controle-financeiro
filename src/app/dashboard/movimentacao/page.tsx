"use client"
import React, { useState, useEffect } from 'react';
import Add from '../../components/Add';
import BtnActions from '../../components/BtnActions';
import CardInfo from '@/app/components/CardInfo';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setIsModalOpen(true);
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
    setIsModalOpen(false);
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
    <main className="p-4  md:p-8">
      <div className="flex justify-between items-center flex-wrap gap-4 mt-8 lg:mt-2">
        <h3 className="font-bold text-lg md:text-xl">Minhas transações</h3>
        <Add addTransaction={addTransaction} />
      </div>
      <div>
        <p className='mb-3 text-xl text-emerald-500'>Recentes</p>
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between gap-4 mb-4">
          
            <div className='flex-1'>
              <CardInfo {...transaction}>
                <BtnActions
                  onEdit={() => startEdit(transaction)}
                  onDelete={() => deleteTransaction(transaction.id)}
                />
              </CardInfo>
            </div>
          </div>
        ))}
      </div>
      <dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} id="my_modal_1" className="modal">
       
      <div className="modal-box">
            <form onSubmit={saveEdit}>
              
              <input type="text" name="note" value={editFormData?.note || ''} onChange={handleEditFormChange} placeholder="Nota" className='input input-bordered w-full max-w-xs my-2' />
              <input type="text" name="category" value={editFormData?.category || ''} onChange={handleEditFormChange} placeholder="Categoria"  className="input input-bordered w-full max-w-xs my-2"/>
              <input type="number" name="value" value={editFormData?.value || ''} onChange={handleEditFormChange} placeholder="Valor" className='select select-bordered select-sm w-full max-w-xs my-2' />
              <input type="date" name="date" value={editFormData?.date || ''} onChange={handleEditFormChange} className='input input-bordered w-full max-w-xs my-2' />
              <div className="modal-action">
              <button type="submit" className="btn">
                Save
              </button>
              </div>
            </form>
    
        </div>
      </dialog>
    </main>
  );
}