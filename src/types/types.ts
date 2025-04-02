export interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean; 
  }

  export interface Ticket {
    id: string;
    title: string;
    description: string;
    status: 'Open' | 'In Progress' | 'Closed'; 
    createdAt: string; 
  }
  
  export interface Client {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
  }

  export interface Review {
    id: string;
    clientName: string;
    rating: number;
    comment: string;
    date: string;
  }
  
  export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    quantity: number;
  }

  export interface Order {
    id: string;
    productName: string;
    quantity: number;
    orderDate: string;
    status: 'Pending' | 'Completed' | 'Cancelled';
  }
  
  export interface ShopItem {
    id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
  }
  export interface Report {
    id: string;
    title: string;
    date: string;
    category: string;
    description: string;
  }
  export interface Tender {
    id: string;
    title: string;
    company: string;
    deadline: string;
    status: 'Open' | 'Closed' | 'Awarded';
    budget: number;
  }
  
  export interface Settings {
    theme: 'Light' | 'Dark';
    language: 'English' | 'Russian';
    notificationsEnabled: boolean; 
  }
  export interface KnowledgeBaseEntry {
    id: string;
    title: string;
    category: string;
    content: string;
  }
  