import React, { useState } from 'react';
import { KnowledgeBaseEntry } from '../../types/types';
import { v4 as uuidv4 } from 'uuid';

const KnowledgeBase: React.FC = () => {
  const [entries, setEntries] = useState<KnowledgeBaseEntry[]>([
    {
      id: uuidv4(),
      title: 'How to use the Dashboard',
      category: 'Guides',
      content: 'Learn how to navigate and use the dashboard effectively...',
    },
    {
      id: uuidv4(),
      title: 'Troubleshooting Login Issues',
      category: 'FAQ',
      content: 'Steps to resolve common login problems...',
    },
    {
      id: uuidv4(),
      title: 'Account Management',
      category: 'Guides',
      content: 'Information on updating account details, passwords, and settings...',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredEntries = entries.filter(
    (entry) =>
      (selectedCategory === 'All' || entry.category === selectedCategory) &&
      entry.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Knowledge Base</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-auto p-2 border border-gray-300 rounded"
        >
          <option value="All">All Categories</option>
          <option value="Guides">Guides</option>
          <option value="FAQ">FAQ</option>
        </select>
      </div>

      <ul className="space-y-4">
        {filteredEntries.map((entry) => (
          <li
            key={entry.id}
            className="p-4 border border-gray-300 rounded shadow hover:bg-gray-100"
          >
            <h2 className="text-lg font-medium">{entry.title}</h2>
            <p className="text-sm text-gray-500">{entry.category}</p>
            <p className="text-sm text-gray-700 mt-2">{entry.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KnowledgeBase;
