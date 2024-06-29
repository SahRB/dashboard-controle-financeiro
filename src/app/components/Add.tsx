import React, { useState, useEffect } from 'react';
import { IoMdAdd } from 'react-icons/io';

interface Transaction {
  id: number;
  type: string;
  note: string;
  category: string;
  value: number;
  date: string; // Add date to the Transaction interface
}

interface Props {
  addTransaction: (transaction: Transaction) => void;
}

const Add: React.FC<Props> = ({ addTransaction }) => {
  const [type, setType] = useState('');
  const [note, setNote] = useState('');
  const [category, setCategory] = useState('');
  const [value, setValue] = useState('');
  const [date, setDate] = useState(''); // State for date
  const [customCategory, setCustomCategory] = useState(''); // State for custom category
  const [categories, setCategories] = useState<string[]>([]);
  
  useEffect(() => {
    if (type === 'Entrada') {
      setCategories(['Salário', 'Investimento', 'Outro']);
    } else if (type === 'Saída') {
      setCategories(['Alimentação', 'Saúde', 'Lazer', 'Outro']); // Add 'Outro' to Saída categories
    } else {
      setCategories([]);
    }
  }, [type]);

  const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    const newTransaction: Transaction = {
      id: Date.now(),
      type,
      note,
      category: category === 'Outro' ? customCategory : category, // Use customCategory if category is 'Outro'
      value: parseFloat(value),
      date, // Include date in the new transaction
    };
    addTransaction(newTransaction);
    // Reset form fields
    setType('');
    setNote('');
    setCategory('');
    setValue('');
    setDate('');
    setCustomCategory(''); // Reset custom category
  };

  return (
    <>
      <button className="btn btn-circle bg-emerald-600 hover:bg-emerald-900" onClick={() => openModal('my_modal_5')}><IoMdAdd /></button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Adicionar transação</h3>
          <form onSubmit={handleAddTransaction}>
            <select
              className="select select-bordered w-full max-w-xs"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option disabled value="">Qual é o tipo de transação?</option>
              <option>Entrada</option>
              <option>Saída</option>
            </select>
            <input
              type="text"
              placeholder="Nota"
              className="input input-bordered w-full max-w-xs my-2"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Valor"
              className="input input-bordered w-full max-w-xs my-2"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
            />
            <input
              type="date"
              className="input input-bordered w-full max-w-xs my-2"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <select
              className="select select-bordered select-sm w-full max-w-xs my-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option disabled value="">Categorias</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            {category === 'Outro' && (
              <input
                type="text"
                placeholder="Digite a categoria"
                className="input input-bordered w-full max-w-xs my-2"
                value={customCategory}
                onChange={(e) => setCustomCategory(e.target.value)}
                required
              />
            )}
            <div className="modal-action">
              <button type="submit" className="btn">Adicionar</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Add;