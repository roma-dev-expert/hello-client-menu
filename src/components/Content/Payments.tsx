import React, { useState } from 'react';
import { paymentsData } from '../../data/payments'; 

const Payments: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All'); 

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const categoryData = paymentsData[selectedCategory];

  return (
    <div className="p-4">
      <div className="flex items-center gap-4 border-b border-gray-300 pb-2 mb-4 overflow-x-auto">
        <span className="shrink-0 font-medium text-lg md:text-xl">Payments</span>
        {Object.keys(paymentsData).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`whitespace-nowrap text-black hover:underline decoration-2 underline-offset-8 ${
              selectedCategory === category
                ? 'font-bold underline decoration-2 text-sky-700'
                : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="text-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col md:flex-row items-center mr-0 md:mr-12">
            <span className="block text-2xl md:text-4xl font-semibold mb-2 md:mb-0 md:mr-4">
              Balance
            </span>
            <span className="text-2xl md:text-4xl font-semibold text-black">
              RUB {categoryData.balance}
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4 md:mt-0">
            <div className="text-center md:text-left">
              <span className="block text-md md:text-lg text-gray-400">Income</span>
              <span className="block text-lg md:text-xl">
                RUB {categoryData.income}
              </span>
            </div>
            <div className="text-center md:text-left">
              <span className="block text-md md:text-lg text-gray-400">Expense</span>
              <span className="block text-lg md:text-xl">
                RUB {categoryData.expense}
              </span>
            </div>
            <div className="text-center md:text-left">
              <span className="block text-md md:text-lg text-gray-400">Total</span>
              <span className="block text-lg md:text-xl mt-1 md:mt-0">
                RUB {categoryData.total}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
