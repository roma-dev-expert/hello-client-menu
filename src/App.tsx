import React from 'react';
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
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';


const renderMenuItem = ({
  item,
  isSelected,
  onClick,
  isCollapsed,
  level = 0,
}: {
  item: any;
  isSelected: boolean;
  onClick: () => void;
  isCollapsed: boolean;
  level?: number;
}) => {
  const baseClasses = `flex items-center p-2 rounded cursor-pointer transition-colors`;
  const selectedClasses = isSelected ? "bg-blue-100 text-blue-900" : "hover:bg-gray-200";
  const justifyClass = isCollapsed
    ? "justify-center"
    : level === 0
    ? "justify-start"
    : "justify-start ml-2";

  return (
    <Link
      to={item.path}
      onClick={onClick}
      className={`${baseClasses} ${selectedClasses} ${justifyClass}`}
    >
      {item.icon && <span>{React.createElement(item.icon)}</span>}
      {!isCollapsed && <span className={level === 0 ? "ml-2" : "ml-4"}>{item.label}</span>}
    </Link>
  );
};

const renderTooltip = ({
  item,
  selectedSubItem,
  onSubItemClick,
}: {
  item: any;
  selectedSubItem: string | null;
  onSubItemClick: (subItem: any) => void;
}) => {
  if (item.subItems && item.subItems.length > 0) {
    return (
      <div className="bg-white p-2 rounded shadow-md">
        <ul>
          {item.subItems.map((subItem: any) => (
            <li
              key={subItem.label}
              className={`cursor-pointer py-1 px-2 rounded transition-colors ${
                selectedSubItem === subItem.label ? 'font-bold' : ''
              }`}
            >
              {renderMenuItem({
                item: subItem,
                isSelected: selectedSubItem === subItem.label,
                onClick: () => onSubItemClick(subItem),
                isCollapsed: false,
                level: 1,
              })}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className="relative inline-block bg-blue-500 text-white text-sm font-medium p-2 rounded">
      {item.label}
      <svg
        className="absolute -left-2 top-1/2 transform -translate-y-1/2 fill-blue-500"
        width="10"
        height="10"
        viewBox="0 0 10 10"
      >
        <polygon points="10,0 0,5 10,10" />
      </svg>
    </div>
  );
};

const renderToggleMenu = ({
  isCollapsed,
  toggleMenu,
}: {
  isCollapsed: boolean;
  toggleMenu: () => void;
}) => (
  <button
    onClick={toggleMenu}
    className="p-2 mt-4 rounded hover:bg-gray-200 transition-colors"
  >
    {isCollapsed ? <MenuIcon /> : <MenuOpenIcon />}
  </button>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen">
      <HeadlessMenu
          className="flex flex-col gap-2 p-4 rounded-lg shadow-lg bg-white"
          items={menuItems}
          renderMenuItem={renderMenuItem}
          renderToggleMenu={renderToggleMenu}
          renderTooltip={renderTooltip}
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
