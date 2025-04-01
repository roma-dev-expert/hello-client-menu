import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Client } from '../../types/types'; 

const ClientsList: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([
    { id: uuidv4(), name: 'John Doe', email: 'john.doe@example.com', phone: '+123456789', address: '123 Main St, Springfield' },
    { id: uuidv4(), name: 'Jane Smith', email: 'jane.smith@example.com', phone: '+987654321', address: '456 Elm St, Shelbyville' },
    { id: uuidv4(), name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '+567890123', address: '789 Oak St, Ogdenville' },
  ]);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const handleAddClient = () => {
    if (!name.trim()) return;
    const newClient: Client = {
      id: uuidv4(),
      name,
      email,
      phone,
      address,
    };
    setClients([...clients, newClient]);
    resetForm();
  };

  const handleEditClient = (client: Client) => {
    setEditingClient(client);
    setName(client.name);
    setEmail(client.email);
    setPhone(client.phone);
    setAddress(client.address);
  };

  const handleUpdateClient = () => {
    if (editingClient) {
      setClients(
        clients.map((client) =>
          client.id === editingClient.id
            ? { ...client, name, email, phone, address }
            : client
        )
      );
      resetForm();
    }
  };

  const handleDeleteClient = (id: string) => {
    setClients(clients.filter((client) => client.id !== id));
  };

  const resetForm = () => {
    setEditingClient(null);
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  };

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Clients List</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        ></textarea>
        {editingClient ? (
          <button
            onClick={handleUpdateClient}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Update Client
          </button>
        ) : (
          <button
            onClick={handleAddClient}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add Client
          </button>
        )}
        {editingClient && (
          <button
            onClick={resetForm}
            className="bg-gray-300 text-black px-4 py-2 rounded ml-2"
          >
            Cancel
          </button>
        )}
      </div>

      <ul>
        {filteredClients.map((client) => (
          <li
            key={client.id}
            className="mb-2 p-4 border border-gray-300 rounded shadow flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-medium">{client.name}</h2>
              <p className="text-sm text-gray-500">{client.email}</p>
              <p className="text-sm text-gray-500">{client.phone}</p>
              <p className="text-sm text-gray-500">{client.address}</p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => handleEditClient(client)}
                className="text-blue-500 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteClient(client.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsList;
