import React, { useState, useEffect } from 'react';

interface Transaction {
  id: number;
  type: string;
  note: string;
  category: string;
  value: number;
}

interface Props {
  addTransaction: (transaction: Transaction) => void;
}

const Add: React.FC<Props> = ({ addTransaction }) => {
  const [type, setType] = useState('');
  const [note, setNote] = useState('');
  const [category, setCategory] = useState('');
  const [value, setValue] = useState('');
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    if (type === 'Entrada') {
      setCategories(['Salário', 'Investimento', 'Outro']);
    } else if (type === 'Saída') {
      setCategories(['Alimentação', 'Saúde', 'Lazer']);
    } else {
      setCategories([]);
    }
  }, [type]);

  const handleAddTransaction = () => {
    const newTransaction: Transaction = {
      id: Date.now(),
      type,
      note,
      category,
      value: parseFloat(value),
    };
    addTransaction(newTransaction);
    // Reset form fields
    setType('');
    setNote('');
    setCategory('');
    setValue('');
  };

  return (
    <>
      <button className="btn" onClick={() => setType('Entrada')}>Adicionar Entrada</button>
      <button className="btn" onClick={() => setType('Saída')}>Adicionar Saída</button>

      {/* Modal */}
      {type && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
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
                  <option value="Entrada">Entrada</option>
                  <option value="Saída">Saída</option>
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
                <div className="modal-action">
                  <button type="submit" className="btn">Adicionar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Add;
