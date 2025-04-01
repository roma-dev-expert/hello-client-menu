import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { HeadlessMenu } from './components/HeadlessMenu';
import { menuItems } from './data/menuItems';
import Trends from './components/Content/Trends';
import Tasks from './components/Content/Tasks';
import Tickets from './components/Content/Tickets';
import Payments from './components/Content/Payments';
import { trendsData } from './data/trends';
import { DataProvider } from './context/DataContext';
import ClientsList from './components/Content/ClientsList';

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const renderLink = (
    label: string,
    isSelected: boolean,
    onClick: () => void,
    isSubItem: boolean = false,
    path: string = '',
    icon?: React.ElementType
  ) => {
    const baseClasses = `w-full text-left px-4 rounded-lg transition font-medium ${
      isSelected ? 'bg-blue-100 text-sky-700' : 'hover:bg-gray-200'
    }`;
    const subItemClasses = isSubItem
      ? 'py-2 before:content-["•"] before:mr-2'
      : 'py-3 flex items-center';
  
    return (
      <Link
        to={path}
        onClick={onClick}
        className={`${baseClasses} ${subItemClasses}`}
      >
        {icon && <span className="mr-4">{React.createElement(icon)}</span>}
        {label}
      </Link>
    );
  };  

  return (
    <Router>
      <div className="flex h-screen">
        <div className="bg-gray-100 w-1/4 p-4 rounded-lg shadow-lg">
          <HeadlessMenu
            items={menuItems}
            onSelect={(item) => {
              console.log('Selected:', item);
              setSelectedItem(item);
            }}
            renderItem={({ item, isOpen, isSelected, onClick }) =>
              renderLink(item.label, isSelected, onClick, false, item.path, item.icon)
            }
            renderSubItem={({ subItem, isSelected, onClick }) =>
              renderLink(subItem.label, isSelected, onClick, true, subItem.path)
            }
          />
        </div>

        <div className="flex-1 bg-gray-50 p-6 ml-4 rounded-lg shadow-md">
          <Routes>
            <Route
              path="/trends"
              element={
                <DataProvider initialData={trendsData}>
                  <Trends />
                </DataProvider>
              }
            />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/clients/list" element={<ClientsList />} />
            <Route path="/clients/reviews" element={<div>Client Reviews</div>} />
            <Route path="/inventory/products" element={<div>Inventory Products</div>} />
            <Route path="/inventory/orders" element={<div>Inventory Orders</div>} />
            <Route path="/shop" element={<div>Shop</div>} />
            <Route path="/reports" element={<div>Reports</div>} />
            <Route path="/tender" element={<div>Tender</div>} />
            <Route path="/settings" element={<div>Settings</div>} />
            <Route path="/knowledge-base" element={<div>Knowledge Base</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
