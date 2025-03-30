export interface MenuItem {
    label: string;
    subItems?: MenuItem[];
    icon?: React.ReactNode;
  }
  
  export interface HeadlessMenuProps {
    items: MenuItem[];
    onSelect?: (item: string) => void;
  }
  