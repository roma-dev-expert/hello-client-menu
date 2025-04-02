import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Report } from '../../types/types';

const Reports: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([
    {
      id: uuidv4(),
      title: 'Sales Report Q1',
      date: new Date().toLocaleDateString(),
      category: 'Finance',
      description: 'A detailed report on sales performance for Q1.',
    },
    {
      id: uuidv4(),
      title: 'Employee Performance',
      date: new Date().toLocaleDateString(),
      category: 'HR',
      description: 'Evaluation of employee performance metrics.',
    },
    {
      id: uuidv4(),
      title: 'Inventory Analysis',
      date: new Date().toLocaleDateString(),
      category: 'Inventory',
      description: 'Analysis of stock levels and product movements.',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleAddReport = () => {
    if (!title.trim() || !category.trim() || !description.trim()) return;

    const newReport: Report = {
      id: uuidv4(),
      title,
      date: new Date().toLocaleDateString(),
      category,
      description,
    };

    setReports([...reports, newReport]);
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setCategory('');
    setDescription('');
  };

  const filteredReports = reports.filter((report) =>
    report.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>

      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />

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
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        ></textarea>
        <button
          onClick={handleAddReport}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Report
        </button>
      </div>

      <ul className="space-y-4">
        {filteredReports.map((report) => (
          <li
            key={report.id}
            className="p-4 border border-gray-300 rounded shadow flex flex-col"
          >
            <h2 className="text-lg font-medium">{report.title}</h2>
            <p className="text-sm text-gray-500">Category: {report.category}</p>
            <p className="text-sm text-gray-500">{report.description}</p>
            <p className="text-xs text-gray-400">Date: {report.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
