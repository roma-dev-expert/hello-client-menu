import React, { useState } from 'react';
import { HeadlessMenu } from './components/HeadlessMenu';

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const menuItems = [
    { label: 'Trends' },
    { label: 'Tasks' },
    { label: 'Tickets' },
    { label: 'Payments' },
    { label: 'Clients', subItems: [{ label: 'List' }, { label: 'Reviews' }] },
    { label: 'Inventory', subItems: [{ label: 'Products' }, { label: 'Orders' }] },
    { label: 'Shop' },
    { label: 'Reports' },
    { label: 'Tender' },
    { label: 'Settings' },
    { label: 'Knowledge Base' },
  ];

  return (
    <div>
      <HeadlessMenu
        items={menuItems}
        onSelect={(item) => {
          console.log('Selected:', item);
          setSelectedItem(item);
        }}
      />
      {selectedItem && <div>{`Вы выбрали: ${selectedItem}`}</div>}
    </div>
  );
};

export default App;
