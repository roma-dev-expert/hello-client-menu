import React, { useState } from 'react';
import { MenuItem, HeadlessMenuProps } from '../types/menu';
import '../styles/globals.css';

export const HeadlessMenu: React.FC<HeadlessMenuProps> = ({
  items,
  renderMenuItem,
  renderToggleMenu,
  renderTooltip,
  className,
}) => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [selectedSubItem, setSelectedSubItem] = useState<string | null>(null);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleClick = (item: MenuItem) => {
    setOpenItem(openItem === item.label ? null : item.label);
    setSelectedItem(item.label);
    if (item.subItems && item.subItems.length > 0) {
      setSelectedSubItem(item.subItems[0].label);
    } else {
      setSelectedSubItem(null);
    }
  };

  const handleSubItemClick = (subItem: MenuItem) => {
    setSelectedSubItem(subItem.label);
  };

  const toggleMenu = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      className={className}
      onMouseLeave={() => setHoveredItem(null)}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => setHoveredItem(item.label)}
        >
          {renderMenuItem({
            item,
            isSelected: selectedItem === item.label,
            onClick: () => handleClick(item),
            isCollapsed,
            level: 0,
          })}
          
          {isCollapsed && hoveredItem === item.label && renderTooltip && (
            <div className="absolute left-full top-0 ml-2">
              {renderTooltip({
                item,
                selectedSubItem,
                onSubItemClick: handleSubItemClick,
                renderMenuItem,
              })}
            </div>
          )}

          {!isCollapsed && item.subItems && openItem === item.label && (
            <div className='flex flex-col gap-2 mt-2'>
              {item.subItems.map((subItem) =>
                renderMenuItem({
                  item: subItem,
                  isSelected: selectedSubItem === subItem.label,
                  onClick: () => handleSubItemClick(subItem),
                  isCollapsed,
                  level: 1,
                })
              )}
            </div>
          )}
        </div>
      ))}

      <div>
        {renderToggleMenu({
          isCollapsed,
          toggleMenu,
        })}
      </div>
    </div>
  );
};
