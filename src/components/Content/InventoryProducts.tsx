import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Установка пакета uuid: npm install uuid
import { Product } from '../../types/types';

const InventoryProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: uuidv4(), name: 'Laptop', category: 'Electronics', price: 1200, quantity: 10 },
    { id: uuidv4(), name: 'Desk Chair', category: 'Furniture', price: 150, quantity: 50 },
    { id: uuidv4(), name: 'Notebook', category: 'Office Supplies', price: 5, quantity: 200 },
  ]);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);

  const handleAddProduct = () => {
    if (!name.trim() || !category.trim()) return;

    const newProduct: Product = {
      id: uuidv4(),
      name,
      category,
      price,
      quantity,
    };

    setProducts([...products, newProduct]);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setCategory('');
    setPrice(0);
    setQuantity(0);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Inventory Products</h1>

      {/* Поиск */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />

      {/* Форма добавления нового продукта */}
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
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleAddProduct}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </div>

      {/* Список продуктов */}
      <ul className="space-y-4">
        {filteredProducts.map((product) => (
          <li
            key={product.id}
            className="p-4 border border-gray-300 rounded shadow flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-medium">{product.name}</h2>
              <p className="text-sm text-gray-500">Category: {product.category}</p>
              <p className="text-sm text-gray-500">Price: ${product.price}</p>
              <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryProducts;
