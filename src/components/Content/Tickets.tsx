import React, { useState } from 'react';
import { Ticket } from '../../types/types'; 
import { v4 as uuidv4 } from 'uuid'; 

const Tickets: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([
    {
      id: uuidv4(),
      title: 'Fix Login Bug',
      description: 'Resolve issue with user login form validation.',
      status: 'Open',
      createdAt: new Date().toLocaleDateString(),
    },
    {
      id: uuidv4(),
      title: 'Update Documentation',
      description: 'Add usage examples to the API documentation.',
      status: 'In Progress',
      createdAt: new Date().toLocaleDateString(),
    },
    {
      id: uuidv4(),
      title: 'Deploy New Version',
      description: 'Deploy the latest version to production.',
      status: 'Closed',
      createdAt: new Date().toLocaleDateString(),
    },
  ]);

  const [filter, setFilter] = useState<'All' | 'Open' | 'In Progress' | 'Closed'>('All');

  const filteredTickets = tickets.filter((ticket) =>
    filter === 'All' ? true : ticket.status === filter
  );

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Ticket Management</h1>

      <div className="mb-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as 'All' | 'Open' | 'In Progress' | 'Closed')}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="All">All Tickets</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>
      </div>
      <ul>
        {filteredTickets.map((ticket) => (
          <li
            key={ticket.id}
            className="mb-2 p-4 border border-gray-300 rounded shadow-md"
          >
            <h2 className="text-lg font-medium">{ticket.title}</h2>
            <p className="text-sm text-gray-500">{ticket.description}</p>
            <p className="text-sm text-gray-400">Created At: {ticket.createdAt}</p>
            <p className={`text-sm font-bold ${
              ticket.status === 'Open'
                ? 'text-green-500'
                : ticket.status === 'In Progress'
                ? 'text-yellow-500'
                : 'text-red-500'
            }`}>
              {ticket.status}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tickets;
