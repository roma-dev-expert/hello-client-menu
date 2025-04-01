import React, { useState } from 'react';
import { paymentsData } from '../../data/payments'; 

const Payments: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All'); 

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const categoryData = paymentsData[selectedCategory];

  return (
    <div>
      <div className="flex items-center gap-4 border-b border-gray-300 pb-2 mb-4">
        <span className="font-medium">Payments</span>
        {Object.keys(paymentsData).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`text-black hover:underline decoration-2 underline-offset-8 ${
              selectedCategory === category ? 'font-bold underline decoration-2 text-sky-700' : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="text-center">
        <div className="flex items-center">
          <div className="flex mr-12 items-center">
            <span className="block text-4xl font-semibold mr-4">Balance</span>
            <span className="text-4xl font-semibold text-black">RUB {categoryData.balance}</span>
          </div>

          <div className="flex gap-8">
            <div className="text-left">
              <span className="block text-lg text-gray-400">Income</span>
              <span className="block text-xl">RUB {categoryData.income}</span>
            </div>
            <div className="text-left">
              <span className="block text-lg text-gray-400">Expense</span>
              <span className="block text-xl">RUB {categoryData.expense}</span>
            </div>
            <div className="text-left">
              <span className="block text-lg text-gray-400">Total</span>
              <span className="block text-xl mt-1">RUB {categoryData.total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
