"use client"
import React, { useEffect, useState } from 'react';
import Card from "../components/Card";
import Pie from '../components/Pie';

interface Transaction {
  id: number;
  type: string;
  note: string;
  category: string;
  value: number;
}

const Dashboard = () => {
  const [despesas, setDespesas] = useState(0);
  const [renda, setRenda] = useState(0);
  const [saldo, setSaldo] = useState(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const storedTransactions = localStorage.getItem('transactions');
    const realTransactions: Transaction[] = storedTransactions ? JSON.parse(storedTransactions) : [];

    const totalDespesas = realTransactions.filter(t => t.type === 'Saída').reduce((acc, curr) => acc + curr.value, 0);
    const totalRenda = realTransactions.filter(t => t.type === 'Entrada').reduce((acc, curr) => acc + curr.value, 0);
    const totalSaldo = totalRenda - totalDespesas;

    setTransactions(realTransactions); 
    setDespesas(totalDespesas);
    setRenda(totalRenda);
    setSaldo(totalSaldo);
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        <Card title="Despesas" value={`R$ ${despesas}`} />
        <Card title="Renda" value={`R$ ${renda}`} />
        <Card title="Saldo" value={`R$ ${saldo}`} />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 justify-items-center pl-20 '>
        <div className='mt-8'>
        <h5 className='text-center'>Saidas por categoria</h5>
        <Pie transactions={transactions.filter(t => t.type === 'Saída')} />
        </div>
        <div className='mt-8 '>
        <h5 className='text-center'>Entradas por categoria</h5>
      <Pie transactions={transactions.filter(t => t.type === 'Entrada')} />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;