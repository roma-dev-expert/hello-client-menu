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
    rating: number; // Рейтинг (1–5)
    comment: string; // Текст комментария
    date: string; // Дата отзыва
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
    orderDate: string; // Дата заказа
    status: 'Pending' | 'Completed' | 'Cancelled'; // Статус заказа
  }
  
  export interface ShopItem {
    id: string;
    name: string;
    category: string;
    price: number;
    stock: number; // Количество в наличии
  }
  export interface Report {
    id: string;
    title: string;
    date: string; // Дата создания отчёта
    category: string; // Категория отчёта
    description: string; // Краткое описание
  }
  export interface Tender {
    id: string;
    title: string;
    company: string;
    deadline: string; // Дата окончания подачи заявок
    status: 'Open' | 'Closed' | 'Awarded'; // Статус тендера
    budget: number; // Бюджет тендера
  }
  
  export interface Settings {
    theme: 'Light' | 'Dark'; // Выбор темы
    language: 'English' | 'Russian'; // Выбор языка
    notificationsEnabled: boolean; // Включение уведомлений
  }
  export interface KnowledgeBaseEntry {
    id: string;
    title: string;
    category: string;
    content: string; // Full content or description of the entry
  }
  