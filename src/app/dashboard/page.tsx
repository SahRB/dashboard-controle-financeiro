"use client"
import React, { useEffect, useState } from 'react';
import Card from "../components/Card";

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

  useEffect(() => {
    const storedTransactions = localStorage.getItem('transactions');
    const transactions: Transaction[] = storedTransactions ? JSON.parse(storedTransactions) : [];

    const totalDespesas = transactions.filter(t => t.type === 'Saída').reduce((acc, curr) => acc + curr.value, 0);
    const totalRenda = transactions.filter(t => t.type === 'Entrada').reduce((acc, curr) => acc + curr.value, 0);
    const totalSaldo = totalRenda - totalDespesas;

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
    </main>
  );
};

export default Dashboard;