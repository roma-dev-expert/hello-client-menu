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

export type DefaultMenuItemProps = {
    item: MenuItem;
    isSelected: boolean;
    onClick: () => void;
    isCollapsed: boolean;
    level: number;
    isMobile: boolean;
    className?: string;
    activeClassName?: string;
    iconClassName?: string;
    labelClassName?: string;
    subMenuItemClassName?: string;
  };

  export type DefaultSubMenuItemProps = {
    item: MenuItem;
    selectedSubItem: string | null;
    onSubItemClick: (item: MenuItem, subItem: MenuItem) => void;
    isCollapsed: boolean;
    level: number;
    isMobile: boolean;
    className?: string;
    activeClassName?: string;
    iconClassName?: string;
    labelClassName?: string;
    subMenuItemClassName?: string;
    subMenuWrapperClassName?: string;
  };

export type DefaultTooltipProps = {
  item: MenuItem;
  selectedSubItem: string | null;
  onSubItemClick: (item: MenuItem, subItem: MenuItem) => void;
  className?: string;
  subMenuWrapperClassName?: string;
  itemClassName?: string;
  activeClassName?: string;
};

export type DefaultToggleProps = {
  isCollapsed: boolean;
  toggleMenu: () => void;
  className?: string;
  iconClassName?: string;
};

export type DefaultMobileSubmenuProps = {
  item: MenuItem;
  selectedSubItem: string | null;
  onClose: () => void;
  subItems: MenuItem[];
  onSubItemClick: (item: MenuItem, subItem: MenuItem) => void;
  subMenuItemClassName?: string;
  activeClassName?: string;
  backdropClassName?: string;
  contentClassName?: string;
  headerClassName?: string;
  closeButtonClassName?: string;
};

export interface RenderTooltipProps {
  item: MenuItem;
  selectedSubItem: string | null;
  onSubItemClick: (item: MenuItem, subItem: MenuItem) => void;
}

export interface HeadlessMenuProps {
  items: MenuItem[];
  renderMenuItem: (props: DefaultMenuItemProps) => React.ReactNode;
  renderSubMenuItem: (props: DefaultSubMenuItemProps) => React.ReactNode;
  renderMobileSubmenu: (props: DefaultMobileSubmenuProps) => React.ReactNode;
  renderTooltip: (props: DefaultTooltipProps) => React.ReactNode;
  renderToggleMenu: (props: DefaultToggleProps) => React.ReactNode;
  className?: string;
}
