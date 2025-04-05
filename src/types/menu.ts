import React from 'react';

export interface MenuItem {
  label: string;
  subItems?: MenuItem[];
  icon?: React.ElementType;
  path: string;
}

export interface RenderMenuItemProps {
  item: MenuItem;
  isSelected: boolean;
  onClick: () => void;
  isCollapsed: boolean;
  level?: number;
}

export interface RenderToggleMenuProps {
  isCollapsed: boolean;
  toggleMenu: () => void;
}

export interface RenderTooltipProps {
  item: MenuItem;
  selectedSubItem: string | null;
  onSubItemClick: (subItem: MenuItem) => void;
  renderMenuItem: (props: RenderMenuItemProps) => React.ReactNode;
}

export interface HeadlessMenuProps {
  items: MenuItem[];
  renderMenuItem: (props: RenderMenuItemProps) => React.ReactNode;
  renderToggleMenu: (props: RenderToggleMenuProps) => React.ReactNode;
  renderTooltip: (props: RenderTooltipProps) => React.ReactNode;
  className?: string;
}
