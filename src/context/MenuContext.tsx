import React, { createContext, useContext, useState, useEffect } from 'react';

type MenuContextType = {
  isCollapsed: boolean;
  toggleCollapse: () => void;
  openItem: string | null;
  setOpenItem: (label: string | null) => void;
  selectedItem: string | null;
  setSelectedItem: (label: string | null) => void;
  selectedSubItem: string | null;
  setSelectedSubItem: (label: string | null) => void;
  isMobile: boolean;
  hoveredItem: string | null;
  setHoveredItem: (label: string | null) => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [selectedSubItem, setSelectedSubItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleCollapse = () => {
    if (!isMobile) {
      setIsCollapsed(prev => !prev);
    }
  };

  return (
    <MenuContext.Provider
      value={{
        isCollapsed: isMobile ? false : isCollapsed,
        toggleCollapse,
        openItem,
        setOpenItem,
        selectedItem,
        setSelectedItem,
        selectedSubItem,
        setSelectedSubItem,
        isMobile,
        hoveredItem,
        setHoveredItem,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};