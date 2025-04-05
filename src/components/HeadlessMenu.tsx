import React from 'react';
import { MenuItem, HeadlessMenuProps } from '../types/menu';
import { useMenu } from '../context/MenuContext';

export const HeadlessMenu: React.FC<HeadlessMenuProps> = ({
  items,
  renderMenuItem,
  renderSubMenuItem,
  renderToggleMenu,
  renderTooltip,
  renderMobileSubmenu,
  className
}) => {
  const {
    isCollapsed,
    toggleCollapse,
    selectedItem,
    setSelectedItem,
    selectedSubItem,
    setSelectedSubItem,
    isMobile,
    hoveredItem,
    setHoveredItem,
  } = useMenu();

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item.label);
    if (item.subItems && item.subItems.length > 0) {
      setSelectedSubItem(item.subItems[0].label);
    } else {
      setSelectedSubItem(null);
    }
  };

  const handleSubItemClick = (item: MenuItem, subItem: MenuItem) => {
    setSelectedItem(item.label);
    setSelectedSubItem(subItem.label);
  };

  return (
    <div 
      className={className}
      onMouseLeave={!isMobile ? () => setHoveredItem(null) : undefined}
    >
      {items.map((item) => (
        <div className='relative'
          key={item.label}
          {...(!isMobile && { onMouseEnter: () => setHoveredItem(item.label) })}
        >
          {renderMenuItem({
            item,
            isSelected: selectedItem === item.label,
            onClick: () => handleItemClick(item),
            isCollapsed,
            level: 0,
            isMobile,
          })}

          {!isMobile && isCollapsed && hoveredItem === item.label && (
            renderTooltip?.({
              item,
              selectedSubItem,
              onSubItemClick: handleSubItemClick
            })
          )}

          {!isMobile && !isCollapsed && item.subItems && selectedItem === item.label && (
            renderSubMenuItem?.({
              item,
              selectedSubItem,
              onSubItemClick: handleSubItemClick,
              isCollapsed,
              level: 0,
              isMobile,
            })
          )}

          {isMobile && item.subItems && selectedItem === item.label && (
            renderMobileSubmenu?.({
              item,
              selectedSubItem,
              subItems: item.subItems,
              onClose: () => setSelectedItem(null),
              onSubItemClick: handleSubItemClick
            })
          )}
        </div>
      ))}

      {!isMobile && renderToggleMenu?.({
        isCollapsed,
        toggleMenu: toggleCollapse
      })}
    </div>
  );
};