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
import ClientReviews from './components/Content/ClientReviews';
import InventoryProducts from './components/Content/InventoryProducts';
import InventoryOrders from './components/Content/InventoryOrders';
import Shop from './components/Content/Shop';
import Reports from './components/Content/Reports';
import Tender from './components/Content/Tender';
import Settings from './components/Content/Settings';
import KnowledgeBase from './components/Content/KnowledgeBase';

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
            <Route path="/clients/reviews" element={<ClientReviews />} />
            <Route path="/inventory/products" element={<InventoryProducts />} />
            <Route path="/inventory/orders" element={<InventoryOrders />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/tender" element={<Tender />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/knowledge-base" element={<KnowledgeBase />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
