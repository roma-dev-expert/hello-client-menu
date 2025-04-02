import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Установка пакета uuid: npm install uuid
import { Tender as TenderType } from '../../types/types';

const Tender: React.FC = () => {
  const [tenders, setTenders] = useState<TenderType[]>([
    {
      id: uuidv4(),
      title: 'Website Development',
      company: 'TechCorp',
      deadline: '2025-04-15',
      status: 'Open',
      budget: 50000,
    },
    {
      id: uuidv4(),
      title: 'Office Renovation',
      company: 'BuildCo',
      deadline: '2025-04-20',
      status: 'Closed',
      budget: 120000,
    },
    {
      id: uuidv4(),
      title: 'Supply of Laptops',
      company: 'SupplyChain Inc.',
      deadline: '2025-04-25',
      status: 'Awarded',
      budget: 200000,
    },
  ]);

  const [title, setTitle] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [deadline, setDeadline] = useState<string>('');
  const [budget, setBudget] = useState<number>(0);
  const [status, setStatus] = useState<'Open' | 'Closed' | 'Awarded'>('Open');
  const [filterStatus, setFilterStatus] = useState<'All' | 'Open' | 'Closed' | 'Awarded'>('All');

  const handleAddTender = () => {
    if (!title.trim() || !company.trim() || !deadline.trim() || budget <= 0) return;

    const newTender: TenderType = {
      id: uuidv4(),
      title,
      company,
      deadline,
      status,
      budget,
    };

    setTenders([...tenders, newTender]);
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setCompany('');
    setDeadline('');
    setBudget(0);
    setStatus('Open');
  };

  const filteredTenders =
    filterStatus === 'All' ? tenders : tenders.filter((tender) => tender.status === filterStatus);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Tender Management</h1>

      {/* Фильтр */}
      <div className="mb-4">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value as 'All' | 'Open' | 'Closed' | 'Awarded')}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        >
          <option value="All">All</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
          <option value="Awarded">Awarded</option>
        </select>
      </div>

      {/* Форма добавления тендера */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="date"
          placeholder="Deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as 'Open' | 'Closed' | 'Awarded')}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        >
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
          <option value="Awarded">Awarded</option>
        </select>
        <button
          onClick={handleAddTender}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Tender
        </button>
      </div>

      {/* Список тендеров */}
      <ul className="space-y-4">
        {filteredTenders.map((tender) => (
          <li
            key={tender.id}
            className="p-4 border border-gray-300 rounded shadow flex flex-col"
          >
            <h2 className="text-lg font-medium">{tender.title}</h2>
            <p className="text-sm text-gray-500">Company: {tender.company}</p>
            <p className="text-sm text-gray-500">Budget: ${tender.budget.toLocaleString()}</p>
            <p className="text-sm text-gray-500">Deadline: {tender.deadline}</p>
            <p className="text-sm text-gray-500">Status: {tender.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tender;
