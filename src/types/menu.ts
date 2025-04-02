import React from 'react';

export interface MenuItem {
    label: string;
    subItems?: MenuItem[];
    icon?: React.ElementType;
    path: string;
}

export interface RenderItemProps {
    item: MenuItem;
    isOpen: boolean;
    isSelected: boolean;
    onClick: () => void;
    isCollapsed: boolean;
}

export interface HeadlessMenuProps {
    items: MenuItem[];
    onSelect?: (item: string) => void;
    renderItem: (props: RenderItemProps) => React.ReactNode;
}
