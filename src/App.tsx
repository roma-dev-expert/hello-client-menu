import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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

  const renderItem = ({
    item,
    isSelected,
    onClick,
    isCollapsed,
  }: {
    item: any;
    isSelected: boolean;
    onClick: () => void;
    isCollapsed: boolean;
  }) => {
    return (
      <Link
        to={item.path}
        onClick={onClick}
        className={`w-full text-left my-1 px-4 py-2 rounded-lg cursor-pointer flex gap-2 ${
          isSelected ? 'bg-blue-100 text-sky-700' : 'hover:bg-gray-200'
        } ${isCollapsed && 'justify-center'}`
      }
      >
        {item.icon && <span>{React.createElement(item.icon)}</span>}
        {!isCollapsed && <span className='ml-4'>{item.label}</span>}
      </Link>
    );
  };

  return (
    <Router>
      <div className="flex h-screen">
          <HeadlessMenu
            items={menuItems}
            onSelect={(itemLabel) => {
              console.log('Selected:', itemLabel);
              setSelectedItem(itemLabel);
            }}
            renderItem={renderItem}
          />

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
