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
  