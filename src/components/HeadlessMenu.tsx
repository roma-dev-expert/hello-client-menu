import React, { useState } from 'react';
import { MenuItem, HeadlessMenuProps } from '../types/menu';

export const HeadlessMenu: React.FC<HeadlessMenuProps> = ({ items, onSelect }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleClick = (item: MenuItem) => {
    setOpenItem(openItem === item.label ? null : item.label);
    onSelect?.(item.label);
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.label}>
          <button onClick={() => handleClick(item)}>{item.label}</button>
          {item.subItems && openItem === item.label && (
            <div>
              {item.subItems.map((subItem) => (
                <button
                  key={subItem.label}
                  onClick={() => onSelect?.(subItem.label)}
                >
                  {subItem.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
