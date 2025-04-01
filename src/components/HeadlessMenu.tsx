import React, { useState } from 'react';
import { MenuItem, HeadlessMenuProps } from '../types/menu';
import '../styles/globals.css';

export const HeadlessMenu: React.FC<HeadlessMenuProps> = ({ items, onSelect, renderItem, renderSubItem }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [selectedSubItem, setSelectedSubItem] = useState<string | null>(null);

  const handleClick = (item: MenuItem) => {
    setOpenItem(openItem === item.label ? null : item.label);
    setSelectedItem(item.label);
    if (item.subItems && item.subItems.length > 0) {
      setSelectedSubItem(item.subItems[0].label);
      setSelectedItem(null);
      onSelect?.(item.subItems[0].label);
    } else {
      setSelectedSubItem(null);
      onSelect?.(item.label);
    }
  };

  const handleSubItemClick = (subItem: MenuItem) => {
    setSelectedSubItem(subItem.label);
    setSelectedItem(null);
    onSelect?.(subItem.label);
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.label} className="ml-4 mt-2 flex flex-col gap-2">
          {renderItem({
            item,
            isOpen: openItem === item.label,
            isSelected: selectedItem === item.label,
            onClick: () => handleClick(item),
          })}
          {item.subItems && openItem === item.label && (
            <div className="ml-4 mt-2 flex flex-col gap-2">
              {item.subItems.map((subItem) =>
                renderSubItem({
                  subItem,
                  isSelected: selectedSubItem === subItem.label,
                  onClick: () => handleSubItemClick(subItem),
                })
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
