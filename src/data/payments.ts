export interface PaymentCategory {
    balance: number;
    income: number;
    expense: number;
    total: number;
  }
  
  export const paymentsData: Record<string, PaymentCategory> = {
    All: {
      balance: 10000,
      income: 5000,
      expense: 2000,
      total: 3000,
    },
    "Наличные 3": {
      balance: 8000,
      income: 4000,
      expense: 1000,
      total: 3000,
    },
    "Наличные 2": {
      balance: 6000,
      income: 3000,
      expense: 500,
      total: 2500,
    },
    Наличные: {
      balance: 4000,
      income: 2000,
      expense: 100,
      total: 1900,
    },
  };
  