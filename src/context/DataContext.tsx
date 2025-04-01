import React, { createContext, useContext } from 'react';

interface DataContextProps<T> {
  data: T;
}

const DataContext = createContext<DataContextProps<any> | undefined>(undefined);

export const DataProvider = <T,>({ children, initialData }: { children: React.ReactNode; initialData: T }) => (
  <DataContext.Provider value={{ data: initialData }}>{children}</DataContext.Provider>
);

export const useData = <T,>() => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context as DataContextProps<T>;
};
