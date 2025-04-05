import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MenuProvider } from './context/MenuContext';
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
import { DefaultMenuItem, DefaultMobileSubmenu, DefaultSubMenuItem, DefaultToggle, DefaultTooltip } from './components/DefaultMenuComponents';
import './styles/globals.css'

const App: React.FC = () => {
  return (
    <MenuProvider>
      <Router>
        <div className="flex flex-col-reverse md:flex-row h-screen">
          <HeadlessMenu
            className="flex flex-row md:overflow-visible overflow-x-auto flex-nowrap gap-2 p-4 rounded-lg shadow-lg bg-white md:static md:w-auto md:flex-col"
            items={menuItems}
            renderMenuItem={(props) => (
              <DefaultMenuItem
                {...props}
                className="flex hover:bg-gray-200 p-2 rounded cursor-pointer"
                activeClassName="bg-sky-100 text-sky-900"
                iconClassName=""
                labelClassName="flex items-center justify-center text-center md:ml-2"
                subMenuItemClassName="md:ml-2"
              />
            )}
            renderSubMenuItem={(props) => (
              <DefaultSubMenuItem
                {...props}
                className="flex hover:bg-gray-200 p-2 rounded cursor-pointer"
                activeClassName="bg-sky-100 text-sky-900"
                iconClassName=""
                labelClassName="md:ml-2"
                subMenuItemClassName="md:ml-2"
                subMenuWrapperClassName='flex flex-col gap-2 md:ml-2 md:mt-2'
              />
            )}
            renderToggleMenu={({ isCollapsed, toggleMenu }) => (
              <DefaultToggle
                isCollapsed={isCollapsed}
                toggleMenu={toggleMenu}
                className="p-2 mt-4 ml-2 rounded hover:bg-gray-200"
                iconClassName=""
              />
            )}
            renderTooltip={(props) => (
              <DefaultTooltip
                {...props}
                className="absolute left-full top-0 ml-4 bg-sky-500 text-white text-sm font-medium p-2 rounded"
                subMenuWrapperClassName="absolute flex flex-col gap-2 left-full top-0 ml-4 bg-white p-2 rounded shadow-md"
                itemClassName="px-3 py-2 w-full rounded"
                activeClassName="bg-sky-100 text-sky-900"
              />
            )}
            renderMobileSubmenu={(props) => (
              <DefaultMobileSubmenu
                {...props}
                subMenuItemClassName="p-2 rounded cursor-pointer transition-all"
                activeClassName="bg-sky-100 text-sky-900"
                backdropClassName="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                contentClassName="fixed bottom-0 left-0 w-full p-4 bg-white shadow-xl z-50 animate-slide-up"
                headerClassName="flex justify-between items-center pb-3 border-b"
                closeButtonClassName="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
              />
            )}
          />

          <div className="flex-1 bg-gray-50 p-6 md:ml-4 overflow-y-auto md:mt-0 rounded-lg shadow-md">
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
    </MenuProvider>
  );
};

export default App;