import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TaskIcon from "@mui/icons-material/Task";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import PaymentsIcon from "@mui/icons-material/Payments";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import BarChartIcon from "@mui/icons-material/BarChart";
import GavelIcon from "@mui/icons-material/Gavel";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { MenuItem } from '../types/menu';

export const menuItems: MenuItem[] = [
  { label: 'Trends', icon: TrendingUpIcon, path: '/trends' },
  { label: 'Tasks', icon: TaskIcon, path: '/tasks' },
  { label: 'Tickets', icon: ConfirmationNumberIcon, path: '/tickets' },
  { label: 'Payments', icon: PaymentsIcon, path: '/payments' },
  {
    label: 'Clients',
    icon: PeopleIcon,
    path: '/clients/list',
    subItems: [
      { label: 'List', icon: ChevronRightIcon, path: '/clients/list' },
      { label: 'Reviews', icon: ChevronRightIcon, path: '/clients/reviews' },
    ],
  },
  {
    label: 'Inventory',
    icon: InventoryIcon,
    path: '/inventory/products',
    subItems: [
      { label: 'Products', icon: ChevronRightIcon, path: '/inventory/products' },
      { label: 'Orders', icon: ChevronRightIcon, path: '/inventory/orders' },
    ],
  },
  { label: 'Shop', icon: StoreIcon, path: '/shop' },
  { label: 'Reports', icon: BarChartIcon, path: '/reports' },
  { label: 'Tender', icon: GavelIcon, path: '/tender' },
  { label: 'Settings', icon: SettingsIcon, path: '/settings' },
  { label: 'Knowledge Base', icon: MenuBookIcon, path: '/knowledge-base' },
];