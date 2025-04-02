import React, { useState } from 'react';
import { MenuItem, HeadlessMenuProps } from '../types/menu';
import '../styles/globals.css';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';


export const HeadlessMenu: React.FC<HeadlessMenuProps> = ({
  items,
  onSelect,
  renderItem,
}) => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [selectedSubItem, setSelectedSubItem] = useState<string | null>(null);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const handleClick = (item: MenuItem) => {
    setOpenItem(openItem === item.label ? null : item.label);
    setSelectedItem(item.label);

    if (item.subItems && item.subItems.length > 0) {
      const firstSubItem = item.subItems[0];
      setSelectedSubItem(firstSubItem.label);
      onSelect?.(firstSubItem.label);
    } else {
      setSelectedSubItem(null);
      onSelect?.(item.label);
    }
  };

  const handleSubItemClick = (subItem: MenuItem) => {
    setSelectedSubItem(subItem.label);
    onSelect?.(subItem.label);
  };

  const toggleMenu = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      className={`flex flex-col ${
        isCollapsed ? 'w-min' : 'w-auto'
      } bg-gray-100 p-4 rounded-lg shadow-lg`}
    >
      <div className={`flex-1 ${isCollapsed && 'justify-items-center'}`}>
        {items.map((item) => (
          <div key={item.label} className="flex flex-col">
            {renderItem({
              item,
              isOpen: openItem === item.label,
              isSelected: selectedItem === item.label,
              onClick: () => handleClick(item),
              isCollapsed,
            })}
            {item.subItems && openItem === item.label && (
              <div
                className={`${isCollapsed ? 'hidden' : 'ml-4 flex flex-col'}`}
              >
                {item.subItems.map((subItem) =>
                  renderItem({
                    item: subItem,
                    isOpen: openItem === item.label,
                    isSelected: selectedSubItem === subItem.label,
                    onClick: () => handleSubItemClick(subItem),
                    isCollapsed,
                  })
                )}
              </div>
            )}
          </div>
        ))}
        <button
          onClick={toggleMenu}
          className="w-min text-black px-4 py-2 rounded mt-4 hover:bg-gray-200"
          aria-label="Toggle Menu"
        >
          {isCollapsed ? <MenuIcon /> : <MenuOpenIcon />}
        </button>
      </div>

     
    </div>
  );
};
