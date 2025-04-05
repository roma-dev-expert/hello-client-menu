import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Order } from '../../types/types';

const InventoryOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([
    { id: uuidv4(), productName: 'Laptop', quantity: 5, orderDate: new Date().toLocaleDateString(), status: 'Pending' },
    { id: uuidv4(), productName: 'Desk Chair', quantity: 10, orderDate: new Date().toLocaleDateString(), status: 'Completed' },
    { id: uuidv4(), productName: 'Notebook', quantity: 20, orderDate: new Date().toLocaleDateString(), status: 'Cancelled' },
  ]);

  const [productName, setProductName] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [status, setStatus] = useState<'Pending' | 'Completed' | 'Cancelled'>('Pending');
  const [filterStatus, setFilterStatus] = useState<'All' | 'Pending' | 'Completed' | 'Cancelled'>('All');

  const handleAddOrder = () => {
    if (!productName.trim()) return;

    const newOrder: Order = {
      id: uuidv4(),
      productName,
      quantity,
      orderDate: new Date().toLocaleDateString(),
      status,
    };

    setOrders([...orders, newOrder]);
    resetForm();
  };

  const resetForm = () => {
    setProductName('');
    setQuantity(1);
    setStatus('Pending');
  };

  const filteredOrders =
    filterStatus === 'All' ? orders : orders.filter((order) => order.status === filterStatus);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Inventory Orders</h1>

      <div className="mb-4">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value as 'All' | 'Pending' | 'Completed' | 'Cancelled')}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as 'Pending' | 'Completed' | 'Cancelled')}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <button
          onClick={handleAddOrder}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Order
        </button>
      </div>

      <ul className="space-y-4">
        {filteredOrders.map((order) => (
          <li
            key={order.id}
            className="p-4 border border-gray-300 rounded shadow flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-medium">{order.productName}</h2>
              <p className="text-sm text-gray-500">Quantity: {order.quantity}</p>
              <p className="text-sm text-gray-500">Date: {order.orderDate}</p>
              <p className="text-sm text-gray-500">Status: {order.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryOrders;
