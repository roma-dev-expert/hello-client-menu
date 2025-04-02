import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ShopItem } from '../../types/types';

const Shop: React.FC = () => {
  const [shopItems, setShopItems] = useState<ShopItem[]>([
    { id: uuidv4(), name: 'Wireless Headphones', category: 'Electronics', price: 250, stock: 20 },
    { id: uuidv4(), name: 'Coffee Maker', category: 'Home Appliances', price: 100, stock: 15 },
    { id: uuidv4(), name: 'Gaming Mouse', category: 'Accessories', price: 50, stock: 30 },
  ]);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);

  const handleAddItem = () => {
    if (!name.trim() || !category.trim()) return;

    const newItem: ShopItem = {
      id: uuidv4(),
      name,
      category,
      price,
      stock,
    };

    setShopItems([...shopItems, newItem]);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setCategory('');
    setPrice(0);
    setStock(0);
  };

  const filteredItems = shopItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Shop Inventory</h1>

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
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleAddItem}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Item
        </button>
      </div>

      <ul className="space-y-4">
        {filteredItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border border-gray-300 rounded shadow flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-medium">{item.name}</h2>
              <p className="text-sm text-gray-500">Category: {item.category}</p>
              <p className="text-sm text-gray-500">Price: ${item.price}</p>
              <p className="text-sm text-gray-500">Stock: {item.stock}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
